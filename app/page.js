"use client";

import { useEffect, useState } from "react";

const stats = [
  { label: "Projects Launched", value: "128" },
  { label: "Active Clients", value: "57" },
  { label: "Avg. Response Time", value: "24m" },
];

const services = [
  {
    title: "Interface Design",
    description:
      "Crafting immersive visuals that balance clarity, personality, and performance.",
  },
  {
    title: "Product Strategy",
    description:
      "Aligning roadmap, audience insights, and execution for sustainable growth.",
  },
  {
    title: "Experience Engineering",
    description:
      "Building responsive interactions with progressive enhancement and accessibility-first thinking.",
  },
];

const testimonials = [
  {
    quote:
      "Their glassmorphism approach gave our platform a premium feel without sacrificing usability.",
    author: "Alex Kim",
    role: "Founder, Nebula Cloud",
  },
  {
    quote:
      "Every detail feels intentional. The team delivered a future-proof design system in record time.",
    author: "Priya Patel",
    role: "CTO, Luma Labs",
  },
];

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blurStrength = Math.min(30, 12 + scrollY * 0.02);

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      <Background blurStrength={blurStrength} />
      <header className="relative z-10 flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-24 md:pt-32">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-lg">
          <span className="text-lg font-semibold tracking-wide">LumenStudio</span>
          <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium transition hover:border-white/40 hover:bg-white/20">
            Request Access
          </button>
        </nav>
        <Hero />
      </header>
      <section className="relative z-10 w-full max-w-6xl px-6 pb-24">
        <Stats />
      </section>
      <section className="relative z-10 w-full max-w-6xl px-6 pb-24">
        <Services />
      </section>
      <section className="relative z-10 w-full max-w-6xl px-6 pb-24">
        <Testimonials />
      </section>
      <footer className="relative z-10 w-full max-w-6xl px-6 pb-16">
        <CTA />
      </footer>
    </main>
  );
}

function Background({ blurStrength }) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-purple-500/40 blur-[120px] sm:w-96 sm:h-96" />
        <div className="absolute -right-32 top-72 h-64 w-64 rounded-full bg-cyan-500/30 blur-[120px] sm:w-[28rem] sm:h-[28rem]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-500/30 blur-[120px] sm:h-96 sm:w-96" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
        style={{ backdropFilter: `blur(${blurStrength}px)` }}
      />
    </>
  );
}

function Hero() {
  return (
    <div className="flex flex-col gap-10 rounded-3xl border border-white/10 bg-white/10 px-8 py-12 text-center shadow-2xl backdrop-blur-xl backdrop-saturate-150 sm:px-14 md:text-left">
      <div className="inline-flex items-center gap-2 self-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/80 md:self-start">
        Elevate the Future
      </div>
      <div className="flex flex-col gap-6 md:max-w-2xl">
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Design that feels like light, engineered with substance.
        </h1>
        <p className="text-lg text-white/80 md:text-xl">
          We blend ambient glassmorphism aesthetics with purposeful UX to deliver digital products that look iconic and feel effortless.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center">
        <button className="w-full rounded-full border border-transparent bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200 sm:w-fit">
          Explore Capabilities
        </button>
        <button className="w-full rounded-full border border-white/30 bg-white/5 px-6 py-3 font-medium text-white/80 transition hover:border-white/50 hover:bg-white/10 sm:w-fit">
          View Showcase
        </button>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.label}
          className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-lg"
        >
          <span className="text-3xl font-semibold text-white">{item.value}</span>
          <span className="text-sm uppercase tracking-wide text-white/70">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function Services() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1.2fr]">
      <article className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <h2 className="text-3xl font-semibold">Integrated Services</h2>
        <p className="text-white/80">
          Navigate product journeys with a partner who unites brand, design, and engineering under one luminous vision.
        </p>
        <ul className="flex flex-col gap-4 text-sm text-white/70">
          <li className="rounded-full border border-white/15 bg-white/5 px-5 py-3">
            Strategic discovery sprints
          </li>
          <li className="rounded-full border border-white/15 bg-white/5 px-5 py-3">
            Design systems & documentation
          </li>
          <li className="rounded-full border border-white/15 bg-white/5 px-5 py-3">
            Accessibility-first engineering
          </li>
        </ul>
      </article>
      {services.map((service) => (
        <article
          key={service.title}
          className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="text-sm text-white/75">{service.description}</p>
          </div>
          <button className="self-start rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-white/70 transition hover:border-white/40 hover:bg-white/20">
            Learn More
          </button>
        </article>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((testimonial) => (
        <blockquote
          key={testimonial.author}
          className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl"
        >
          <p className="text-lg text-white/85">“{testimonial.quote}”</p>
          <footer className="flex flex-col text-sm">
            <span className="font-semibold text-white">{testimonial.author}</span>
            <span className="text-white/70">{testimonial.role}</span>
          </footer>
        </blockquote>
      ))}
      <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-8 text-center shadow-inner backdrop-blur-xl md:col-span-2">
        <p className="text-sm uppercase tracking-[0.35em] text-white/50">
          Trusted by innovators across AI, climate, fintech, and wellness.
        </p>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/10 px-10 py-12 text-center shadow-2xl backdrop-blur-xl md:flex-row md:items-center md:justify-between md:text-left">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">
          Ready to build with luminous precision?
        </h2>
        <p className="text-white/80">
          Partner with a team who treats every pixel like architecture and every interaction like choreography.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:items-end">
        <button className="w-full rounded-full border border-transparent bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200 md:w-auto">
          Start a Project
        </button>
        <span className="text-xs uppercase tracking-[0.35em] text-white/60">
          response within 24 hours
        </span>
      </div>
    </div>
  );
}

