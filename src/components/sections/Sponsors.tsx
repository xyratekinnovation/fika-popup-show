import { Reveal } from "@/components/common/Reveal";
import esteemedClients from "@/assets/sponsors/esteemed-clients.jpg";
import esteemedClients2 from "@/assets/sponsors/esteemed-clients-2.jpg";

export function Sponsors() {
  return (
    <section id="sponsors" className="section-pad-tight-t bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow text-coral">Our esteemed clients</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-6xl">Sponsors</h2>
          </Reveal>
        </div>
        <div className="mt-14 space-y-8 md:space-y-10">
          <Reveal delay={0.15}>
            <img
              src={esteemedClients}
              alt="Our esteemed clients and sponsors of Fika Pop-Up Show — group 1"
              loading="lazy"
              className="mx-auto h-auto w-full max-w-5xl object-contain"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <img
              src={esteemedClients2}
              alt="Our esteemed clients and sponsors of Fika Pop-Up Show — group 2"
              loading="lazy"
              className="mx-auto h-auto w-full max-w-5xl object-contain"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
