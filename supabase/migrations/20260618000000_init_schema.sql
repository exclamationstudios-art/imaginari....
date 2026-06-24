-- Create layouts table
CREATE TABLE IF NOT EXISTS public.layouts (
  id TEXT PRIMARY KEY,
  hero_banner TEXT,
  banner1 TEXT,
  banner2 TEXT,
  banner3 TEXT,
  banner4 TEXT,
  hero_products JSONB DEFAULT '[]'::jsonb,
  banner1_products JSONB DEFAULT '[]'::jsonb,
  banner2_products JSONB DEFAULT '[]'::jsonb,
  banner3_products JSONB DEFAULT '[]'::jsonb,
  banner4_products JSONB DEFAULT '[]'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.layouts ENABLE ROW LEVEL SECURITY;

-- Allow public access to read layouts
CREATE POLICY "Allow public read access" ON public.layouts
  FOR SELECT USING (true);

-- Allow public access to insert/update layouts (anon or authenticated)
CREATE POLICY "Allow public insert access" ON public.layouts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access" ON public.layouts
  FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Allow public delete access" ON public.layouts
  FOR DELETE USING (true);
