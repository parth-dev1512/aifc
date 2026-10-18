"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about_us", label: "About Us" },
  { href: "/rise_capital", label: "RISE Capital" },
  { href: "/advisory_projects", label: "Advisory Projects" },
  { href: "/conclave", label: "Conclave" },
  { href: "/the_review", label: "The Review" },
];

const teamLinks = [
  { href: "/board", label: "Board" },
  { href: "/members", label: "Members" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  const teamActive = teamLinks.some((l) => isActive(l.href));

  return (
    <>
      <nav
        id="main-nav"
        className={`bg-surface/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-outline-variant flex items-center transition-all duration-300 ${
          scrolled ? "h-16 shadow-sm" : "h-20"
        }`}
      >
        <div className="flex justify-between items-center w-full px-container-padding max-w-container-max mx-auto h-full">
          <Link
            href="/"
            className="font-headline-sm text-primary font-bold transition-all active:scale-95 flex items-center gap-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="AIFC logo"
              className="h-10 w-10 object-contain"
              src="/assets/logo-nav.png"
            />
            Ashoka Impact Finance Club
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "nav-link-active" : "nav-link"}
              >
                {l.label}
              </Link>
            ))}
            <div className="relative group h-full flex items-center">
              <button
                className={`font-label-lg flex items-center gap-1 transition-colors group-hover:text-primary ${
                  teamActive ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                Team{" "}
                <span className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </button>
              <div className="absolute top-full left-0 w-48 bg-white border border-outline-variant shadow-xl hidden group-hover:block py-2 rounded-lg overflow-hidden">
                {teamLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-6 py-3 text-sm text-on-surface hover:bg-surface-container transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/join_us"
            className="bg-navy-brand text-white px-6 py-2.5 rounded-lg font-label-lg hover:opacity-90 transition-all active:scale-95 hidden md:block shadow-sm"
          >
            Join Us
          </Link>
          <button
            className="lg:hidden text-primary"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile navigation overlay */}
      <div
        className={`fixed inset-0 bg-white z-[60] flex flex-col p-8 transform transition-transform duration-300 lg:hidden shadow-2xl overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="font-headline-sm font-bold text-primary">AIFC</span>
          <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <span className="material-symbols-outlined text-primary text-3xl">
              close
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {[...links, ...teamLinks].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-headline-md font-bold ${
                isActive(l.href) ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/join_us"
          className="mt-auto pt-8 bg-navy-brand text-white py-4 rounded-lg font-label-lg text-center"
        >
          Join Us
        </Link>
      </div>
    </>
  );
}
