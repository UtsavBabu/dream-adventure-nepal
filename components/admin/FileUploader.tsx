"use client";

import { ChangeEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

type FileUploaderProps = {
  bucket: "gallery-images" | "blog-images" | "tour-images" | "city-images" | "logos";
  onUpload: (url: string) => void;
  accept?: string;
  maxSize?: number; // in MB
};

export default function FileUploader({
  bucket,
  onUpload,
  accept = "image/*",
  maxSize = 5,
}: FileUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState<string>("");

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset states
    setError("");
    setPreview("");

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload file
    setUploading(true);
    try {
      // Get the session token
      const {
        data: { session },
      } = await supabase!.auth.getSession();

      if (!session) {
        setError("You must be logged in to upload files");
        setUploading(false);
        return;
      }

      // Upload via API route
      const formData = new FormData();
      formData.append("file", file);
      formData.append("bucket", bucket);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (!response.ok) {
        const { error: uploadError } = await response.json();
        setError(uploadError || "Upload failed");
        setUploading(false);
        return;
      }

      const { url } = await response.json();
      onUpload(url);
      setPreview("");
      // Reset the input
      event.target.value = "";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900 p-6 text-center">
        <input
          type="file"
          accept={accept}
          onChange={handleChange}
          disabled={uploading}
          className="hidden"
          id={`file-upload-${bucket}`}
        />
        <label
          htmlFor={`file-upload-${bucket}`}
          className="cursor-pointer"
        >
          <div className="text-slate-400 mb-2">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-slate-300">
            {uploading ? "Uploading..." : "Click to upload or drag and drop"}
          </p>
          <p className="text-xs text-slate-500">
            {accept} up to {maxSize}MB
          </p>
        </label>
      </div>

      {preview && (
        <div className="space-y-2">
          <p className="text-sm text-slate-300">Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="rounded-lg max-h-40 max-w-full object-contain"
          />
        </div>
      )}

      {error && (
        <div className="text-red-400 text-sm bg-red-900/20 rounded-lg p-3">
          {error}
        </div>
      )}
    </div>
  );
}
