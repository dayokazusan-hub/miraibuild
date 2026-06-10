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

## 画像素材

- ヘッダー: `public/assets/logo/logo_cut.png`
- 会社概要: `public/assets/company/`
- ヒーロースライダー: `public/assets/hero/`

ヒーロースライダーの画像は、工事現場・重機・作業員写真を避けた生成素材を使用しています。

## 公開前チェック

- Formspreeの送信先URLを設定する
- `NEXT_PUBLIC_SITE_URL`を本番ドメインに変更する
- PC / スマホ表示でヘッダー、ヒーロー、フォームを確認する
