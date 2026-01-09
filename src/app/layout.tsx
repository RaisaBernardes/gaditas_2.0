import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";




export const metadata: Metadata = {
  title: "Gaditas",
  description: "Construções",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
