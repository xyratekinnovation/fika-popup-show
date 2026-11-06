import { Reveal } from "@/components/common/Reveal";
import { EVENT_CREDITS } from "@/constants/partners";
import mediaPartners from "@/assets/partners/media-partners.jpg";
import digitalPartners from "@/assets/partners/digital-partners.jpg";
import bookingPartner from "@/assets/partners/booking-partner.png";
import multiplexPartner from "@/assets/partners/multiplex-partner.png";

const PARTNER_BLOCKS = [
  {
    number: "01",
    title: "Our Media Partners",
    src: mediaPartners,
    alt: "Our media partners: The Covai Mail, Sky Rams, Mirchi, and 93.5 Suryan FM",
  },
  {
    number: "02",
    title: "Our Digital Partners",
    src: digitalPartners,
    alt: "Our digital partners: Made of Coimbatore, We Love Coimbatore, and Cinema Ticket",
  },
  {
    number: "03",
    title: "Our Booking Partner",
    src: bookingPartner,
    alt: "Our booking partner Sportfy",
  },
  {
    number: "04",
    title: "Multiplex Partner",
    src: multiplexPartner,
    alt: "Multiplex partner PVR INOX",
  },
] as const;

export function Partners() {
  return (
    <section id="partners" className="section-pad bg-blush">
      <div className="mx-auto max-w-7xl space-y-10 px-5 md:space-y-12 md:px-10">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow text-coral">Collaborators</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-6xl">Our Partners</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8">
          {PARTNER_BLOCKS.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.06} className="h-full">
              <article className="flex h-full min-h-[280px] flex-col rounded-[20px] border border-charcoal/10 bg-white p-7 shadow-[0_12px_28px_-20px_color-mix(in_oklab,var(--charcoal)_28%,transparent)] transition-transform duration-500 ease-out hover:-translate-y-1 md:min-h-[320px] md:p-9">
                <div className="flex items-center justify-between gap-4">
                  <p className="eyebrow text-coral md:!text-[15px]">{block.title}</p>
                  <span className="font-display text-2xl leading-none text-charcoal/15 md:text-3xl">
                    {block.number}
                  </span>
                </div>
                <div className="mt-8 flex flex-1 items-center justify-center">
                  <img
                    src={block.src}
                    alt={block.alt}
                    loading="lazy"
                    className="max-h-40 w-full max-w-full object-contain md:max-h-48"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="grid gap-8 border-t border-charcoal/15 pt-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-coral md:!text-[15px]">An event by</p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <img
                  src={EVENT_CREDITS.eventByLogo}
                  alt="Twenty Three logo"
                  className="h-14 w-14 object-contain"
                  loading="lazy"
                />
                <p className="font-display text-3xl md:text-4xl">{EVENT_CREDITS.eventBy}</p>
              </div>
            </div>
            <div>
              <p className="eyebrow text-coral md:!text-[15px]">Decor &amp; production by</p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex h-16 items-center justify-center bg-charcoal px-4">
                  <img
                    src={EVENT_CREDITS.decorLogo}
                    alt="Decor and production partner logo"
                    className="h-10 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
