import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { DemoBanner, Footer, Navbar, WhatsAppFab } from "@/components/Chrome";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const hind = Hind_Siliguri({ subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-hind", display: "swap" });

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://devriazul.github.io"),
  title: { default: "Skylark Global · Study Abroad & Immigration Consultancy, Mirpur DOHS", template: "%s · Skylark Global" },
  description: "Concept demo: student visas, admissions and skilled migration to the UK, USA, Canada, Australia and Europe from Skylark Global, Mirpur DOHS, Dhaka.",
  // Demo only: keep it out of search results so it never competes with the real site.
  robots: { index: false, follow: false },
  icons: { icon: `${base}/images/logo-mark.png` },
  openGraph: {
    title: "Skylark Global · Fly your dream",
    description: "Study abroad and immigration consultancy in Mirpur DOHS, Dhaka. Since 2016.",
    images: [`${base}/images/team/group.jpg`],
  },
};

export const viewport: Viewport = { themeColor: "#02343b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${hind.variable}`}>
      <body className="font-sans">
        <LangProvider>
          <DemoBanner />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
        </LangProvider>
      </body>
    </html>
  );
}
