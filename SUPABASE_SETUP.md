# Dream Adventure Nepal - Complete Admin & Supabase Setup Guide

## 🚀 IMPORTANT: Environment Variables Setup

First, add these to your `.env.local` file (create if doesn't exist):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Example (replace with YOUR actual values):
# NEXT_PUBLIC_SUPABASE_URL=https://yourproject.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
# SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Where to find these keys:**
1. Go to your [Supabase Dashboard](https://supabase.com)
2. Select your project
3. Go to **Settings → API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

---

## 📋 Step-by-Step Setup

### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in or create account
4. Create a new project
5. Wait for setup to complete (2-3 minutes)

### Step 2: Run Database Setup SQL
1. In your Supabase dashboard, go to **SQL Editor**
2. Click **"New Query"**
3. Copy and paste **entire content** of `supabase-setup.sql` from this project
4. Click **"Run"** button
5. Wait for success message

### Step 3: Set Environment Variables
1. Copy your keys from Supabase dashboard (Settings → API)
2. Create `.env.local` file in project root
3. Paste the environment variables (see above)
4. **Never commit this file** (it's in .gitignore)

### Step 4: Create Your Admin User

#### Via Supabase Dashboard:
1. Go to **Authentication → Users**
2. Click **"Add user"** button
3. Enter:
   - Email: `your-email@example.com`
   - Password: `strong-secure-password` (10+ characters)
   - Auto Generate Password: OFF
4. Click **"Create user"**

#### Via SQL (Link auth user to admin_users table):
1. Go to **SQL Editor**
2. Run this query:
```sql
-- First, find the user ID of your created user
SELECT id, email FROM auth.users WHERE email = 'your-email@example.com';

-- Then copy the UUID and run this (replace the uuid):
INSERT INTO admin_users (id, email, role)
VALUES ('copy-uuid-here-without-quotes', 'your-email@example.com', 'admin')
ON CONFLICT (id) DO UPDATE SET role = 'admin';
```

### Step 5: Test Admin Login
1. Go to `http://localhost:3000/login` (or your domain)
2. Enter your email and password
3. You should be redirected to `/admin`

---

## 🎯 How to Use Admin Panel

### ✅ Login
- Navigate to `/login`
- Enter your admin email and password
- You're redirected to admin dashboard

### 📝 Manage Pages (Home, About, Contact, Services)
- Click **"Manage Pages"** on admin dashboard
- Edit content for each page
- Changes save automatically to Supabase database

### 🖼️ Manage Gallery
1. Click **"Manage Gallery"** 
2. Fill in:
   - **Title**: Gallery item name
   - **Description**: Details about the image
   - **Upload Image**: Click to upload image (auto-hosted on Supabase)
3. Click **"Add Gallery Item"**
4. Gallery appears on `/gallery` page

### 📚 Manage Blog
1. Click **"Manage Blogs"**
2. Fill in:
   - **Title**: Blog post title
   - **Excerpt**: Short summary
   - **Date**: Publication date
   - **Category**: Travel, Culture, Adventure, Tips, News
   - **Cover Image**: Upload blog cover photo
3. Click **"Add Blog Post"**
4. Blog appears on `/blog` page

### 🏔️ Manage Tours
1. Click **"Manage Tours"**
2. Add tour packages with:
   - Name, Duration, Difficulty
   - Price, Maximum Altitude
   - Best Season, Description
   - Tour image upload
3. Tours appear on `/portfolio` page

### 🏙️ Manage Cities & Attractions
- Similar to tours
- Add cities with highlights
- Add attractions with details

---

## 📁 File Upload System

All file uploads are stored on **Supabase Storage**:

| Section | Bucket | Folder |
|---------|--------|--------|
| Gallery | `gallery-images` | Public |
| Blog | `blog-images` | Public |
| Tours | `tour-images` | Public |
| Cities | `city-images` | Public |
| Logo | `logos` | Public |

**Key Features:**
- ✅ Automatic file hosting
- ✅ Public URLs generated instantly
- ✅ Max 5MB per file
- ✅ Supports PNG, JPG, WEBP, SVG

---

## 🔐 Security & Permissions

### Admin-Only Access
- Only users with `role = 'admin'` can:
  - Access admin pages
  - Upload files
  - Edit content
  - Delete items

### Public Access
- Everyone can:
  - View all content
  - Download images from storage
  - Read all pages

### Row Level Security (RLS)
- Enabled on all tables
- Policies prevent unauthorized access
- Service role key required for API uploads

---

## ⚠️ Common Issues & Fixes

### Issue: "Email/Password incorrect"
**Solution:**
- Verify email matches exactly (case-sensitive)
- Check password typed correctly
- Make sure admin user was created
- Look for SMTP error in Supabase dashboard

### Issue: "Upload failed"
**Solution:**
- Check file size < 5MB
- Verify file format (PNG, JPG, WebP, SVG)
- Confirm Supabase service key in `.env.local`
- Check network connection

### Issue: "Can't access admin panel"
**Solution:**
- Login page not redirecting? Check browser console for errors
- Verify Supabase credentials in `.env.local`
- Try clearing browser cookies/cache
- Check if `isAdmin` value is correct in ProtectedRoute

### Issue: "Database connection failed"
**Solution:**
- Run SQL setup again in Supabase editor
- Verify RLS policies are created
- Check if storage buckets exist

---

## 📝 Content Structure in Database

All content stored in `site_content` table as JSONB:

```json
{
  "content_type": "gallery",
  "content_data": {
    "id": "gallery-1234567890",
    "title": "Mountain View",
    "description": "Beautiful Himalayan landscape",
    "imageUrl": "https://supabase.../gallery-images/timestamp-filename.jpg"
  }
}
```

This allows unlimited content fields and flexibility!

---

## 🚢 Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Deploy!

---

## 🆘 Need Help?

1. Check Supabase dashboard for errors
2. Look at browser console (F12)
3. Check Vercel logs for deployment issues
4. Visit Supabase documentation: https://supabase.com/docs

---

## ✨ Features Included

- ✅ Email/password authentication
- ✅ Admin role management
- ✅ File upload to cloud storage
- ✅ Real-time content sync
- ✅ Protected admin routes
- ✅ Gallery management with image upload
- ✅ Blog management with cover images
- ✅ Tour/attraction management
- ✅ Automatic public URLs for images
- ✅ Database backup (Supabase handles it)

---

**Last Updated:** April 9, 2026