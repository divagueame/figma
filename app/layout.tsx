import type { Metadata } from "next";
import { Room } from "./Room";
import { Work_Sans } from "next/font/google";
import "./globals.css";


const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans", weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "Minimalist Figma Clone using FabricJS",
};

export default function RootLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-green-700`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
