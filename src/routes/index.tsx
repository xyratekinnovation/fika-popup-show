import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  About,
  VisionMission,
  Categories,
  Achievements,
  Editions,
  Experience,
  Collaborate,
  Sponsors,
  Partners,
  Book,
  Team,
  Contact,
} from "@/components/sections";
import { SEO } from "@/config/seo-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO.title },
      { name: "description", content: SEO.description },
      { property: "og:title", content: SEO.title },
      { property: "og:description", content: SEO.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SEO.siteName },
      { name: "twitter:card", content: SEO.twitterCard },
      { name: "twitter:title", content: SEO.title },
      { name: "twitter:description", content: SEO.ogDescription },
      ...(SEO.ogImage
        ? [
            { property: "og:image", content: SEO.ogImage },
            { name: "twitter:image", content: SEO.ogImage },
          ]
        : []),
      ...(SEO.canonicalUrl ? [{ property: "og:url", content: SEO.canonicalUrl }] : []),
    ],
    links: [...(SEO.canonicalUrl ? [{ rel: "canonical", href: SEO.canonicalUrl }] : [])],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Categories />
        <Achievements />
        <Editions />
        <Experience />
        <Collaborate />
        <Sponsors />
        <Partners />
        <Book />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
