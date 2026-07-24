import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import mentorHands from "@/assets/ms-mentor-hands.jpg";
import seed from "@/assets/ms-seed.jpg";
import doorway from "@/assets/ms-doorway.jpg";
import mustardYouth from "@/assets/mustard-youth.jpg";
import tcMentor from "@/assets/tc-mentor.jpg";
import tcHands from "@/assets/tc-hands.jpg";

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
      {/* HERO */}
      <section className="bg-mustard px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="mb-6 h-3 w-3 rounded-full bg-ember shadow-[0_0_0_12px_oklch(0.68_0.19_45_/_0.14)]" />
            <div className="eyebrow mb-4">The Mustard Seed</div>
            <h1 className="font-serif font-bold leading-[0.94] tracking-[-0.04em] text-[clamp(2.75rem,8vw,5.75rem)]">
              Someone planted something in you.
            </h1>
            <p className="mt-8 font-serif text-2xl leading-snug tracking-[-0.02em] text-ink/85 md:text-4xl">
              Now help us plant it in someone else.
            </p>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ink/70 md:text-lg">
              The Mustard Seed is the mission underneath every conversation on this
              podcast — belief, mentorship, and a real path into the trades for the
              kids the world has already stopped watching for.
            </p>
          </div>
          <div className="md:col-span-5">
            <figure className="relative">
              <img
                src={seed}
                alt="A single mustard seed sprouting in a young hand full of soil."
                width={1600}
                height={1200}
                className="aspect-[4/5] w-full object-cover shadow-[0_30px_60px_-30px_oklch(0.20_0.015_55_/_0.35)]"
              />
              <figcaption className="mt-3 max-w-xs text-xs italic leading-relaxed text-ink/60">
                "The kingdom of heaven is like a mustard seed — the smallest of all
                seeds, yet it grows into the largest of garden plants."
                <span className="mt-1 block not-italic text-[10px] font-bold uppercase tracking-[0.16em] text-ember">
                  Matthew 13:31–32
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="bg-paper px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="section-label mb-5">Why this exists</div>
            <p className="font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-ink md:text-4xl">
              The storytelling comes first. The mission becomes evident through it.
            </p>
            <figure className="mt-10">
              <img
                src={mustardYouth}
                alt="A teenage boy in work clothes lit by afternoon sun in a small workshop."
                loading="lazy"
                width={1280}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="mt-3 text-xs italic leading-relaxed text-ink/60">
                Every man in this room started as a boy in that one.
              </figcaption>
            </figure>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-ink/85 md:text-xl">
              <p>
                A child sees a successful contractor and assumes that person was
                always confident, always capable, always destined for it. Then the
                contractor sits down across from us and says the sentences he has
                spent his whole life quietly carrying.
              </p>
            </div>

            <ul className="mt-10 space-y-4 border-l-[3px] border-ember pl-6 font-serif text-2xl leading-snug tracking-[-0.02em] text-ink md:text-3xl">
              <li>"I was living with my mom."</li>
              <li>"I screwed up school."</li>
              <li>"We had no money."</li>
              <li>"My dad bought me my first toolbox."</li>
              <li>"My wife believed in me before I did."</li>
              <li>"Someone gave me one chance."</li>
            </ul>

            <p className="mt-10 text-lg leading-relaxed text-ink/85 md:text-xl">
              Now the child is no longer looking at someone impossibly far away.
              They are seeing proof that their current circumstances do not have to
              be their final circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK — MENTOR HANDS */}
      <section className="relative bg-[oklch(0.19_0.012_55)]">
        <img
          src={mentorHands}
          alt="A tradesman's hand guiding a boy's hand across a hand plane on a wooden workbench."
          loading="lazy"
          width={1600}
          height={1200}
          className="h-[60vh] min-h-[380px] w-full object-cover opacity-90"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.012_55)] via-transparent to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-8 md:pb-14">
          <p className="mx-auto max-w-3xl font-serif text-2xl leading-snug tracking-[-0.02em] text-cream md:text-4xl">
            A yes at seventeen is a sentence a person carries for the rest of
            their life.
          </p>
        </figcaption>
      </section>

      {/* PREMISE */}
      <section className="bg-[oklch(0.19_0.012_55)] px-5 py-20 text-cream md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="section-label mb-4">The premise</div>
            <h2 className="font-serif text-4xl leading-[1.02] tracking-[-0.035em] md:text-6xl">
              They are not charity cases. <br />
              They are Genesis Moments <br />
              that have not happened yet.
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-cream/75 md:text-xl">
              Someone was called to invest in the person you could become before
              that person was visible. Now there are young people standing in the
              same place, waiting for the same yes.
            </p>
          </div>
          <div className="md:col-span-5">
            <img
              src={doorway}
              alt="A young apprentice standing in the warm lamplight of a small kitchen doorway."
              loading="lazy"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW YOU HELP */}
      <section className="bg-cream px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="section-label mb-4">How the seed gets planted</div>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.02] tracking-[-0.035em] md:text-5xl">
            Three ways a small thing becomes a life.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            <article className="group">
              <div className="mb-6 overflow-hidden">
                <img
                  src={tcHands}
                  alt="Weathered hands holding a set of small hand tools."
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="eyebrow mb-3">01 — Tell a story</div>
              <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em] md:text-3xl">
                Sit with us for one honest conversation.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                The first mustard seed is a story a kid did not know he was
                allowed to have. Yours could be his.
              </p>
              <Link
                to="/tell-your-story"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ember"
              >
                Tell your story <ArrowRight size={14} />
              </Link>
            </article>

            <article className="group">
              <div className="mb-6 overflow-hidden">
                <img
                  src={tcMentor}
                  alt="An older mentor speaking quietly with a younger worker."
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="eyebrow mb-3">02 — Mentor a kid</div>
              <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em] md:text-3xl">
                Be the phone call that changes a Tuesday.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                One shop. One kid. One shift a week. That is the whole
                curriculum. We help make the introduction.
              </p>
              <Link
                to="/tell-your-story"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ember"
              >
                Offer a seat <ArrowRight size={14} />
              </Link>
            </article>

            <article className="group">
              <div className="mb-6 overflow-hidden">
                <img
                  src={mentorHands}
                  alt="A tradesman guiding a boy's hand across a piece of wood."
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="eyebrow mb-3">03 — Partner with us</div>
              <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em] md:text-3xl">
                Help us open the door on the other side of the story.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                Trade schools, unions, family shops, church groups — we are
                building the bridge from the microphone to the workbench.
              </p>
              <Link
                to="/tell-your-story"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ember"
              >
                Partner with us <ArrowRight size={14} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-ember px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-3xl leading-[1.05] tracking-[-0.035em] md:text-5xl">
            We are not showing kids successful people so they can admire them.
            We are showing them where successful people started so they can
            recognize themselves.
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