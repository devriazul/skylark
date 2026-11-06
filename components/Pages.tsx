"use client";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Compass, Eye, Globe2, Mail, MapPin, Phone, Quote, Search, Send, Target, X } from "lucide-react";
import { asset } from "@/lib/asset";
import { useLang } from "@/lib/i18n";
import { certs, contact, featuredUnis, gallery, messages, mission, moreUnis, stories, team, uniLogos, visaTypes } from "@/lib/content";
import { PageHero, SectionHeading } from "./Chrome";
import { Reveal, Stagger, StaggerItem } from "./Motion";
import { CTA } from "./Home";
import { WhatsAppIcon } from "./Brand";

/* ---------------- About ---------------- */
export function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={{ en: "About us", bn: "আমাদের সম্পর্কে" }} title={{ en: "Your trustworthy abroad-solutions partner since 2016", bn: "২০১৬ থেকে আপনার বিশ্বস্ত বিদেশ-সমাধান সঙ্গী" }}
        sub={{ en: "Government-approved, internationally certified education and immigration services — from Mirpur DOHS, Dhaka.", bn: "সরকার অনুমোদিত, আন্তর্জাতিকভাবে স্বীকৃত শিক্ষা ও ইমিগ্রেশন সেবা — মিরপুর ডিওএইচএস, ঢাকা থেকে।" }} />
      <section className="relative z-10 -mt-12 px-4 sm:px-6">
        <Reveal className="glass-light mx-auto max-w-6xl overflow-hidden rounded-3xl p-3">
          <img src={asset("/images/team/group-2.jpg")} alt="Skylark Global team" className="aspect-[21/9] w-full rounded-2xl object-cover" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Stagger className="grid gap-6 md:grid-cols-3">
          {[
            { I: Target, h: { en: "Our mission", bn: "আমাদের মিশন" }, p: mission.mission },
            { I: Eye, h: { en: "Our vision", bn: "আমাদের ভিশন" }, p: mission.vision },
            { I: Globe2, h: { en: "Our reach", bn: "আমাদের পরিসর" }, p: mission.reach },
          ].map(({ I, h, p }) => (
            <StaggerItem key={h.en}>
              <div className="glass-light h-full rounded-3xl p-8 transition hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white"><I /></div>
                <h3 className="mt-5 text-xl font-bold">{t(h)}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-6 rounded-3xl bg-ink p-8 text-white md:p-10">
          <div className="flex items-center gap-3"><Compass className="text-glow" /><h3 className="text-xl font-bold">{t({ en: "Our strategy", bn: "আমাদের কৌশল" })}</h3></div>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {mission.strategy.map((s, i) => (
              <li key={i} className="flex gap-3 text-white/80"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold">{i + 1}</span>{s}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-brand-50/60 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow={{ en: "Messages", bn: "বার্তা" }} title={{ en: "Words from our leadership", bn: "নেতৃত্বের কথা" }} />
          <div className="space-y-6">
            {messages.map((m, i) => (
              <Reveal key={m.name} delay={0.05}>
                <div className={`glass-light grid items-start gap-6 rounded-3xl p-7 md:p-9 ${i % 2 ? "md:grid-cols-[1fr_140px]" : "md:grid-cols-[140px_1fr]"}`}>
                  <img src={asset(m.img)} alt={m.name} className={`h-32 w-32 rounded-2xl object-cover ring-4 ring-white ${i % 2 ? "md:order-2" : ""}`} loading="lazy" />
                  <div>
                    <Quote className="h-7 w-7 text-brand-300" />
                    <p className="mt-2 leading-relaxed text-slate-700">{m.text}</p>
                    <p className="mt-4 font-bold">{m.name}</p>
                    <p className="text-sm text-brand-700">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading eyebrow={{ en: "Team", bn: "টিম" }} title={{ en: "Meet the Skylark team", bn: "স্কাইলার্ক টিমের সাথে পরিচিত হন" }} />
        <Stagger className="grid grid-cols-2 gap-5 md:grid-cols-5">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <div className="glass-light group h-full rounded-3xl p-6 text-center transition hover:-translate-y-2">
                <div className="relative mx-auto h-32 w-32">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-glow to-brand-700 opacity-0 blur-md transition group-hover:opacity-70" />
                  <img src={asset(m.img)} alt={m.name} className="relative h-32 w-32 rounded-full object-cover ring-4 ring-white" loading="lazy" />
                </div>
                <p className="mt-4 font-bold">{m.name}</p><p className="text-sm text-brand-700">{m.role}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <CTA />
    </>
  );
}

/* ---------------- Universities ---------------- */
export function UniversitiesPage() {
  const { t } = useLang();
  const [q, setQ] = useState("");
  const [c, setC] = useState("All");
  const countries = ["All", ...Array.from(new Set(moreUnis.map((u) => u[1])))];
  const list = useMemo(() => moreUnis.filter(([n, ct]) => (c === "All" || ct === c) && n.toLowerCase().includes(q.toLowerCase())), [q, c]);
  return (
    <>
      <PageHero eyebrow={{ en: "Partner universities", bn: "পার্টনার বিশ্ববিদ্যালয়" }} title={{ en: "50+ universities and colleges worldwide", bn: "বিশ্বজুড়ে ৫০+ বিশ্ববিদ্যালয় ও কলেজ" }}
        sub={{ en: "A selection of the institutions our students apply to across the USA, Canada, Australia, the UK and Asia.", bn: "যুক্তরাষ্ট্র, কানাডা, অস্ট্রেলিয়া, যুক্তরাজ্য ও এশিয়ায় আমাদের শিক্ষার্থীরা যেসব প্রতিষ্ঠানে আবেদন করেন।" }} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={{ en: "Featured", bn: "ফিচার্ড" }} title={{ en: "Featured campuses", bn: "ফিচার্ড ক্যাম্পাস" }} />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredUnis.map((u) => (
            <StaggerItem key={u.name}>
              <div className="group relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-950">
                {u.img ? <img src={asset(u.img)} alt={u.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  : <Globe2 className="absolute -right-6 -top-6 h-40 w-40 text-white/10" />}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 to-transparent" />
                <div className="glass absolute inset-x-3 bottom-3 rounded-2xl p-4 text-white">
                  <p className="text-xs font-bold tracking-widest text-glow">{u.country.toUpperCase()}</p>
                  <p className="font-bold leading-snug">{u.name}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-brand-50/60 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow={{ en: "Search", bn: "খুঁজুন" }} title={{ en: "Find a partner institution", bn: "পার্টনার প্রতিষ্ঠান খুঁজুন" }} />
          <div className="glass-light rounded-3xl p-5 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t({ en: "Search by name…", bn: "নাম দিয়ে খুঁজুন…" })}
                  className="w-full rounded-full border border-brand-100 bg-white py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-brand" />
              </label>
              <div className="flex flex-wrap gap-2">
                {countries.map((x) => (
                  <button key={x} onClick={() => setC(x)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${c === x ? "bg-brand text-white shadow-lg shadow-brand/30" : "bg-white text-brand-700 ring-1 ring-brand-100 hover:bg-brand-50"}`}>{x}</button>
                ))}
              </div>
            </div>
            <motion.ul layout className="mt-6 grid gap-3 sm:grid-cols-2">
              <AnimatePresence>
                {list.map(([n, ct]) => (
                  <motion.li layout key={n} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 ring-1 ring-brand-100">
                    <span className="font-semibold">{n}</span><span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{ct}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
            {list.length === 0 && <p className="mt-6 text-center text-slate-500">{t({ en: "No match. Ask a counsellor — we work with many more institutions.", bn: "মিল পাওয়া যায়নি। কাউন্সেলরকে জিজ্ঞেস করুন — আরও অনেক প্রতিষ্ঠানের সাথে আমরা কাজ করি।" })}</p>}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {uniLogos.map(([f, n]) => (
            <StaggerItem key={f}><div className="glass-light grid h-28 place-items-center rounded-2xl p-4 transition hover:-translate-y-1"><img src={asset(`/images/unis/${f}`)} alt={n} className="max-h-20 object-contain" loading="lazy" /></div></StaggerItem>
          ))}
        </Stagger>
      </section>
      <CTA />
    </>
  );
}

/* ---------------- Success stories ---------------- */
export function StoriesPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={{ en: "Success stories", bn: "সাফল্যের গল্প" }} title={{ en: "Dreams that took flight with Skylark", bn: "স্কাইলার্কের সাথে উড়েছে যাদের স্বপ্ন" }} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal className="bg-hero relative overflow-hidden rounded-3xl p-8 text-white sm:p-12">
          <div className="grid-lines absolute inset-0" />
          <div className="relative grid items-center gap-10 md:grid-cols-[260px_1fr]">
            <img src={asset(stories[0].img)} alt={stories[0].name} className="aspect-square w-full rounded-3xl object-cover ring-4 ring-white/20" />
            <div>
              <Quote className="h-12 w-12 text-glow" />
              <p className="mt-4 text-xl leading-relaxed sm:text-2xl">{stories[0].quote}</p>
              <p className="mt-6 text-lg font-bold">{stories[0].name} <span className="font-normal text-white/60">· {stories[0].dest}</span></p>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[stories[1], stories[2], { name: "Successful visa", dest: "Featured on our success wall", img: "/images/students/s3.jpg", quote: "" }].map((s, i) => (
            <Reveal key={s.img} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl">
                <img src={asset(s.img)} alt={s.name} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" />
                <div className="glass absolute inset-x-4 bottom-4 rounded-2xl p-4 text-white"><p className="font-bold">✓ {s.name}</p><p className="text-xs text-white/70">{s.dest}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="glass-light mt-10 rounded-3xl p-7">
          <p className="font-bold text-brand">{t({ en: "Recent successful visas", bn: "সাম্প্রতিক সফল ভিসা" })}</p>
          <div className="mt-4 flex flex-wrap gap-3">{visaTypes.map((v) => <span key={v} className="rounded-full bg-brand px-4 py-2 font-semibold text-white">{v}</span>)}</div>
        </Reveal>
      </section>
      <section className="bg-brand-50/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow={{ en: "Credentials", bn: "স্বীকৃতি" }} title={{ en: "Authorised representative certificates", bn: "অনুমোদিত প্রতিনিধির সার্টিফিকেট" }} />
          <Stagger className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {certs.map((c) => (
              <StaggerItem key={c.img}>
                <figure className="glass-light rounded-3xl p-3 transition hover:-translate-y-2 hover:rotate-1">
                  <img src={asset(c.img)} alt={c.title} className="w-full rounded-2xl" loading="lazy" />
                  <figcaption className="px-2 pb-1 pt-3 text-center text-sm font-semibold text-brand-800">{c.title}</figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CTA />
    </>
  );
}

/* ---------------- Gallery ---------------- */
export function GalleryPage() {
  const [i, setI] = useState<number | null>(null);
  useEffect(() => {
    if (i === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((x) => (x! + 1) % gallery.length);
      if (e.key === "ArrowLeft") setI((x) => (x! - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [i]);
  return (
    <>
      <PageHero eyebrow={{ en: "Gallery", bn: "গ্যালারি" }} title={{ en: "Moments from the Skylark office", bn: "স্কাইলার্ক অফিসের মুহূর্তগুলো" }} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((g, n) => (
            <Reveal key={g} delay={(n % 3) * 0.08} className="mb-5 break-inside-avoid">
              <button onClick={() => setI(n)} className="group relative block w-full overflow-hidden rounded-3xl">
                <img src={asset(g)} alt="" className="w-full transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-brand-950/0 transition group-hover:bg-brand-950/30" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>
      <AnimatePresence>
        {i !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-brand-950/80 p-4 backdrop-blur-xl" onClick={() => setI(null)}>
            <motion.img key={i} src={asset(gallery[i])} alt="" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
            <button aria-label="Close" className="glass absolute right-5 top-5 rounded-full p-3 text-white"><X /></button>
            <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); setI((i - 1 + gallery.length) % gallery.length); }} className="glass absolute left-4 rounded-full p-3 text-white"><ChevronLeft /></button>
            <button aria-label="Next" onClick={(e) => { e.stopPropagation(); setI((i + 1) % gallery.length); }} className="glass absolute right-4 rounded-full p-3 text-white"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- Contact ---------------- */
export function ContactPage() {
  const { t } = useLang();
  const [f, setF] = useState({ name: "", phone: "", country: "", message: "" });
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Skylark Global,\nName: ${f.name}\nPhone: ${f.phone}\nPreferred country: ${f.country || "-"}\n${f.message}`);
    window.open(`${contact.whatsapp}?text=${text}`, "_blank");
  };
  const field = "w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none backdrop-blur focus:border-glow focus:ring-2 focus:ring-glow/40";
  return (
    <>
      <PageHero eyebrow={{ en: "Contact", bn: "যোগাযোগ" }} title={{ en: "Let's talk about your future", bn: "চলুন আপনার ভবিষ্যৎ নিয়ে কথা বলি" }}
        sub={{ en: "Free counselling at our Mirpur DOHS office, by phone or on WhatsApp.", bn: "মিরপুর ডিওএইচএস অফিসে, ফোনে বা হোয়াটসঅ্যাপে ফ্রি কাউন্সেলিং।" }} />
      <section className="relative z-10 -mt-10 px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="bg-hero relative overflow-hidden rounded-3xl p-7 text-white sm:p-10">
            <div className="grid-lines absolute inset-0" />
            <form onSubmit={send} className="relative space-y-4">
              <h2 className="text-2xl font-bold">{t({ en: "Book a free consultation", bn: "ফ্রি পরামর্শ বুক করুন" })}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block"><span className="mb-1 block text-sm text-white/70">{t({ en: "Full name", bn: "পূর্ণ নাম" })}</span><input required className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
                <label className="block"><span className="mb-1 block text-sm text-white/70">{t({ en: "Phone / WhatsApp", bn: "ফোন / হোয়াটসঅ্যাপ" })}</span><input required type="tel" className={field} value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></label>
              </div>
              <label className="block"><span className="mb-1 block text-sm text-white/70">{t({ en: "Preferred country", bn: "পছন্দের দেশ" })}</span>
                <select className={field} value={f.country} onChange={(e) => setF({ ...f, country: e.target.value })}>
                  <option className="text-ink" value="">{t({ en: "Choose…", bn: "বেছে নিন…" })}</option>
                  {["UK", "USA", "Canada", "Australia", "Europe", "Skilled migration", "Work visa"].map((c) => <option className="text-ink" key={c}>{c}</option>)}
                </select>
              </label>
              <label className="block"><span className="mb-1 block text-sm text-white/70">{t({ en: "Message", bn: "বার্তা" })}</span><textarea rows={4} className={field} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></label>
              <button className="btn-primary w-full bg-white !text-brand-800 hover:!bg-brand-50 sm:w-auto"><Send className="h-4 w-4" /> {t({ en: "Send via WhatsApp", bn: "হোয়াটসঅ্যাপে পাঠান" })}</button>
              <p className="text-xs text-white/50">{t({ en: "Demo: the form opens WhatsApp with your details. The live site would also log it in a CRM.", bn: "ডেমো: ফর্মটি আপনার তথ্যসহ হোয়াটসঅ্যাপ খুলবে। লাইভ সাইটে এটি CRM-এও জমা হবে।" })}</p>
            </form>
          </Reveal>
          <div className="grid gap-4">
            {[
              { I: MapPin, h: { en: "Corporate office", bn: "কর্পোরেট অফিস" }, b: <>{contact.addressLines[0]}<br />{contact.addressLines[1]}</> },
              { I: Phone, h: { en: "Call us", bn: "কল করুন" }, b: <a href={contact.phoneHref} className="hover:text-brand">{contact.phone}</a> },
              { I: Mail, h: { en: "Email", bn: "ইমেইল" }, b: <a href={`mailto:${contact.email}`} className="hover:text-brand">{contact.email}</a> },
              { I: Clock, h: { en: "Office hours", bn: "অফিস সময়" }, b: t(contact.hours) },
            ].map(({ I, h, b }, n) => (
              <Reveal key={h.en} delay={n * 0.08} className="glass-light flex gap-4 rounded-3xl p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-white"><I className="h-5 w-5" /></div>
                <div><p className="font-bold">{t(h)}</p><p className="text-slate-600">{b}</p></div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-3xl bg-[#25D366] p-5 font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-1"><WhatsAppIcon /> {t({ en: "Chat on WhatsApp", bn: "হোয়াটসঅ্যাপে কথা বলুন" })}</a>
            </Reveal>
          </div>
        </div>
        <Reveal className="glass-light mx-auto mt-6 max-w-6xl overflow-hidden rounded-3xl p-2">
          <iframe title="Skylark Global office map" src="https://maps.google.com/maps?q=Mirpur%20DOHS%20Road%209%20Dhaka&z=15&output=embed" className="h-96 w-full rounded-2xl" loading="lazy" />
        </Reveal>
      </section>
    </>
  );
}
