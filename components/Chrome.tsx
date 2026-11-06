"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { asset } from "@/lib/asset";
import { contact, nav, type L } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from "./Brand";

export function DemoBanner() {
  return (
    <div className="relative z-50 bg-ink px-4 py-2 text-center text-xs text-white/80 sm:text-sm">
      <Sparkles className="mr-1.5 inline h-3.5 w-3.5 text-glow" />
      Concept demo for Skylark Global, prepared by <b className="text-white">Dev riazul</b>. Content is from the current website; figures to be confirmed.
    </div>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-full border border-white/20 bg-white/10 p-0.5 text-xs font-semibold backdrop-blur" role="group" aria-label="Language">
      {(["en", "bn"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 transition ${lang === l ? "bg-white text-brand-800 shadow" : "text-white/80 hover:text-white"}`}>
          {l === "en" ? "EN" : "বাং"}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useLang();
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);
  const active = (h: string) => (h === "/" ? path === "/" : path?.startsWith(h.replace(/\/$/, "")));

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${scrolled ? "border border-white/15 bg-brand-950/70 shadow-2xl shadow-brand-950/30 backdrop-blur-2xl" : "border border-white/10 bg-brand-950/30 backdrop-blur-md"}`}>
        <Link href="/" className="flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-md">
          <img src={asset("/images/logo.png")} alt="Skylark Global — Fly your dream" className="h-8 w-auto sm:h-9" />
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${active(n.href) ? "text-white" : "text-white/70 hover:text-white"}`}>
                {active(n.href) && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/15 ring-1 ring-white/20" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                {t(n.label)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <LangToggle />
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-800 shadow-lg transition hover:-translate-y-0.5 sm:inline-flex">
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> {t({ en: "Free consultation", bn: "ফ্রি পরামর্শ" })}
          </a>
          <button className="rounded-xl p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/15 bg-brand-950/90 p-3 backdrop-blur-2xl lg:hidden">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`block rounded-xl px-4 py-3 font-medium ${active(n.href) ? "bg-white/15 text-white" : "text-white/80"}`}>{t(n.label)}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function PageHero({ eyebrow, title, sub, children }: { eyebrow: L; title: L; sub?: L; children?: ReactNode }) {
  const { t } = useLang();
  return (
    <section className="bg-hero relative -mt-[76px] overflow-hidden pb-20 pt-40 text-white">
      <div className="grid-lines absolute inset-0" />
      <div className="animate-blob absolute -right-20 top-10 h-72 w-72 rounded-full bg-glow/20 blur-3xl" />
      <div className="animate-blob absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl [animation-delay:-6s]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-glow backdrop-blur">
          {t(eyebrow)}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
          {t(title)}
        </motion.h1>
        {sub && <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-5 max-w-2xl text-lg text-white/75">{t(sub)}</motion.p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, sub, light = false, center = true }: { eyebrow: L; title: L; sub?: L; light?: boolean; center?: boolean }) {
  const { t } = useLang();
  return (
    <div className={`mb-12 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${light ? "text-glow" : "text-brand"}`}>{t(eyebrow)}</p>
      <h2 className={`text-3xl font-extrabold leading-tight sm:text-5xl ${light ? "text-white" : "text-ink"}`}>{t(title)}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-white/70" : "text-slate-600"}`}>{t(sub)}</p>}
    </div>
  );
}

export function WhatsAppFab() {
  return (
    <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition hover:scale-110">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-hero relative overflow-hidden text-white">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-xl bg-white px-3 py-2"><img src={asset("/images/logo.png")} alt="Skylark Global" className="h-10 w-auto" /></div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">{t({ en: "Government-approved, internationally certified education and immigration services since 2016.", bn: "২০১৬ সাল থেকে সরকার অনুমোদিত ও আন্তর্জাতিকভাবে স্বীকৃত শিক্ষা ও ইমিগ্রেশন সেবা।" })}</p>
          <div className="mt-5 flex gap-3">
            {[[contact.facebook, FacebookIcon, "Facebook"], [contact.instagram, InstagramIcon, "Instagram"], [contact.youtube, YoutubeIcon, "YouTube"], [contact.whatsapp, WhatsAppIcon, "WhatsApp"]].map(([href, Icon, label]) => {
              const I = Icon as typeof FacebookIcon;
              return <a key={label as string} href={href as string} target="_blank" rel="noreferrer" aria-label={label as string} className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 transition hover:-translate-y-1 hover:bg-white hover:text-brand-800"><I /></a>;
            })}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold">{t({ en: "Explore", bn: "এক্সপ্লোর" })}</h3>
          <ul className="space-y-2 text-sm text-white/70">{nav.map((n) => <li key={n.href}><Link className="hover:text-white" href={n.href}>{t(n.label)}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">{t({ en: "Services", bn: "সেবাসমূহ" })}</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {["Global Education", "Skilled Migration", "Work Visa", "Tour Package"].map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">{t({ en: "Corporate office", bn: "কর্পোরেট অফিস" })}</h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-glow" /><span>{contact.addressLines.join(", ")}</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-glow" /><a href={contact.phoneHref}>{contact.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-glow" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-glow" />{t(contact.hours)}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Skylark Global. All rights reserved.</p>
          <a href="mailto:engr.riazul@gmail.com" className="inline-flex items-center gap-1 hover:text-white">Concept demo by Dev riazul <ArrowUpRight className="h-3 w-3" /></a>
        </div>
      </div>
    </footer>
  );
}
