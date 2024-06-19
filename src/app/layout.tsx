import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navigation from "@/components/navigation/Navigation";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto Lider",
  description: "Auto Lider By Jova",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <header>
            <Navigation />
          </header>
          <>{children}</>
        </StoreProvider>
      </body>
    </html>
  );
}
