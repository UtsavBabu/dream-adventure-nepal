# Dream Adventure Nepal - Admin Setup Guide

## 🚀 Supabase Setup for Admin Authentication

### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Wait for the project to be ready

### Step 2: Get Project Credentials
1. Go to Project Settings → API
2. Copy your Project URL and anon/public key
3. Update `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_actual_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
```

### Step 3: Set Up Database
1. Go to SQL Editor in your Supabase dashboard
2. Run the SQL from `supabase-setup.sql` to create tables

### Step 4: Enable Authentication
1. Go to Authentication → Settings
2. Configure your site URL (for production: your Vercel URL)
3. Optionally configure email templates

### Step 5: Create Admin User
1. Go to Authentication → Users
2. Click "Add user"
3. Enter your email and password
4. After creation, go to SQL Editor and run:
```sql
INSERT INTO admin_users (id, email, role)
VALUES ('user-uuid-from-auth-users', 'your-email@example.com', 'admin');
```
Replace `user-uuid-from-auth-users` with the actual UUID from the auth.users table.

### Step 6: Deploy
1. Push your code to GitHub
2. Vercel will auto-deploy
3. Set environment variables in Vercel dashboard

## 🔐 Admin Features
- Secure login/logout
- Protected admin routes
- Database-backed content management
- Real-time content updates

## 📝 Content Management
All content is now stored in Supabase database:
- Cities, Attractions, Tours
- Blog posts, Gallery images
- Contact info, Services
- Logo uploads

## 🛠️ Development
If Supabase is not configured, the app falls back to localStorage for development.