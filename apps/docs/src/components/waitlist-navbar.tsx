"use client";

import { Github } from "lucide-react";
import Link from "next/link";
import { urls } from "@/config/urls";

export function WaitlistNavbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-linear-to-b from-black/20 to-transparent">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link
          className="font-bold text-white text-xl transition-colors hover:text-white/80"
          href="/"
        >
          Sora UI
        </Link>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            aria-label="GitHub"
            className="text-white/70 transition-colors hover:text-white"
            href={urls.github.repo}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
