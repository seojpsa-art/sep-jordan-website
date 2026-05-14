import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const arabic = IBM_Plex_Sans_Arabic({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["arabic"],
  variable: "--font-arabic"
});

export const metadata: Metadata = {
  title: "Students Exchange Program | JPSA",
  description: "Explore SEP outgoing opportunities, destinations, fields, and applications with JPSA Jordan.",
  icons: {
    icon: "/seplogo.png",
    apple: "/seplogo.png",
  },
  openGraph: {
    title: "Students Exchange Program | JPSA",
    description: "Explore SEP outgoing opportunities, destinations, fields, and applications with JPSA Jordan.",
    images: [{ url: "/seplogo.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${arabic.variable} font-sans bg-sep-warm-white text-sep-dark-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
