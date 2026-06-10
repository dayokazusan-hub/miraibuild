import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionReveal } from "@/components/SectionReveal";
import {
  companyProfile,
  contactNotes,
  mapSrc,
  serviceAreas,
  services,
  site
} from "@/lib/site-data";

function SectionTitle({
  eyebrow,
  title,
  lead
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-normal text-ink sm:text-3xl">{title}</h2>
      {lead ? <p className="mt-4 text-sm leading-7 text-steel sm:text-base">{lead}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[96vh] overflow-hidden bg-white pt-[var(--header-height)] sm:min-h-[90vh]">
          <div className="hero-background absolute inset-0" aria-hidden="true" />
          <div className="hero-readable-overlay absolute inset-0" aria-hidden="true" />

          <div className="mx-auto flex min-h-[calc(96vh-var(--header-height))] max-w-6xl items-center px-4 pb-24 pt-20 sm:min-h-[calc(90vh-var(--header-height))] sm:px-6 sm:pb-28 sm:pt-16 lg:px-8">
            <div className="relative z-10 max-w-[680px]">
              <h1 className="text-[2.28rem] font-bold leading-[1.32] tracking-normal text-ink sm:text-[2.85rem] sm:leading-[1.28] lg:text-[3.1rem]">
                <span className="hidden whitespace-nowrap sm:block">お客様のご要望に寄り添い</span>
                <span className="hidden whitespace-nowrap sm:block">最善を尽くす</span>
                <span className="block whitespace-nowrap sm:hidden">お客様のご要望に</span>
                <span className="block whitespace-nowrap sm:hidden">寄り添い</span>
                <span className="block whitespace-nowrap sm:hidden">最善を尽くす</span>
              </h1>
              <p className="mt-6 text-sm font-bold text-gold sm:text-base">
                Innovation for the future
              </p>
              <p className="mt-4 whitespace-pre-line text-base leading-8 text-steel sm:text-lg">
                {site.heroLead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded bg-navy px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink hover:shadow-lift"
                >
                  お問い合わせ
                </Link>
                <Link
                  href="#company"
                  className="inline-flex min-h-12 items-center justify-center rounded border border-line bg-white px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-navy hover:text-navy hover:shadow-soft"
                >
                  <span>会社概要を見る</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SectionReveal>
          <section id="about" className="bg-[#f8fafb] py-16 sm:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="About"
                title="ミライビルドについて"
                lead="ミライビルド株式会社は、大阪府を中心に建設業・リフォーム工事・解体工事・電気工事など幅広い事業を行っています。"
              />
              <p className="mx-auto max-w-3xl text-center text-base leading-9 text-steel">
                お客様や取引先様との信頼関係を大切にし、ご要望に寄り添った誠実な対応を心掛けています。
                会社情報を明確にお伝えし、関係者の皆様が安心して確認できるサイトを目指しています。
              </p>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="services" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Services"
                title="事業内容"
                lead="建設まわりのご相談から、住まい・不動産・環境整備まで、幅広い領域に対応します。"
              />
              <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-12">
                {services.map((service, index) => (
                  <article
                    key={service.title}
                    className={`group rounded border border-line bg-white p-5 shadow-[0_8px_24px_rgba(24,34,53,0.04)] transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lift ${
                      index < 4 ? "lg:col-span-3" : "lg:col-span-4"
                    }`}
                  >
                    <p className="text-sm font-bold text-gold">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 text-lg font-bold leading-7 text-ink">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-steel">{service.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="area" className="bg-mist py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Area"
                title="対応エリア"
                lead="大阪市淀川区を中心に、近隣地域から大阪府全域・近県までご相談を承ります。"
              />
              <div className="mx-auto grid max-w-4xl gap-3">
                {serviceAreas.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
                    {row.map((area) => (
                      <span
                        key={area}
                        className="rounded border border-line bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="company" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionTitle
                eyebrow="Company"
                title="会社概要"
                lead="所在地、営業時間など、関係者の皆様に確認いただきたい基本情報を掲載しています。"
              />
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="min-h-[320px] overflow-hidden rounded border border-line bg-mist shadow-soft">
                  <iframe
                    src={mapSrc}
                    title="ミライビルド株式会社 所在地"
                    className="h-full min-h-[320px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <Image
                    src="/assets/company/company.jpeg"
                    width={734}
                    height={975}
                    alt="ミライビルド株式会社の外観"
                    className="h-full min-h-[320px] rounded border border-line object-cover shadow-soft"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                  <Image
                    src="/assets/company/signboard.jpeg"
                    width={1088}
                    height={1445}
                    alt="ミライビルド株式会社の看板"
                    className="h-full min-h-[320px] rounded border border-line object-cover shadow-soft"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
              </div>

              <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded border border-line bg-white">
                <dl className="divide-y divide-line">
                  {companyProfile.map((item) => (
                    <div
                      key={item.label}
                      className="grid gap-2 px-6 py-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:px-10 lg:px-14"
                    >
                      <dt className="text-sm font-bold text-navy">{item.label}</dt>
                      <dd className="text-sm leading-7 text-steel">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section id="contact" className="bg-[#f8fafb] py-16 sm:py-20">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Contact</p>
                <h2 className="mt-3 text-2xl font-bold tracking-normal text-ink sm:text-3xl">
                  お問い合わせ
                </h2>
                <p className="mt-5 text-sm leading-7 text-steel sm:text-base">
                  工事や各種ご相談について、以下のフォームよりお問い合わせください。
                  内容を確認のうえ、必要に応じて担当者よりご連絡いたします。
                </p>
                <div className="mt-7 rounded border border-line bg-white px-5 py-5">
                  <p className="text-sm font-bold text-ink">ご確認ください</p>
                  <ul className="mt-3 grid gap-2 text-sm leading-7 text-steel">
                    {contactNotes.map((note) => (
                      <li key={note} className="flex gap-2">
                        <span className="mt-[0.72em] h-1 w-1 shrink-0 rounded-full bg-gold" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded border border-line bg-white p-5 shadow-soft sm:p-8">
                <ContactForm />
              </div>
            </div>
          </section>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
