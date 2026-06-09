import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://miraibuild.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ミライビルド株式会社 | 大阪の建設・リフォーム・解体・電気工事",
    template: "%s | ミライビルド株式会社"
  },
  description:
    "ミライビルド株式会社は大阪府を中心に、建設業・リフォーム工事・解体工事・電気工事など幅広い事業を行う企業です。",
  openGraph: {
    title: "ミライビルド株式会社",
    description:
      "大阪府を中心に、建設業・リフォーム工事・解体工事・電気工事など幅広い事業を行っています。",
    url: siteUrl,
    siteName: "ミライビルド株式会社",
    images: [
      {
        url: "/assets/logo/logo.png",
        width: 1024,
        height: 1024,
        alt: "ミライビルド株式会社"
      }
    ],
    locale: "ja_JP",
    type: "website"
  },
  icons: {
    icon: "/assets/logo/logo.png",
    apple: "/assets/logo/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
