import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Inter_Tight } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/bronx.css";
import { MagicCursor } from "@/components/bronx/MagicCursor";
import { SmoothScroll } from "@/components/bronx/SmoothScroll";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1b2922",
  viewportFit: "cover",
};

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanjirulislam.example.com"),
  title: "TANJIRUL ISLAM — Digital Designer & Full-Stack Developer",
  description:
    "Minimalist aesthetics, elegant typography, and intuitive web applications by Tanjirul Islam.",
  keywords: [
    "Tanjirul Islam",
    "Digital Designer",
    "Full-Stack Developer",
    "Webflow Developer",
    "Next.js Portfolio",
    "UI/UX Design",
    "Creative Developer",
    "Minimalist Design"
  ],
  authors: [{ name: "Tanjirul Islam" }],
  creator: "Tanjirul Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanjirulislam.example.com",
    title: "TANJIRUL ISLAM — Digital Designer & Full-Stack Developer",
    description:
      "Minimalist aesthetics, elegant typography, and intuitive web applications.",
    siteName: "Tanjirul Islam Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "TANJIRUL ISLAM — Digital Designer & Full-Stack Developer",
    description: "Minimalist aesthetics, elegant typography, and intuitive web applications."
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${instrumentSans.variable} ${interTight.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Inter+Tight:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <SmoothScroll>
          <MagicCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
