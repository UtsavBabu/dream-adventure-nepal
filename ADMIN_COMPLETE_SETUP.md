# ✅ Complete Setup Checklist - Dream Adventure Nepal Admin Panel

## Phase 1: Local Environment Setup (5 minutes)

### Create `.env.local` file in project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Where to find these:**
- Go to [supabase.com/dashboard](https://supabase.com/dashboard)
- Select your project
- **Settings → API**
- Copy the three values above

---

## Phase 2: Database Setup (10 minutes)

### 1. Open Supabase SQL Editor
1. Go to your Supabase project dashboard
2. Left sidebar → **SQL Editor**
3. Click **"New Query"**

### 2. Run Database Setup
1. Copy entire content from `supabase-setup.sql`
2. Paste into SQL editor
3. Click **"Run"** button
4. Wait for ✅ Success message

This creates:
- ✅ `site_content` table (stores all page content)
- ✅ `admin_users` table (stores admin users)
- ✅ Storage buckets (`gallery-images`, `blog-images`, etc.)
- ✅ Row-level security policies
- ✅ File upload permissions

---

## Phase 3: Create Admin User (5 minutes)

### 1. Create Auth User
1. In Supabase dashboard → **Authentication → Users**
2. Click **"Add user"** button
3. Enter:
   - **Email**: `admin@example.com` (use your email)
   - **Password**: `MySecurePassword123!` (10+ chars, mixed case)
   - **Auto Generate Password**: OFF
4. Click **"Create user"**

### 2. Link User to Admin Table
1. Go to **SQL Editor** → New Query
2. Run this SQL:

```sql
-- Find your user ID
SELECT id, email FROM auth.users WHERE email = 'admin@example.com';
```

3. Copy the UUID from the result
4. Run this:

```sql
-- Link to admin_users table (replace UUID with actual value)
INSERT INTO admin_users (id, email, role)
VALUES ('12345678-1234-1234-1234-123456789012', 'admin@example.com', 'admin')
ON CONFLICT (id) DO UPDATE SET role = 'admin';
```

---

## Phase 4: Test Local Setup (5 minutes)

### 1. Start Development Server
```bash
npm run dev
# or
yarn dev
```

### 2. Test Login
1. Open browser → `http://localhost:3000/login`
2. Enter your email and password
3. Should redirect to `http://localhost:3000/admin`
4. See admin dashboard with all options

### 3. Test Admin Features
- ✅ Click "Manage Gallery"
- ✅ Click "Upload Image" → upload a photo
- ✅ Fill in Title & Description
- ✅ Click "Add Gallery Item"
- ✅ Item appears in list
- ✅ Go to `/gallery` page → your image shows! 🎉

---

## Phase 5: Complete All Admin Pages (20 minutes)

Go through each section and add content:

### Gallery (`/admin/gallery`)
- [ ] Upload at least 3 gallery images
- [ ] Add titles and descriptions
- [ ] Visit `/gallery` to verify display

### Blog Posts (`/admin/blog`)
- [ ] Create at least 2 blog posts
- [ ] Upload cover images
- [ ] Vary the categories
- [ ] Visit `/blog` to verify display

### Tours (`/admin/tours`)
- [ ] Add 2-3 tour packages
- [ ] Include all details
- [ ] Upload tour images
- [ ] Check `/portfolio` page

### Cities (`/admin/cities`)
- [ ] Add 3-4 cities
- [ ] Upload city images
- [ ] Add highlights for each

### Pages (`/admin/pages`)
- [ ] Update homepage content
- [ ] Update about page
- [ ] Update contact info
- [ ] Update services

---

## Phase 6: Deploy to Vercel (10 minutes)

### 1. Push to GitHub
```bash
git add .
git commit -m "Add Supabase admin setup with file uploads"
git push origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"
5. Go to **Settings → Environment Variables**
6. Add these three variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
7. Click "Deploy"

### 3. Configure Supabase for Production
1. In Supabase → **Authentication → URL Configuration**
2. Under "Site URL" add your Vercel domain:
   - `https://your-app.vercel.app`
3. Save

### 4. Test Production Login
1. Go to `https://your-app.vercel.app/login`
2. Login with your credentials
3. Should work same as local! 🚀

---

## File Upload System Reference

### How It Works:
1. **Admin clicks "Upload Image"**
2. **Browser compresses & sends to `/api/upload`**
3. **Server uploads to Supabase Storage**
4. **Public URL returned automatically**
5. **Image URL saved to database**
6. **Visitors see image on public pages**

### Upload Buckets:
| Section | Bucket | Max Size |
|---------|--------|----------|
| Gallery | `gallery-images` | 5MB |
| Blog | `blog-images` | 5MB |
| Tours | `tour-images` | 5MB |
| Cities | `city-images` | 5MB |
| Logo | `logos` | 5MB |

---

## Console & URLs Guide

### Local Development
- **Login**: `http://localhost:3000/login`
- **Admin**: `http://localhost:3000/admin`
- **Gallery**: `http://localhost:3000/gallery`
- **Blog**: `http://localhost:3000/blog`
- **Contact**: `http://localhost:3000/contact`

### Production (Vercel)
- Replace `localhost:3000` with your Vercel domain
- Example: `https://dream-nepal.vercel.app/login`

---

## Troubleshooting

### ❌ "Invalid email or password"
- Verify email matches Supabase user (case-sensitive)
- Check password typed correctly
- Reset password in Supabase dashboard

### ❌ "Can't upload image"
- File size < 5MB?
- File format PNG/JPG/WebP/SVG?
- Check browser console (F12) for details
- Verify `.env.local` has all 3 keys

### ❌ "Upload says 'Upload failed'"
- Check if file format is supported
- Try smaller file (<2MB)
- Check Supabase Storage buckets exist
- Verify Service Role Key in `.env.local`

### ❌ "Can't login to admin"
- Is it redirecting to login? Check you're an admin
- Go to Supabase SQL Editor:
```sql
SELECT * FROM admin_users WHERE email = 'your-email@example.com';
```
- Role should be 'admin'

### ❌ "Database tables don't exist"
- Run SQL setup again (copy entire `supabase-setup.sql`)
- Check for error messages
- Make sure you clicked "Run" button

---

## Quick Commands

```bash
# Start development
npm run dev

# Check for errors
npm run lint

# Build for production
npm run build

# Test production build locally
npm run build && npm run start
```

---

## Security Checklist

- ✅ `.env.local` is in `.gitignore` (never commit!)
- ✅ Service Role Key only used server-side
- ✅ Admin users verified in database
- ✅ Row-level security enabled
- ✅ Storage policies restrict uploads to admins

---

## What's Been Set Up

### ✨ Features Implemented:
- ✅ Email/password admin authentication
- ✅ Protected admin routes with ProtectedRoute component
- ✅ Supabase Storage for images (gallery, blog, tours, cities, logo)
- ✅ Auto-generating public URLs for images
- ✅ File uploader component with preview
- ✅ Upload API route (`/api/upload`)
- ✅ Gallery management with image uploads
- ✅ Blog management with cover images
- ✅ Real-time content syncing to database
- ✅ Row-level security policies
- ✅ Admin role management

### 📝 Pages Ready for Admin:
- Homepage (`/` - Manage Pages)
- Gallery (`/gallery` - Manage Gallery)
- Blog (`/blog` - Manage Blogs)
- Tours (`/portfolio` - Manage Tours)
- Cities & Attractions
- Contact page info
- Services section

---

## Next Steps After Complete Setup

1. **Invite additional admins** (if needed):
   - Create users in Supabase → Authentication
   - Run SQL to add them to `admin_users` table

2. **Real-time backups** (Supabase handles):
   - No action needed
   - Database backed up daily by default

3. **Customize UI colors**:
   - Edit `tailwind` colors in theme
   - All admin pages use consistent styling

4. **Add more content types**:
   - Modify `adminData.ts` types
   - Add fields to `site_content` table
   - Create new admin pages

---

## Support & Resources

- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Your Project Files**:
  - Authentication: `components/auth/`
  - Admin Components: `components/admin/`
  - API Routes: `app/api/`
  - Admin Pages: `app/admin/`

---

**🎉 You're all set! Start adding amazing content to Dream Adventure Nepal!**

**Last Updated:** April 9, 2026
