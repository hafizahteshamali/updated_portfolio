import {Outfit} from "next/font/google";
import "./globals.css";

//Component calls
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hafiz Ahtesham Ali Rehmani | MERN Stack Developer",
description: "Personal portfolio showcasing MERN stack projects, web applications, and professional experience of Hafiz Ahtesham Ali Rehmani.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme='light'>
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
