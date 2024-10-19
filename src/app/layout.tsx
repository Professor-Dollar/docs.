import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Docs.",
  description: "Docs. A tasks manager app made with react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
