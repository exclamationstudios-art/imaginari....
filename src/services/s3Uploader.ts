import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const REGION = import.meta.env.VITE_AWS_REGION || 'us-east-2';
const BUCKET_NAME = import.meta.env.VITE_AWS_BUCKET_NAME || 'maginari-ecommerce-items';
const ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY_ID || '';
const SECRET_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '';

let s3Client: S3Client | null = null;

try {
  if (ACCESS_KEY && SECRET_KEY) {
    s3Client = new S3Client({
      region: REGION,
      credentials: {
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_KEY,
      },
    });
  }
} catch (error) {
  console.error("Failed to initialize S3 client:", error);
}

/**
 * Uploads a base64 Data URL to AWS S3 and returns the public URL.
 * @param base64Data The base64 Data URL to upload
 * @param filename The desired filename
 * @returns The public URL of the uploaded image
 */
export async function uploadBase64ToS3(base64Data: string, filename: string): Promise<string> {
  if (!s3Client) {
    console.warn("S3 Client not initialized. Returning base64 string directly as fallback.");
    return base64Data;
  }

  // If it's already an http link, don't upload
  if (base64Data.startsWith('http')) {
    return base64Data;
  }

  try {
    // 1. Extract the base64 payload and the content type
    // Format: "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
    const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      console.warn("Invalid base64 Data URL provided. Returning original string.");
      return base64Data;
    }

    const contentType = matches[1];
    const base64Payload = matches[2];

    // 2. Convert base64 to Blob/Buffer
    const binaryString = window.atob(base64Payload);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // 3. Generate a unique key to prevent overwriting
    const uniqueKey = `uploads/${Date.now()}-${filename.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    // 4. Create upload command
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: uniqueKey,
      Body: bytes,
      ContentType: contentType,
    });

    // 5. Execute upload
    await s3Client.send(command);

    // 6. Return the public URL
    return `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${uniqueKey}`;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    // Fallback: return base64 string on upload failure
    return base64Data;
  }
}
