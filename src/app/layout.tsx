import type { Metadata } from "next";
import { Header } from "../components/header";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ['500', '600', '700']
})

export const metadata: Metadata = {
  title: "Instasany",
  description: "Projeto para praticar tecnologias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={epilogue.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
