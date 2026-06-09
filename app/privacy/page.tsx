import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "ミライビルド株式会社のプライバシーポリシーです。"
};

const policies = [
  {
    title: "個人情報の取得について",
    text: "当社は、お問い合わせへの対応など必要な範囲において、適正な手段により個人情報を取得します。"
  },
  {
    title: "個人情報の利用目的",
    text: "取得した個人情報は、お問い合わせへの回答、業務上必要な連絡、サービス品質向上のために利用します。"
  },
  {
    title: "第三者提供について",
    text: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供することはありません。"
  },
  {
    title: "安全管理について",
    text: "当社は、個人情報の漏えい、滅失、き損等を防止するため、必要かつ適切な安全管理措置を講じます。"
  },
  {
    title: "開示・訂正・削除について",
    text: "ご本人から個人情報の開示、訂正、利用停止、削除等のご請求があった場合、法令に従い適切に対応します。"
  },
  {
    title: "プライバシーポリシーの変更",
    text: "本ポリシーの内容は、法令その他必要に応じて変更することがあります。変更後の内容は本ページに掲載します。"
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-[calc(var(--header-height)+48px)]">
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Privacy Policy</p>
          <h1 className="mt-3 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            プライバシーポリシー
          </h1>
          <p className="mt-6 text-sm leading-8 text-steel">
            {site.name}（以下「当社」といいます。）は、当社が取得する個人情報の重要性を認識し、個人情報の保護に関する法令を遵守し、適切な管理に努めます。
          </p>

          <div className="mt-10 grid gap-6">
            {policies.map((policy) => (
              <section key={policy.title} className="border-t border-line pt-6">
                <h2 className="text-lg font-bold text-ink">{policy.title}</h2>
                <p className="mt-3 text-sm leading-8 text-steel">{policy.text}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded border border-line bg-mist px-4 py-5 text-sm leading-7 text-steel">
            <p className="font-bold text-ink">事業者情報</p>
            <p className="mt-2">{site.name}</p>
            <p>{site.address}</p>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded bg-navy px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink hover:shadow-lift"
          >
            トップへ戻る
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
