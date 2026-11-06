import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, ImageReveal } from "@/components/common/Reveal";
import { COLLABORATE } from "@/config/site-config";
import exhibitor from "@/assets/images/exhibitor.jpg";
import partner from "@/assets/images/partner.jpg";

function SplitCard({
  id,
  img,
  alt,
  eyebrow,
  title,
  body,
  cta,
  href,
  ctaStyle = "link",
}: {
  id: string;
  img: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  ctaStyle?: "link" | "button";
}) {
  return (
    <article id={id} className="group flex flex-col">
      <ImageReveal className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={alt} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
      </ImageReveal>
      <Reveal className="mt-8">
        <p className="eyebrow text-coral">{eyebrow}</p>
        <h3 className="mt-4 text-3xl md:text-4xl">{title}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{body}</p>
        {ctaStyle === "button" ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fika mt-8 !px-8 !py-4 text-[0.78rem]"
          >
            {cta} <ArrowRight className="h-5 w-5" />
          </a>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 border-b border-charcoal pb-1 text-xs uppercase tracking-[0.24em] transition-colors hover:border-coral hover:text-coral"
          >
            {cta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
      </Reveal>
    </article>
  );
}

export function Collaborate() {
  const { exhibitor: ex, partnership: part } = COLLABORATE;
  return (
    <section className="section-pad-tight-b bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-2 md:gap-12 md:px-10 lg:gap-20">
        <SplitCard
          id={ex.id}
          img={exhibitor}
          alt={ex.alt}
          eyebrow={ex.eyebrow}
          title={ex.title}
          body={ex.body}
          cta={ex.cta}
          href={ex.formUrl}
        />
        <div className="md:mt-24">
          <SplitCard
            id={part.id}
            img={partner}
            alt={part.alt}
            eyebrow={part.eyebrow}
            title={part.title}
            body={part.body}
            cta={part.cta}
            href={part.formUrl}
            ctaStyle="button"
          />
        </div>
      </div>
    </section>
  );
}
