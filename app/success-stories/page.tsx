import type { Metadata } from "next";
import { StoriesPage } from "@/components/Pages";
export const metadata: Metadata = { title: "Success stories" };
export default function Page() { return <StoriesPage />; }
