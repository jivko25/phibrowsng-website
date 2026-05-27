import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProcedureDetail } from "@/components/ProcedureDetail";
import {
  getAllProcedures,
  getProcedureBySlug,
  getProcedureCardTitle,
} from "@/lib/procedures";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProcedures().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);
  if (!procedure) return {};

  const title = getProcedureCardTitle(procedure);

  return {
    title,
    description: procedure.shortDescription,
    alternates: {
      canonical: `/proceduri/${slug}`,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: procedure.shortDescription,
      url: `${siteConfig.url}/proceduri/${slug}`,
      images: [{ url: procedure.cardImage, alt: procedure.cardImageAlt }],
    },
  };
}

export default async function ProcedurePage({ params }: PageProps) {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);

  if (!procedure) notFound();

  return (
    <>
      <Header />
      <main id="main-content" className="px-4 pb-20 pt-28">
        <div className="mx-auto max-w-7xl">
          <ProcedureDetail procedure={procedure} />
        </div>
      </main>
      <Footer />
    </>
  );
}
