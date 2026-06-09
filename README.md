# ミライビルド株式会社 コーポレートサイト

ミライビルド株式会社の会社紹介・信用確認を目的としたシンプルなコーポレートサイトです。

## 技術構成

- Next.js
- TypeScript
- Tailwind CSS
- Static Export

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

Cloudflare Pagesでは、以下を基本設定にしてください。

- Build command: `npm run build`
- Build output directory: `out`

## 環境変数

フォーム送信にFormspreeを利用する場合は、Cloudflare Pagesの環境変数に以下を設定してください。

```text
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
NEXT_PUBLIC_SITE_URL=https://example.com
```

`NEXT_PUBLIC_SITE_URL`はsitemap.xml、robots.txt、OGPの基準URLとして使用します。
