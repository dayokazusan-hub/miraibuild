import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo/logo_moto.png"
                width={44}
                height={45}
                alt=""
                className="h-10 w-10 rounded bg-white object-contain p-1"
              />
              <p className="font-bold">{site.name}</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/72">{site.description}</p>
          </div>

          <div className="grid gap-3 text-sm text-white/76">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy/" className="transition-colors hover:text-white">
              プライバシーポリシー
            </Link>
          </div>
        </div>
        <p className="mt-10 text-xs text-white/52">
          © {new Date().getFullYear()} Miraibuild Co., Ltd.
        </p>
      </div>
    </footer>
  );
}
