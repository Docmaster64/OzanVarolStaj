"use client";

import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/cn";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

type Tone = "light" | "dark";

const NAV_ITEMS = [
    {label: "Doç. Dr. Özgür Bolat", href: "/dr-ozgur-bolat", variant: "normal", external: false},
    {label: "Anne Baba Okulu", href: "/anne-baba-okulu", variant: "normal", external: false},
    {label: "Ebeveyn Çözümleri", href: "/ebeveyn-cozumleri", variant: "normal", external: false},
    {label: "Blog", href: "/blog", variant: "normal", external: false},
    {label: "ParentWiser Premium", href: "https://app.parentwiser.com/premium", variant: "primary", external: true},
];

export default function Navbar({
                                   tone = "light",
                                   className = "",
                               }: {
    tone?: Tone;
    className?: string;
}) {
    const fg = tone === "dark" ? "text-white" : "text-slate-900";

    const btn =
        tone === "dark"
            ? "border-white/25 hover:bg-white/10"
            : "border-black/10 hover:bg-black/5";

    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header className={cn(
            "w-full fixed top-0 left-0 z-50",
            className
        )}>

            <div
                id="mega-menu-panel"
                className={cn(
                    "fixed inset-0 z-[120]",
                    "transition-opacity duration-300 ease-out",
                    open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                )}
                aria-hidden={!open}
            >
                <button
                    type="button"
                    aria-label="Close menu backdrop"
                    onClick={() => setOpen(false)}
                    className="absolute inset-0 bg-black/20"
                />

                <div
                    className={cn(
                        "absolute inset-x-0 top-0 w-full overflow-hidden bg-orange text-white shadow-2xl",
                        "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        open ? "translate-y-0" : "-translate-y-full",
                        "h-dvh min-[1026px]:h-[78vh] min-[1026px]:min-h-[620px] min-[1026px]:max-h-[860px]"
                    )}
                >
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute inset-y-[-10%] left-[18%] w-[28vw] rotate-[12deg] bg-white/6" />
                        <div className="absolute inset-y-[-14%] left-[44%] w-[22vw] rotate-[12deg] bg-white/7" />
                        <div className="absolute inset-y-[-12%] right-[6%] w-[20vw] rotate-[12deg] bg-white/6" />
                        <div className="absolute left-[20%] top-[-20%] h-[60vw] w-[60vw] rounded-full bg-white/5 blur-3xl" />
                    </div>

                    <div className="relative h-full w-full">
                        <div className="flex h-full flex-col min-[1026px]:hidden">
                            <div className="flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-5">
                                <span className="font-montserrat text-sm uppercase tracking-[0.14em] text-white/80"/>

                                <button
                                    type="button"
                                    aria-label="Close menu"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex h-11 w-11 items-center justify-center text-white/95"
                                >
                                    <span className="material-symbols-rounded text-[26px] leading-none">close</span>
                                </button>
                            </div>

                            <div className="relative flex-1 overflow-y-auto px-4 pb-6 pt-3 sm:px-6">
                                <div className="grid h-full grid-cols-1 gap-6">
                                    <div className="space-y-4">
                                        <div className="relative overflow-hidden border-2 border-primary bg-primary p-4 rounded-md">
                                            <div className="grid grid-cols-[1fr_120px] gap-3">
                                                <div>
                                                    <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                                                        ParentWiser Premium
                                                    </p>
                                                    <p className="mt-3 font-montserrat font-semibold text-[30px] leading-[0.9] text-white">
                                                        Web Sitemize Özel %51 İndirimle 1 Yıllık Üyelik
                                                    </p>

                                                    <button
                                                        type="button"
                                                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange px-4 py-2 font-montserrat text-xs font-bold uppercase tracking-[0.08em]"
                                                    >
                                                        Keşfet
                                                        <span className="material-symbols-rounded text-[16px] leading-none">
                                                            arrow_forward
                                                        </span>
                                                    </button>
                                                </div>

                                                <div className="relative h-[150px]">
                                                    <div className="absolute inset-0 rounded-[18px] border border-white/30 bg-white/10" />
                                                    <Image
                                                        src="/images/banner_foreground.webp"
                                                        alt={'parentwiser'}
                                                        fill
                                                        sizes="(max-width: 1024px) 90vw, 420px"
                                                        className="object-cover"
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <nav className="flex flex-col items-end justify-start gap-2 pb-2">
                                        {NAV_ITEMS.map((item) => (
                                            <Link
                                                key={`mobile-hero-${item.href}`}
                                                href={item.href}
                                                target={item.external ? "_blank" : undefined}
                                                rel={item.external ? "noreferrer" : undefined}
                                                onClick={() => setOpen(false)}
                                                className="text-right font-montserrat font-bold text-[34px] leading-[0.95] text-white transition hover:opacity-80 sm:text-[42px]"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>


                        <div className="hidden h-full min-[1026px]:grid min-[1026px]:grid-cols-[1.05fr_0.95fr]">

                            <div className="relative h-full px-8 py-8 xl:px-10 xl:py-10">
                                <div className="relative h-full">

                                    <div className="absolute left-0 top-4 w-[520px] max-w-[100%]">
                                        <div className="relative overflow-hidden border-[3px] border-primary rounded-md bg-primary p-6">
                                            <div className="grid grid-cols-[1fr_180px] gap-4">
                                                <div>
                                                    <p className="font-montserrat text-[12px] font-semibold uppercase tracking-[0.16em] text-white/80">
                                                        ParentWiser Premium
                                                    </p>

                                                    <p className="mt-4 font-montserrat font-semibold text-[50px] leading-[0.86] text-white">
                                                        Web Sitemize Özel %51 İndirimle 1 Yıllık Üyelik
                                                    </p>

                                                    <button
                                                        type="button"
                                                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-montserrat text-sm font-bold uppercase tracking-[0.06em] text-white"
                                                    >
                                                        Keşfet
                                                        <span className="material-symbols-rounded text-[18px] leading-none">
                                                            arrow_forward
                                                        </span>
                                                    </button>
                                                </div>

                                                <div className="relative">
                                                    <div className="relative mx-auto h-[280px] w-[220px] overflow-hidden rounded-[26px] border-2 border-white/30 bg-white/10">
                                                        <Image
                                                            src="/images/banner_foreground.webp"
                                                            alt="parentwiser"
                                                            fill
                                                            priority
                                                            sizes="150px"
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="relative flex h-full flex-col">
                                <div className="flex items-center justify-end px-8 pt-5 xl:px-10 xl:pt-6">
                                    <button
                                        type="button"
                                        aria-label="Close menu"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex h-11 w-11 items-center justify-center text-white/95 transition hover:opacity-80"
                                    >
                                        <span className="material-symbols-rounded text-[28px] leading-none">close</span>
                                    </button>
                                </div>

                                <div className="flex flex-1 items-center justify-end px-8 pb-10 xl:px-12 2xl:pb-32">
                                    <nav className="flex w-full max-w-[340px] flex-col items-start gap-4 xl:max-w-[50dvh] 2xl:gap-10">
                                        {NAV_ITEMS.map((item) => (
                                            <Link
                                                key={`desktop-hero-${item.href}`}
                                                href={item.href}
                                                target={item.external ? "_blank" : undefined}
                                                rel={item.external ? "noreferrer" : undefined}
                                                onClick={() => setOpen(false)}
                                                className={cn(
                                                    "w-full text-left font-montserrat font-semibold leading-[0.95] text-white transition",
                                                    "text-[40px] xl:text-[48px] 2xl:text-[56px]",
                                                    "hover:translate-x-1 hover:text-primary"
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={cn(
                    `mx-auto w-full max-w-8xl px-4 sm:px-6 min-[1026px]:px-12 ${fg}`,
                    "min-[1026px]:left-0 min-[1026px]:right-0",
                )}
            >
                <div
                    className="flex items-center justify-end min-[1026px]:justify-between gap-6 py-4 min-[1026px]:py-5">
                    <Link href="/" className="hidden min-[1026px]:inline-flex font-montserrat text-2xl leading-none">
                        <Image
                            src="/images/logo_pw_landing_1.png"
                            alt="ParentWiser"
                            width={140}
                            height={32}
                            priority
                            className="h-7 w-auto sm:h-8 min-[1026px]:h-7 min-[1200px]:h-8"
                        />
                    </Link>

                    <div className="-mr-4 -mt-5 flex flex-col items-end">

                        <div className="flex-1 flex items-center py-2 px-3">
                            <button
                                type="button"
                                aria-label={open ? "Close menu" : "Open menu"}
                                aria-expanded={open}
                                aria-controls="site-menu-panel"
                                onClick={() => setOpen((prev) => !prev)}
                                className={`inline-flex items-center justify-center px-3 py-2 transition ${btn}`}
                            >
                                <svg
                                    className="h-[12px] w-[65px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 65 12"
                                    fill="none"
                                >
                                    <path d="M0 0h65v1H0zM0 11h65v1H0z" fill="currentColor"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}
