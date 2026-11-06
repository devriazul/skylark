import type { Metadata } from "next";
import { AboutPage } from "@/components/Pages";
export const metadata: Metadata = { title: "About us" };
export default function Page() { return <AboutPage />; }
