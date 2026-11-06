"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, BadgeCheck, Briefcase, Clock, GraduationCap, Handshake, MapPin, Phone, Plane, Quote, ShieldCheck, Star, Users,
} from "lucide-react";
import { asset } from "@/lib/asset";
import { useLang } from "@/lib/i18n";
import { certs, contact, destinations, hero, messages, services, stats, steps, stories, team, uniLogos, visaTypes, why } from "@/lib/content";
import { Counter, Reveal, Stagger, StaggerItem } from "./Motion";
import { SectionHeading } from "./Chrome";
import { WhatsAppIcon } from "./Brand";
import EligibilityCheck from "./EligibilityCheck";

const ICONS = { GraduationCap, Briefcase, BadgeCheck, Plane, ShieldCheck, Users, Handshake, Clock } as const;

function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="bg-hero relative -mt-[76px] overflow-hidden pb-32 pt-36 text-white lg:pb-40 lg:pt-44">
      <div className="grid-lines absolute inset-0" />
      <div className="animate-blob absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-glow/20 blur-3xl" />
      <div className="animate-blob absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-500/30 blur-3xl [animation-delay:-8s]" />

      {/* flight path */}
      <svg className="pointer-events-none absolute inset-x-0 top-24 hidden h-[420px] w-full lg:block" viewBox="0 0 1440 420" fill="none" aria-hidden>
        <motion.path d="M-20 360 C 300 380, 520 120, 820 200 S 1250 60, 1460 40" stroke="url(#fp)" strokeWidth="2" strokeDasharray="6 10"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }} />
        <defs><linearGradient id="fp" x1="0" x2="1"><stop stopColor="#5ce1e6" stopOpacity="0" /><stop offset=".5" stopColor="#5ce1e6" stopOpacity=".6" /><stop offset="1" stopColor="#fff" stopOpacity=".2" /></linearGradient></defs>
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <motion.div style={{ opacity: fade }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-glow" /></span>
            {t(hero.eyebrow)}
          </motion.p>
          <h1 className="text-5xl font-extrabold leading-[1.05] sm:text-6xl xl:text-[4.5rem]">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }} className="text-gradient block pb-2">{t(hero.title1)}</motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.9 }} className="block">{t(hero.title2)}</motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{t(hero.sub)}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#eligibility" className="btn-primary bg-white !text-brand-800 hover:!bg-brand-50">{t(hero.cta1)} <ArrowRight className="h-4 w-4" /></a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="btn-glass"><WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> {t(hero.cta2)}</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {team.slice(0, 4).map((m) => <img key={m.name} src={asset(m.img)} alt="" className="h-10 w-10 rounded-full border-2 border-brand-900 object-cover" />)}
            </div>
            <div className="text-sm">
              <div className="flex text-amber-300">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="text-white/70">{t({ en: "Guiding students from Mirpur DOHS since 2016", bn: "২০১৬ থেকে মিরপুর ডিওএইচএস থেকে শিক্ষার্থীদের পাশে" })}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y }} className="relative mx-auto w-full max-w-xl">
          <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: -2 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative rounded-[2rem] p-3">
            <img src={asset("/images/team/group.jpg")} alt="The Skylark Global team at the Mirpur DOHS office" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" />
            <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 text-sm font-semibold">{t({ en: "Team Skylark · Mirpur DOHS, Dhaka", bn: "টিম স্কাইলার্ক · মিরপুর ডিওএইচএস, ঢাকা" })}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="absolute -left-4 top-8 sm:-left-10">
            <div className="glass animate-float flex items-center gap-3 rounded-2xl !bg-brand-950/70 px-4 py-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/20 text-emerald-300"><BadgeCheck /></div>
              <div><p className="text-xs text-white/60">{t({ en: "Visa approved", bn: "ভিসা অনুমোদিত" })}</p><p className="font-bold">UK (B1/B2)</p></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} className="absolute -right-2 bottom-16 sm:-right-8">
            <div className="glass animate-float flex items-center gap-3 rounded-2xl !bg-brand-950/70 px-4 py-3 [animation-delay:-3s]">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-glow/20 text-glow"><GraduationCap /></div>
              <div><p className="text-2xl font-extrabold leading-none">50+</p><p className="text-xs text-white/60">{t({ en: "partner universities", bn: "পার্টনার বিশ্ববিদ্যালয়" })}</p></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="absolute -bottom-8 left-10">
            <div className="glass flex items-center gap-2 rounded-full !bg-brand-950/70 px-4 py-2 text-sm font-semibold">
              <Plane className="h-4 w-4 text-glow" /> UK · USA · Canada · Australia · Europe
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useLang();
  return (
    <section className="relative z-10 -mt-20 px-4 sm:px-6">
      <Reveal className="glass-light mx-auto grid max-w-6xl grid-cols-2 gap-y-8 rounded-3xl px-6 py-8 sm:px-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className={`text-center ${i > 0 ? "lg:border-l lg:border-brand-100" : ""}`}>
            <p className="text-gradient-brand text-4xl font-extrabold sm:text-5xl"><Counter to={s.value} suffix={s.suffix} /></p>
            <p className="mt-1 text-sm font-medium text-slate-600">{t(s.label)}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function Partners() {
  const { t } = useLang();
  const list = [...uniLogos, ...uniLogos];
  return (
    <section className="py-16">
      <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-brand">{t({ en: "Partner institutions", bn: "পার্টনার প্রতিষ্ঠান" })}</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-6 hover:[animation-play-state:paused]">
          {list.map(([f, n], i) => (
            <div key={i} className="glass-light grid h-24 w-40 shrink-0 place-items-center rounded-2xl p-3 grayscale transition hover:grayscale-0">
              <img src={asset(`/images/unis/${f}`)} alt={n} className="max-h-16 w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={{ en: "What we do", bn: "আমরা যা করি" }} title={{ en: "Every abroad solution under one roof", bn: "বিদেশ যাত্রার সব সমাধান এক ছাদের নিচে" }}
          sub={{ en: "From your first question to your first day abroad, one team handles it all.", bn: "প্রথম প্রশ্ন থেকে বিদেশে প্রথম দিন পর্যন্ত — একটি টিমই সব দেখে।" }} />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const I = ICONS[s.icon as keyof typeof ICONS];
            return (
              <StaggerItem key={s.icon}>
                <div className="glass-light group relative h-full overflow-hidden rounded-3xl p-7 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/20">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-lg shadow-brand/30 transition duration-500 group-hover:rotate-6 group-hover:scale-110"><I /></div>
                  <h3 className="relative mt-6 text-xl font-bold">{t(s.title)}</h3>
                  <p className="relative mt-2 leading-relaxed text-slate-600">{t(s.text)}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function Destinations() {
  const { t } = useLang();
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={{ en: "Destinations", bn: "গন্তব্য" }} title={{ en: "Where will your dream take you?", bn: "আপনার স্বপ্ন আপনাকে কোথায় নিয়ে যাবে?" }} />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {destinations.map((d, i) => (
            <StaggerItem key={d.code} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <Link href="/universities/" className="group relative block h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-950">
                {d.img ? <img src={asset(d.img)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  : <span className="absolute -right-4 -top-6 text-[9rem] font-black text-white/10">{d.code}</span>}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <div className="glass rounded-2xl p-4 text-white transition duration-500 group-hover:-translate-y-1">
                    <p className="text-xs font-bold tracking-widest text-glow">{d.code}</p>
                    <h3 className="text-lg font-bold">{t(d.name)}</h3>
                    <p className="text-xs text-white/70">{t(d.note)}</p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Journey() {
  const { t } = useLang();
  return (
    <section id="eligibility" className="bg-hero relative scroll-mt-24 overflow-hidden py-24 text-white">
      <div className="grid-lines absolute inset-0" />
      <div className="animate-blob absolute right-0 top-1/3 h-96 w-96 rounded-full bg-glow/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading light eyebrow={{ en: "Your journey", bn: "আপনার যাত্রা" }} title={{ en: "Five steps from Dhaka to your campus", bn: "ঢাকা থেকে ক্যাম্পাস — মাত্র পাঁচ ধাপে" }} />
        <div className="relative mb-20 grid gap-8 md:grid-cols-5">
          <motion.div className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 origin-left bg-gradient-to-r from-glow via-brand-300 to-white/40 md:block"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeInOut" }} />
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.15} className="relative text-center">
              <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-brand-900 text-lg font-extrabold text-glow shadow-lg shadow-glow/10">{i + 1}</div>
              <h3 className="mt-4 font-bold">{t(s.title)}</h3>
              <p className="mt-1 text-sm text-white/65">{t(s.text)}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-glow">{t({ en: "2-minute check", bn: "২ মিনিটের যাচাই" })}</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">{t({ en: "Are you eligible to study abroad?", bn: "আপনি কি বিদেশে পড়ার যোগ্য?" })}</h2>
            <p className="mt-4 text-lg text-white/70">{t({ en: "Answer five quick questions to see how strong your profile is, then send it straight to a Skylark counsellor.", bn: "পাঁচটি সহজ প্রশ্নের উত্তর দিন, প্রোফাইল কতটা শক্তিশালী দেখুন, তারপর সরাসরি স্কাইলার্ক কাউন্সেলরকে পাঠান।" })}</p>
          </Reveal>
          <Reveal delay={0.15}><EligibilityCheck /></Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading center={false} eyebrow={{ en: "Why Skylark Global", bn: "কেন স্কাইলার্ক গ্লোবাল" }} title={{ en: "Certified. Experienced. On your side.", bn: "সার্টিফায়েড। অভিজ্ঞ। আপনার পাশে।" }} />
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {why.map((w) => {
              const I = ICONS[w.icon as keyof typeof ICONS];
              return (
                <StaggerItem key={w.icon}>
                  <div className="glass-light h-full rounded-2xl p-5 transition hover:-translate-y-1">
                    <I className="h-6 w-6 text-brand" />
                    <h3 className="mt-3 font-bold">{t(w.title)}</h3>
                    <p className="mt-1 text-sm text-slate-600">{t(w.text)}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
        <Reveal>
          <div className="group relative mx-auto h-[460px] max-w-md">
            {certs.slice(0, 3).map((c, i) => (
              <div key={c.img} style={{ zIndex: 3 - i }}
                className={`absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl transition-all duration-700 ease-out
                  ${i === 0 ? "group-hover:-translate-x-[105%] group-hover:-rotate-12" : i === 1 ? "rotate-3 group-hover:rotate-0" : "-rotate-6 group-hover:translate-x-[5%] group-hover:rotate-12"}`}>
                <img src={asset(c.img)} alt={`Certificate of representation: ${c.title}`} className="w-full" loading="lazy" />
              </div>
            ))}
            <p className="absolute bottom-0 w-full text-center text-sm font-semibold text-brand-700">{t({ en: "Authorised representative certificates · hover to explore", bn: "অনুমোদিত প্রতিনিধির সার্টিফিকেট · হোভার করে দেখুন" })}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stories() {
  const { t } = useLang();
  const s = stories[0];
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={{ en: "Success stories", bn: "সাফল্যের গল্প" }} title={{ en: "Dreams that already took flight", bn: "যাদের স্বপ্ন ইতোমধ্যে উড়েছে" }} />
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="bg-hero relative self-start overflow-hidden rounded-3xl p-8 text-white sm:p-10">
            <div className="grid-lines absolute inset-0" />
            <div className="relative grid items-center gap-8 sm:grid-cols-[200px_1fr]">
              <img src={asset(s.img)} alt={s.name} className="aspect-square w-full rounded-2xl object-cover ring-4 ring-white/20" loading="lazy" />
              <div>
                <Quote className="h-10 w-10 text-glow" />
                <p className="mt-3 text-lg leading-relaxed text-white/90">{s.quote}</p>
                <p className="mt-5 font-bold">{s.name} <span className="font-normal text-white/60">· {s.dest}</span></p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
              {stories.slice(1).map((st) => (
                <div key={st.img} className="group relative overflow-hidden rounded-2xl">
                  <img src={asset(st.img)} alt={st.name} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                  <span className="glass absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white">✓ {st.name}</span>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.2} className="glass-light rounded-2xl p-5">
              <p className="text-sm font-bold text-brand">{t({ en: "Recent successful visas", bn: "সাম্প্রতিক সফল ভিসা" })}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {visaTypes.map((v) => <span key={v} className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">{v}</span>)}
              </div>
              <Link href="/success-stories/" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:gap-2">{t({ en: "See all stories", bn: "সব গল্প দেখুন" })} <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const { t } = useLang();
  const ceo = messages[0];
  return (
    <section className="relative overflow-hidden bg-brand-50/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="glass-light mx-auto mb-14 grid max-w-5xl items-center gap-8 rounded-3xl p-8 md:grid-cols-[180px_1fr] md:p-10">
          <img src={asset(ceo.img)} alt={ceo.name} className="mx-auto h-40 w-40 rounded-full object-cover ring-8 ring-brand-100" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">{t({ en: "Message from the CEO", bn: "সিইও-র বার্তা" })}</p>
            <p className="mt-3 text-lg italic leading-relaxed text-slate-700">“{ceo.text.slice(0, 330)}…”</p>
            <p className="mt-4 font-bold">{ceo.name} <span className="font-normal text-slate-500">· {ceo.role}</span></p>
          </div>
        </Reveal>
        <SectionHeading eyebrow={{ en: "Leadership", bn: "নেতৃত্ব" }} title={{ en: "The people behind your journey", bn: "আপনার যাত্রার পেছনের মানুষগুলো" }} />
        <Stagger className="grid grid-cols-2 gap-5 md:grid-cols-5">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <div className="glass-light group rounded-3xl p-5 text-center transition hover:-translate-y-2">
                <div className="relative mx-auto h-28 w-28">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-glow to-brand-700 opacity-0 blur-md transition group-hover:opacity-70" />
                  <img src={asset(m.img)} alt={m.name} className="relative h-28 w-28 rounded-full object-cover ring-4 ring-white" loading="lazy" />
                </div>
                <h3 className="mt-4 text-sm font-bold sm:text-base">{m.name}</h3>
                <p className="text-xs text-brand-700">{m.role}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function CTA() {
  const { t } = useLang();
  return (
    <section className="px-4 py-24 sm:px-6">
      <Reveal className="bg-hero relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 text-white sm:p-14">
        <div className="grid-lines absolute inset-0" />
        <div className="animate-blob absolute -right-10 -top-10 h-72 w-72 rounded-full bg-glow/25 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">{t({ en: "Your journey starts with one conversation.", bn: "আপনার যাত্রা শুরু হোক একটি আলাপ দিয়ে।" })}</h2>
            <p className="mt-4 text-lg text-white/75">{t({ en: "Visit us in Mirpur DOHS or message us on WhatsApp. Counselling is free.", bn: "মিরপুর ডিওএইচএস অফিসে আসুন বা হোয়াটসঅ্যাপে মেসেজ দিন। কাউন্সেলিং ফ্রি।" })}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold shadow-lg transition hover:-translate-y-0.5"><WhatsAppIcon /> WhatsApp</a>
              <a href={contact.phoneHref} className="btn-glass"><Phone className="h-4 w-4" /> {contact.phone}</a>
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <MapPin className="h-6 w-6 text-glow" />
            <p className="mt-3 font-bold">{t({ en: "Corporate office", bn: "কর্পোরেট অফিস" })}</p>
            <p className="mt-1 text-white/75">{contact.addressLines[0]}<br />{contact.addressLines[1]}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/75"><Clock className="h-4 w-4 text-glow" /> {t(contact.hours)}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Partners />
      <Services />
      <Destinations />
      <Journey />
      <WhyUs />
      <Stories />
      <Leadership />
      <CTA />
    </>
  );
}
