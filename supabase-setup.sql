-- Enable Row Level Security
ALTER TABLE IF EXISTS site_content ENABLE ROW LEVEL SECURITY;

-- Create site_content table
CREATE TABLE IF NOT EXISTS site_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content_type TEXT NOT NULL, -- 'home', 'about', 'contact', 'services', 'portfolio', 'cities', 'attractions', 'gallery', 'blog'
  content_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create admin_users table for role management
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on admin_users
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Policies for admin_users
CREATE POLICY "Users can view their own admin status" ON admin_users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can view all admin users" ON admin_users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create contact_messages table for Contact Us submissions
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts for contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can read contact messages" ON contact_messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Policies for site_content
CREATE POLICY "Admins can manage all content" ON site_content
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_site_content_updated_at
  BEFORE UPDATE ON site_content
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- STORAGE: Create buckets for file uploads
-- ============================================

-- Create gallery-images bucket (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery-images', 'gallery-images', true)
ON CONFLICT DO NOTHING;

-- Create blog-images bucket (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT DO NOTHING;

-- Create tour-images bucket (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('tour-images', 'tour-images', true)
ON CONFLICT DO NOTHING;

-- Create city-images bucket (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('city-images', 'city-images', true)
ON CONFLICT DO NOTHING;

-- Create logo bucket (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('logos', 'logos', true)
ON CONFLICT DO NOTHING;

-- ============================================
-- STORAGE POLICIES: Allow admins to upload
-- ============================================

-- Gallery images - admins can upload, everyone can read
CREATE POLICY "Admins can upload gallery images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'gallery-images' AND
  EXISTS (
    SELECT 1 FROM admin_users
    WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Public can read gallery images" ON storage.objects
FOR SELECT USING (bucket_id = 'gallery-images');

-- Blog images - admins can upload, everyone can read
CREATE POLICY "Admins can upload blog images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'blog-images' AND
  EXISTS (
    SELECT 1 FROM admin_users
    WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Public can read blog images" ON storage.objects
FOR SELECT USING (bucket_id = 'blog-images');

-- Tour images - admins can upload, everyone can read
CREATE POLICY "Admins can upload tour images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'tour-images' AND
  EXISTS (
    SELECT 1 FROM admin_users
    WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Public can read tour images" ON storage.objects
FOR SELECT USING (bucket_id = 'tour-images');

-- City images - admins can upload, everyone can read
CREATE POLICY "Admins can upload city images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'city-images' AND
  EXISTS (
    SELECT 1 FROM admin_users
    WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Public can read city images" ON storage.objects
FOR SELECT USING (bucket_id = 'city-images');

-- Logo - admins can upload, everyone can read
CREATE POLICY "Admins can upload logos" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'logos' AND
  EXISTS (
    SELECT 1 FROM admin_users
    WHERE id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Public can read logos" ON storage.objects
FOR SELECT USING (bucket_id = 'logos');

-- Admins can delete their own uploads
CREATE POLICY "Admins can delete uploads" ON storage.objects
FOR DELETE USING (
  EXISTS (
    SELECT 1 FROM admin_users
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- Insert default content (you can run this after creating the tables)
-- This will be handled by the application code