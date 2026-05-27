import { Sparkles } from "lucide-react";
import Link from "next/link";
import { getAllProcedures, getProcedureCardTitle } from "@/lib/procedures";
import { navLinks, siteConfig } from "@/lib/site";
import { ViberButton } from "./ViberButton";

export function Footer() {
  const quickLinks = navLinks.filter((link) => link.href !== "/#contact");
  const year = new Date().getFullYear();
  const procedures = getAllProcedures();

  return (
    <footer className="border-t border-border bg-card px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" aria-hidden />
              <span className="text-lg font-semibold text-primary">{siteConfig.name}</span>
            </div>
            <p className="mb-4 text-muted-foreground">
              {siteConfig.tagline}. {siteConfig.owner}, {siteConfig.address.city}.
            </p>
            <ViberButton size="sm" showLabel={false} />
          </div>

          <nav aria-label="Процедури">
            <h2 className="mb-4 text-lg text-primary">Процедури</h2>
            <ul className="list-none space-y-2">
              {procedures.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/proceduri/${p.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {getProcedureCardTitle(p)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Бързи връзки">
            <h2 className="mb-4 text-lg text-primary">Навигация</h2>
            <ul className="list-none space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-lg text-primary">Контакти</h2>
            <address className="space-y-2 not-italic text-muted-foreground">
              <p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email[0]}`}>{siteConfig.email[0]}</a>
              </p>
              <p>
                {siteConfig.address.street}, {siteConfig.address.city}
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            &copy; {year} {siteConfig.name} · {siteConfig.owner}. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
