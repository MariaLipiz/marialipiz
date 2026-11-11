import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../Components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "María Lipiz · Recursos gratis para profes particulares",
  description: "Recursos para vivir muy bien de tus clases particulares sin tener que dar cada vez más.",
  icons: {
    icon: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
