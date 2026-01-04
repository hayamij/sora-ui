import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientProvider } from "@/components/providers/client-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sora UI",
  description: "Sora UI Documentation",
  openGraph: {
    title: "Sora UI",
    description: "Sora UI Documentation",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Sora UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sora UI",
    description: "Sora UI Documentation",
    images: ["/og"],
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html className={inter.className} lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <ClientProvider>
            <Toaster />
            {children}
          </ClientProvider>
        </RootProvider>
      </body>
    </html>
  );
}
