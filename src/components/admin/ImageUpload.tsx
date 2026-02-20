"use client";

import { useCallback, useRef, useState } from "react";
import { Upload, X, ImageIcon } from "lucide-react";
import { uploadBlogImage } from "@/lib/supabase/upload";

interface ImageUploadProps {
  name: string;
  defaultValue?: string;
  onChange?: (url: string) => void;
}

export default function ImageUpload({ name, defaultValue, onChange }: ImageUploadProps) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    async (file: File) => {
      setError("");
      setUploading(true);
      try {
        const publicUrl = await uploadBlogImage(file);
        setUrl(publicUrl);
        onChange?.(publicUrl);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setUploading(false);
      }
    },
    [onChange]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const remove = () => {
    setUrl("");
    setError("");
    onChange?.("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-2">
      {/* Hidden input so the URL is submitted with the form */}
      <input type="hidden" name={name} value={url} />

      {url ? (
        <div className="relative rounded-xl overflow-hidden border border-border bg-surface">
          <img
            src={url}
            alt="Upload preview"
            className="w-full h-48 object-cover"
          />
          <button
            type="button"
            onClick={remove}
            className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
          className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-8 cursor-pointer transition-colors ${
            uploading
              ? "border-primary/50 bg-primary/5"
              : "border-border hover:border-primary/40 bg-surface"
          }`}
        >
          {uploading ? (
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          ) : (
            <>
              <ImageIcon className="w-8 h-8 text-muted" />
              <span className="text-sm text-muted">
                Drag & drop or click to upload
              </span>
              <span className="text-xs text-muted/60">
                JPEG, PNG, WebP, GIF, AVIF (max 5 MB)
              </span>
            </>
          )}
        </div>
      )}

      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
    </div>
  );
}
