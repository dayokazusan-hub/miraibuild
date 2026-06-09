"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-white/95 shadow-[0_8px_28px_rgba(24,34,53,0.08)] backdrop-blur"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="トップページへ">
          <Image
            src="/assets/logo/logo_moto.png"
            width={46}
            height={47}
            alt=""
            className="h-10 w-10 shrink-0 object-contain"
            priority
          />
          <span className="truncate text-sm font-bold tracking-normal text-ink sm:text-base">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-steel md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded border border-line bg-white text-ink shadow-sm md:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="overflow-hidden border-t border-line bg-white md:hidden">
          <nav className="mx-auto grid max-w-6xl gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-3 text-sm font-semibold text-ink transition-colors hover:bg-mist"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
