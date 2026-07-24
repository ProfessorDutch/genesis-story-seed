import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/mustard-seed")({
  head: () => ({
    meta: [
      { title: "The Mustard Seed — The Genesis Moment" },
      {
        name: "description",
        content:
          "Mentorship, partnerships, and pathways into the skilled trades for young people who have not yet seen what their lives can become.",
      },
      { property: "og:title", content: "The Mustard Seed" },
      {
        property: "og:description",
        content: "Someone planted something in you. Now help us plant it in someone else.",
      },
      { property: "og:url", content: "/mustard-seed" },
    ],
    links: [{ rel: "canonical", href: "/mustard-seed" }],
  }),
  component: MustardSeed,
});

function MustardSeed() {
  return (
    <div>
      <section className="bg-mustard px-5 pt-16 pb-24 md:px-8 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 h-3 w-3 rounded-full bg-ember shadow-[0_0_0_12px_oklch(0.68_0.19_45_/_0.14)]" />
          <div className="eyebrow mb-4">The Mustard Seed</div>
          <h1 className="font-serif font-bold leading-[0.94] tracking-[-0.04em] text-[clamp(3rem,9vw,6rem)]">
            Someone planted something in you.
          </h1>
          <p className="mt-8 font-serif text-2xl leading-snug tracking-[-0.02em] md:text-4xl">
            Now help us plant it in someone else.
          </p>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-ink/85 md:text-xl">
          <p>
            The Genesis Moment is connected to The Mustard Seed — a larger mission of belief,
            mentorship, partnerships, and pathways into the skilled trades for young people who may
            not yet see what their lives can become.
          </p>
          <p>
            The storytelling comes first. The mission becomes evident through it. A child sees a
            successful contractor and assumes that person was always confident, capable, secure,
            destined to succeed. Then the contractor says:
          </p>
          <ul className="space-y-3 border-l-[3px] border-ember pl-6 font-serif text-2xl leading-snug tracking-[-0.02em] text-ink">
            <li>"I was living with my mom."</li>
            <li>"I screwed up school."</li>
            <li>"We had no money."</li>
            <li>"My dad bought me my first toolbox."</li>
            <li>"My wife believed in me before I did."</li>
            <li>"Someone gave me one chance."</li>
          </ul>
          <p>
            Now the child is no longer looking at someone impossibly far away. They are seeing proof
            that their current circumstances do not have to be their final circumstances.
          </p>
        </div>
      </section>

      <section className="bg-[oklch(0.19_0.012_55)] px-5 py-20 text-cream md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="section-label mb-4">The premise</div>
          <h2 className="font-serif text-4xl leading-[1.02] tracking-[-0.035em] md:text-5xl">
            They are not charity cases. <br />
            They are Genesis Moments <br />
            that have not happened yet.
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-cream/75 md:text-xl">
            Someone may have been called to invest in the person you could become before that person
            was visible. Now there are young people standing in the same place.
          </p>
        </div>
      </section>

      <section className="bg-ember px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-3xl leading-[1.05] tracking-[-0.035em] md:text-5xl">
            We are not showing kids successful people so they can admire them. We are showing them
            where successful people started so they can recognize themselves.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/tell-your-story"
              className="inline-flex items-center gap-2 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-ember"
            >
              Become part of it <ArrowRight size={14} />
            </Link>
            <Link
              to="/podcast"
              className="inline-flex items-center gap-2 border border-white/50 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-white/10"
            >
              Hear the stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}