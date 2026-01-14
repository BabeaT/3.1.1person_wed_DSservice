import "./globals.css";
import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import { Providers } from "./providers";
import { PixelHeader } from "@/components/pixel-header";
import { PixelFooter } from "@/components/pixel-footer";

const CustomCursor = dynamic(() => import('@/components/custom-cursor'), {
  ssr: false,
  loading: () => null
});

export const metadata: Metadata = {
  title: "Pixel Portfolio - Creative Developer",
  description: "A pixel art portfolio and blog showcasing creative digital work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <Providers>
          <CustomCursor />
          <PixelHeader />
          <main className="pt-24">{children}</main>
          <PixelFooter />
        </Providers>
      </body>
    </html>
  );
}