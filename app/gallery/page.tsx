import type { Metadata } from "next";
import { GalleryPage } from "@/components/Pages";
export const metadata: Metadata = { title: "Gallery" };
export default function Page() { return <GalleryPage />; }
