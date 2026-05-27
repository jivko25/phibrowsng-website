"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} — начална страница`}>
            <Sparkles className="h-8 w-8 text-primary" aria-hidden />
            <span className="text-xl font-semibold text-primary">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Основна навигация">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.href === "/#contact"
                    ? "rounded-lg bg-primary px-6 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
                    : "text-foreground transition-colors hover:text-primary"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Затвори менюто" : "Отвори менюто"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-nav"
            className="flex flex-col gap-4 border-t border-border py-4 md:hidden"
            aria-label="Мобилна навигация"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
