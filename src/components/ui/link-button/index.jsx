"use client"
import Link from "next/link";

export default function LinkButton({ href = "#", text, className = "" }) {
  const variants = {
    default: "bg-primary-background text-button-text min-h-13.5 min-w-62 rounded-button flex items-center justify-center",
  };

  return (
    <Link
      href={href}
      className={`${variants.default} ${className}`}
    >
      {text}
    </Link>
  );
}
