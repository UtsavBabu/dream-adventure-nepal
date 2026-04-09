"use client";

import { useAdminMessages } from "@/components/admin/useAdminMessages";

export default function AdminMessagesPage() {
  const { messages, loading, error, refresh } = useAdminMessages();

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Contact Requests</h1>
          <p className="text-slate-400">View all messages submitted through the Contact Us form.</p>
        </div>
        <button
          onClick={refresh}
          className="rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EA580C]"
        >
          Refresh
        </button>
      </div>

      <div className="space-y-6">
        {loading && (
          <div className="rounded-3xl bg-slate-800 p-8 text-slate-300">Loading messages...</div>
        )}

        {error && (
          <div className="rounded-3xl bg-rose-900/80 p-6 text-red-200">{error}</div>
        )}

        {!loading && !error && messages.length === 0 && (
          <div className="rounded-3xl bg-slate-800 p-8 text-slate-300">No contact requests found.</div>
        )}

        {messages.map((message) => (
          <div key={message.id} className="rounded-3xl bg-slate-800 p-8 shadow-xl ring-1 ring-slate-700">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{message.name}</h2>
                <p className="text-slate-400 text-sm">{new Date(message.created_at).toLocaleString()}</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-slate-300 sm:text-right">
                <span>Email: {message.email}</span>
                <span>Phone: {message.phone || 'N/A'}</span>
              </div>
            </div>
            <p className="text-slate-200 whitespace-pre-line">{message.message}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
