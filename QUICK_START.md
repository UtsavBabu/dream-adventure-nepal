# 🎯 Quick Start - Admin Panel & Supabase

## ⚡ 5-Minute Setup (After Supabase Project Created)

### 1. Add to `.env.local` (copy from Supabase dashboard Settings → API):
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
```

### 2. Run SQL Setup
- Go to Supabase SQL Editor
- Paste entire `supabase-setup.sql` content
- Click "Run"

### 3. Create Admin User
- **Authentication → Users** → "Add user"
- Email: your-email@example.com
- Password: strong-password-10+chars
- Then run this SQL:

```sql
SELECT id, email FROM auth.users WHERE email = 'your-email@example.com';
-- Copy the UUID, then run:
INSERT INTO admin_users (id, email, role)
VALUES ('uuid-here', 'your-email@example.com', 'admin');
```

### 4. Login & Test
```bash
npm run dev
# Visit: http://localhost:3000/login
# Email: your-email@example.com
# Password: your-password
```

---

## 📝 What's Now Working

✅ **Email authentication** with Supabase  
✅ **Protected admin routes** - only admins can access  
✅ **Gallery management** - upload images, auto-hosted  
✅ **Blog management** - create posts with cover images  
✅ **Tours admin** - add tour packages with images  
✅ **Cities/Attractions** - manage with image uploads  
✅ **File uploads** - auto-generated public URLs  
✅ **Database syncing** - all changes saved to Supabase  
✅ **Row-level security** - admin-only access control  

---

## 🎨 Admin Panel Sections

| Section | URL | Features |
|---------|-----|----------|
| Dashboard | `/admin` | Overview & navigation |
| Pages | `/admin/pages` | Homepage, About, Contact, Logo |
| Blog | `/admin/blog` | Create posts with Cover image |
| Gallery | `/admin/gallery` | Upload gallery images |
| Tours | `/admin/tours` | Add tour packages + images |
| Cities | `/admin/cities` | Manage cities + images |
| Attractions | `/admin/attractions` | Add attractions + images |

---

## 🚀 Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Supabase setup"
   git push origin main
   ```

2. **Go to Vercel** → Import repo

3. **Add Environment Variables**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

4. **Deploy!** ✨

5. **Update Supabase** (in Settings → Authentication → URL Configuration):
   - Site URL: `https://your-app.vercel.app`

---

## 📋 File Structure

```
app/
  api/upload/route.ts          ← File upload handler
  admin/
    page.tsx                   ← Dashboard
    gallery/page.tsx           ← Upload gallery images
    blog/page.tsx              ← Create blog posts
    tours/page.tsx             ← Add tour packages
    cities/page.tsx            ← Manage cities
    attractions/page.tsx       ← Add attractions
    pages/page.tsx             ← Homepage/About/Contact

components/
  admin/
    FileUploader.tsx           ← Reusable upload component
    LogoUploader.tsx
    useAdminContent.tsx        ← Database sync hook
  auth/
    AuthContext.tsx            ← Auth provider
    ProtectedRoute.tsx         ← Admin protection

lib/
  supabase.ts                  ← Supabase client
```

---

## ❓ Troubleshooting

### Can't login?
- Verify email matches Supabase user (case-sensitive)
- Check admin_users table has your user with role='admin'

### Upload fails?
- File < 5MB?
- Check .env.local has all 3 environment variables
- Verify Supabase service key is correct

### Content not saving?
- Check Supabase connection in browser console (F12)
- Verify row-level security policies in SQL Editor

---

## 📚 Complete Docs

- **Full Setup**: See `SUPABASE_SETUP.md`
- **Step-by-Step**: See `ADMIN_COMPLETE_SETUP.md`
- **SQL Schema**: See `supabase-setup.sql`

---

**You're all set! Login at `/login` and start managing your content! 🎉**
