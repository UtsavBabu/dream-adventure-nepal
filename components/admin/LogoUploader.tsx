"use client";

import { ChangeEvent } from "react";
import { SiteContent } from "@/lib/adminData";

type LogoUploaderProps = {
  content: SiteContent;
  updateContent: (next: SiteContent) => void;
};

export default function LogoUploader({ content, updateContent }: LogoUploaderProps) {
  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        updateContent({ ...content, logoBase64: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="rounded-3xl bg-slate-800 p-6 shadow-lg ring-1 ring-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4">Upload Your Logo</h2>
      <p className="text-slate-400 mb-4">
        Upload a PNG, JPG, or SVG logo and it will appear in the site header immediately.
      </p>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-[#F97316] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
      />
    </div>
  );
}
