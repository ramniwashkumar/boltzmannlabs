import type { Metadata } from "next";
import "./globals.css";
import FontAwesomeConfig from "./fontawesome";
import NavSelector from "@/components/mainlayout/Navselector";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Boltzmann",
    template: "%s | Boltzmann",
  },
  description: "Accelerating Life Science Research",
};

export default function RootLayout({
  children }: Readonly<{
    children: React.ReactNode;
    showNavbar: boolean
  }>) {
  return (
    <html lang="en" className="font-oswald">
      <head>
        <FontAwesomeConfig />
      </head>
      <body>
        <NavSelector />
        {children}
        <Footer />
      </body>
    </html>
  );
}
