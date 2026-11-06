import { Reveal } from "@/components/common/Reveal";
import { TEAM } from "@/constants/team";

export function Team() {
  return (
    <section id="team" className="section-pad bg-blush">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow text-coral">Let's connect Fika team</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-6xl">Meet the people behind Fika Pop-Up Show.</h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <article className="border border-charcoal/10 bg-ivory px-6 py-10 text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-blush font-display text-3xl text-coral">
                  {member.initials}
                </div>
                <h3 className="mt-6 font-display text-2xl md:text-3xl">{member.name}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted-foreground">{member.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
