import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bertumboost - Dorongan Kecil untuk Kesehatan Mental",
  description: "Konsultasi AI untuk kesehatan mental remaja, bootcamp, dan dukungan komunitas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${dmSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
