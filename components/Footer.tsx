import Link from "next/link";
import ShareButton from "./ShareButton";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/impactfinance.ashoka/",
  linkedin: "https://www.linkedin.com/company/ashokaimpactfinanceclub/",
};

const socialClass =
  "w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-navy-brand hover:text-white hover:border-navy-brand transition-all duration-300";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-outline-variant">
      <div className="w-full py-24 px-container-padding max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <span className="font-headline-sm font-bold text-primary mb-8 block">
              Ashoka Impact Finance Club
            </span>
            <p className="text-on-surface-variant font-body-md max-w-sm mb-10 leading-relaxed">
              The definitive hub for student engagement in finance and social
              development at Ashoka University.
            </p>
            <div className="flex gap-4">
              <ShareButton />
              <a
                className={socialClass}
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                className={socialClass}
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-label-lg text-primary uppercase tracking-widest mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors font-label-lg"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors font-label-lg"
                  href="/about_us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors font-label-lg"
                  href="/advisory_projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors font-label-lg"
                  href="/board"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-label-lg text-primary uppercase tracking-widest mb-8">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors font-label-lg"
                  href="/rise_capital"
                >
                  RISE Capital
                </Link>
              </li>
              <li>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-colors font-label-lg"
                  href="/conclave"
                >
                  Conclave 2026
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-label-lg text-primary uppercase tracking-widest mb-8">
              Contact
            </h4>
            <p className="text-on-surface-variant font-label-lg mb-4">
              impactfinance@ashoka.edu.in
            </p>
            <p className="text-on-surface-variant font-label-lg">
              Sonipat, Haryana
            </p>
          </div>
        </div>
        <div className="pt-10 border-t border-outline-variant flex flex-col md:flex-row justify-center md:justify-start items-center gap-6">
          <p className="font-body-md text-on-surface-variant">
            © 2026 Ashoka Impact Finance Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
