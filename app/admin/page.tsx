import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <Link href="/admin/pages">
          <div className="p-6 bg-slate-800 rounded-xl cursor-pointer hover:bg-slate-700 transition">
            <h2 className="text-xl font-semibold">Manage Pages</h2>
            <p className="text-gray-400 mt-2">
              Edit homepage, about, and contact content
            </p>
          </div>
        </Link>

        <Link href="/admin/blog">
          <div className="p-6 bg-slate-800 rounded-xl cursor-pointer hover:bg-slate-700 transition">
            <h2 className="text-xl font-semibold">Manage Blogs</h2>
            <p className="text-gray-400 mt-2">
              Create and edit blog posts
            </p>
          </div>
        </Link>

        <Link href="/admin/gallery">
          <div className="p-6 bg-slate-800 rounded-xl cursor-pointer hover:bg-slate-700 transition">
            <h2 className="text-xl font-semibold">Manage Gallery</h2>
            <p className="text-gray-400 mt-2">
              Upload and manage images
            </p>
          </div>
        </Link>

        <Link href="/admin/tours">
          <div className="p-6 bg-slate-800 rounded-xl cursor-pointer hover:bg-slate-700 transition">
            <h2 className="text-xl font-semibold">Manage Tours</h2>
            <p className="text-gray-400 mt-2">
              Add and update trekking packages
            </p>
          </div>
        </Link>

      </div>
    </main>
  );
}