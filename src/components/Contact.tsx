import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { BookingCTA } from "./BookingCTA";
import { ViberButton } from "./ViberButton";

export function Contact() {
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city} ${siteConfig.address.postalCode}`;

  return (
    <section id="contact" className="px-4 py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <h2 id="contact-heading" className="mb-4 text-4xl text-primary md:text-5xl">
            Свържете се с мен
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteConfig.address.city} · {siteConfig.owner}
          </p>
        </header>

        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <address className="space-y-6 not-italic">
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"
                aria-hidden
              >
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-xl">Телефон</h3>
                <p className="text-muted-foreground">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="hover:text-primary"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#7360f2]/20"
                aria-hidden
              >
                <span className="text-xl" role="img" aria-hidden>
                  💜
                </span>
              </div>
              <div>
                <h3 className="mb-1 text-xl">Viber</h3>
                <p className="mb-2 text-muted-foreground">Директен чат с едно натискане</p>
                <ViberButton size="md" />
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"
                aria-hidden
              >
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-xl">Имейл</h3>
                {siteConfig.email.map((email) => (
                  <p key={email} className="text-muted-foreground">
                    <a href={`mailto:${email}`} className="hover:text-primary">
                      {email}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20"
                aria-hidden
              >
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-xl">Адрес</h3>
                <p className="text-muted-foreground">{siteConfig.address.street}</p>
                <p className="text-muted-foreground">
                  {siteConfig.address.city} {siteConfig.address.postalCode},{" "}
                  {siteConfig.address.country}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                  className="mt-2 inline-block text-sm text-primary hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Вижте на картата
                </a>
              </div>
            </div>
          </address>

          <div className="h-96 overflow-hidden rounded-lg border border-border">
            <iframe
              title={`Карта — ${siteConfig.name}, ${fullAddress}`}
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <BookingCTA />
      </div>
    </section>
  );
}
