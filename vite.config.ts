import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/custom-layout') {
            const filePath = path.resolve(__dirname, 'public/custom_layout.json');
            
            if (req.method === 'GET') {
              res.setHeader('Content-Type', 'application/json');
              if (fs.existsSync(filePath)) {
                res.end(fs.readFileSync(filePath, 'utf8'));
              } else {
                res.end(JSON.stringify({}));
              }
            } else if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              req.on('end', () => {
                try {
                  fs.writeFileSync(filePath, body, 'utf8');
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true }));
                } catch (e) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'Failed to write layout file' }));
                }
              });
            } else if (req.method === 'DELETE') {
              try {
                if (fs.existsSync(filePath)) {
                  fs.unlinkSync(filePath);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              } catch (e) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'Failed to delete layout file' }));
              }
            }
          } else {
            next();
          }
        });
      }
    },
  };
});
