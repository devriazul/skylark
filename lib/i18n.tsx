"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { L } from "./content";
import { MotionGlobalConfig } from "framer-motion";

// QA aid: append ?qa to any URL to render every animation in its final state.
if (typeof window !== "undefined" && window.location.search.includes("qa")) MotionGlobalConfig.skipAnimations = true;

type Lang = "en" | "bn";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    try { const s = localStorage.getItem("skylark-lang"); if (s === "bn" || s === "en") setLang(s); } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("skylark-lang", lang); } catch {}
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const { lang, setLang } = useContext(Ctx);
  const t = (v: L | string) => (typeof v === "string" ? v : v[lang]);
  return { lang, setLang, t };
}
