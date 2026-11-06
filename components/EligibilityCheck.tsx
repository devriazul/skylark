"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { contact, type L } from "@/lib/content";
import { WhatsAppIcon } from "./Brand";

type Q = { key: string; q: L; options: { v: string; label: L; score: number }[] };

const QUESTIONS: Q[] = [
  { key: "country", q: { en: "Where would you like to study?", bn: "কোথায় পড়তে চান?" }, options: [
    { v: "UK", label: { en: "United Kingdom", bn: "যুক্তরাজ্য" }, score: 0 },
    { v: "USA", label: { en: "United States", bn: "যুক্তরাষ্ট্র" }, score: 0 },
    { v: "Canada", label: { en: "Canada", bn: "কানাডা" }, score: 0 },
    { v: "Australia", label: { en: "Australia", bn: "অস্ট্রেলিয়া" }, score: 0 },
    { v: "Europe", label: { en: "Europe", bn: "ইউরোপ" }, score: 0 },
    { v: "Not sure", label: { en: "Not sure yet", bn: "এখনো ঠিক করিনি" }, score: 0 },
  ] },
  { key: "level", q: { en: "Your latest qualification", bn: "আপনার সর্বশেষ যোগ্যতা" }, options: [
    { v: "HSC / A-level", label: { en: "HSC / A-level", bn: "এইচএসসি / এ-লেভেল" }, score: 2 },
    { v: "Diploma", label: { en: "Diploma", bn: "ডিপ্লোমা" }, score: 2 },
    { v: "Bachelor's", label: { en: "Bachelor's degree", bn: "স্নাতক" }, score: 3 },
    { v: "Master's", label: { en: "Master's degree", bn: "স্নাতকোত্তর" }, score: 3 },
  ] },
  { key: "result", q: { en: "Your result (CGPA / GPA)", bn: "আপনার ফলাফল (CGPA / GPA)" }, options: [
    { v: "Excellent", label: { en: "3.5+ / GPA 5", bn: "৩.৫+ / জিপিএ ৫" }, score: 3 },
    { v: "Good", label: { en: "3.0 – 3.49 / GPA 4+", bn: "৩.০ – ৩.৪৯ / জিপিএ ৪+" }, score: 2 },
    { v: "Average", label: { en: "2.5 – 2.99", bn: "২.৫ – ২.৯৯" }, score: 1 },
    { v: "Below 2.5", label: { en: "Below 2.5", bn: "২.৫ এর নিচে" }, score: 0 },
  ] },
  { key: "english", q: { en: "English test", bn: "ইংরেজি পরীক্ষা" }, options: [
    { v: "IELTS 6.5+", label: { en: "IELTS 6.5+ / PTE 58+", bn: "আইইএলটিএস ৬.৫+ / পিটিই ৫৮+" }, score: 3 },
    { v: "IELTS 6.0", label: { en: "IELTS 6.0 / PTE 50+", bn: "আইইএলটিএস ৬.০ / পিটিই ৫০+" }, score: 2 },
    { v: "Planning", label: { en: "Planning to take it", bn: "দেওয়ার পরিকল্পনা আছে" }, score: 1 },
    { v: "None", label: { en: "Not yet", bn: "এখনো না" }, score: 0 },
  ] },
  { key: "budget", q: { en: "Yearly budget (tuition + living)", bn: "বার্ষিক বাজেট (টিউশন + থাকা)" }, options: [
    { v: "Under 15 lakh", label: { en: "Under BDT 15 lakh", bn: "১৫ লাখ টাকার কম" }, score: 1 },
    { v: "15–30 lakh", label: { en: "BDT 15 – 30 lakh", bn: "১৫ – ৩০ লাখ টাকা" }, score: 2 },
    { v: "30 lakh+", label: { en: "BDT 30 lakh +", bn: "৩০ লাখ টাকার বেশি" }, score: 3 },
  ] },
];

export default function EligibilityCheck() {
  const { t } = useLang();
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<string, { v: string; score: number }>>({});
  const done = step >= QUESTIONS.length;

  const score = useMemo(() => Object.values(ans).reduce((a, b) => a + b.score, 0), [ans]);
  const pct = Math.min(98, Math.round((score / 12) * 100));
  const band: L = pct >= 75 ? { en: "Strong profile", bn: "শক্তিশালী প্রোফাইল" } : pct >= 50 ? { en: "Good chances", bn: "ভালো সম্ভাবনা" } : { en: "Let's build your profile", bn: "চলুন প্রোফাইল গড়ি" };
  const msg = encodeURIComponent(`Hi Skylark Global, I took the eligibility check on your website.\n${QUESTIONS.map((q) => `${q.q.en}: ${ans[q.key]?.v ?? "-"}`).join("\n")}\nPlease call me for a free consultation.`);

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 text-white sm:p-10">
      <div className="mb-8 flex items-center gap-2" aria-hidden>
        {QUESTIONS.map((_, i) => (
          <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
            <motion.div className="h-full rounded-full bg-glow" initial={false} animate={{ width: i < step ? "100%" : "0%" }} transition={{ duration: 0.5 }} />
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div key={step} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <p className="text-sm font-semibold text-glow">{t({ en: "Question", bn: "প্রশ্ন" })} {step + 1} / {QUESTIONS.length}</p>
            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{t(QUESTIONS[step].q)}</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {QUESTIONS[step].options.map((o) => {
                const sel = ans[QUESTIONS[step].key]?.v === o.v;
                return (
                  <button key={o.v} onClick={() => { setAns({ ...ans, [QUESTIONS[step].key]: { v: o.v, score: o.score } }); setTimeout(() => setStep(step + 1), 220); }}
                    className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-left font-medium transition ${sel ? "border-glow bg-glow/20" : "border-white/15 bg-white/5 hover:border-white/40 hover:bg-white/10"}`}>
                    {t(o.label)}
                    <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                  </button>
                );
              })}
            </div>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
                <ArrowLeft className="h-4 w-4" /> {t({ en: "Back", bn: "পেছনে" })}
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <div className="relative mx-auto h-44 w-44">
              <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="10" />
                <motion.circle cx="60" cy="60" r="52" fill="none" stroke="#5ce1e6" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 52} initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - pct / 100) }} transition={{ duration: 1.4, ease: "easeOut" }} />
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div><p className="text-4xl font-extrabold">{pct}%</p><p className="text-xs text-white/70">{t({ en: "profile match", bn: "প্রোফাইল ম্যাচ" })}</p></div>
              </div>
            </div>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-glow/20 px-3 py-1 text-sm font-semibold text-glow"><CheckCircle2 className="h-4 w-4" /> {t(band)}</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{t({ en: "A counsellor can map your best options in 15 minutes.", bn: "মাত্র ১৫ মিনিটে একজন কাউন্সেলর আপনার সেরা অপশনগুলো দেখাবেন।" })}</h3>
              <p className="mt-2 text-white/70">{t({ en: "This quick score is a guide only. Send your answers on WhatsApp and we'll call you for a free consultation.", bn: "এই স্কোর শুধু একটি ধারণা। উত্তরগুলো হোয়াটসঅ্যাপে পাঠান, আমরা ফ্রি পরামর্শের জন্য কল করব।" })}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`${contact.whatsapp}?text=${msg}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                  <WhatsAppIcon /> {t({ en: "Send to a counsellor", bn: "কাউন্সেলরকে পাঠান" })}
                </a>
                <button onClick={() => { setAns({}); setStep(0); }} className="btn-glass"><RotateCcw className="h-4 w-4" /> {t({ en: "Start again", bn: "আবার শুরু" })}</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
