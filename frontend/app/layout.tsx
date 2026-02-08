import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nilüfer Mahalle Komiteleri | Katılımcı Demokrasi Platformu",
  description:
    "Nilüfer Belediyesi mahalle komiteleri platformu. Katılımcı demokrasi ile geleceği birlikte şekillendirelim.",
  keywords: [
    "nilüfer",
    "mahalle komiteleri",
    "katılımcı demokrasi",
    "belediye",
    "bursa",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
