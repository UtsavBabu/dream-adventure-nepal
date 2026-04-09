"use client";

import { useMemo, useState } from "react";
import { useAdminContent } from "@/components/admin/useAdminContent";

export default function BlogAdmin() {
  const { content, loaded, updateContent } = useAdminContent();
  const [newPost, setNewPost] = useState({ title: "", excerpt: "", date: "", category: "" });

  if (!loaded) return <div className="min-h-screen bg-slate-900 text-white p-8">Loading...</div>;

  const setBlog = (posts: typeof content.blog) => updateContent({ ...content, blog: posts });

  const addPost = () => {
    if (!newPost.title || !newPost.excerpt || !newPost.date) return;
    setBlog([
      ...content.blog,
      { id: `blog-${Date.now()}`, ...newPost },
    ]);
    setNewPost({ title: "", excerpt: "", date: "", category: "" });
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Manage Blogs</h1>
      <p className="text-gray-400 mb-10">Create, edit, and remove blog posts.</p>

      <div className="grid gap-10 lg:grid-cols-2">
        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Add New Blog Post</h2>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Title</span>
            <input
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-slate-300">Excerpt</span>
            <textarea
              value={newPost.excerpt}
              onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
            />
          </label>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <label className="block">
              <span className="text-sm text-slate-300">Date</span>
              <input
                value={newPost.date}
                onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Category</span>
              <input
                value={newPost.category}
                onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:outline-none focus:border-[#F97316]"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={addPost}
            className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
          >
            Add Post
          </button>
        </section>

        <section className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
          <h2 className="text-2xl font-semibold mb-4">Current Blog Posts</h2>
          <div className="space-y-4">
            {content.blog.map((post) => (
              <div key={post.id} className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">{post.title}</h3>
                    <p className="text-slate-400 text-sm">{post.category} • {post.date}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setBlog(content.blog.filter((item) => item.id !== post.id))}
                    className="rounded-full border border-red-500 px-3 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
                <p className="mt-3 text-slate-300">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
