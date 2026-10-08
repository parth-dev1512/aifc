import Link from "next/link";

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
              <a
                className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-navy-brand hover:text-white hover:border-navy-brand transition-all duration-300"
                href="https://wa.me/?text=Check%20out%20the%20Ashoka%20Impact%20Finance%20Club%20https://ashoka-impact-finance.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a
                className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-navy-brand hover:text-white hover:border-navy-brand transition-all duration-300"
                href="https://www.instagram.com/impactfinance.ashoka?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-xl">
                  alternate_email
                </span>
              </a>
              <a
                className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-navy-brand hover:text-white hover:border-navy-brand transition-all duration-300"
                href="https://www.linkedin.com/company/ashokaimpactfinanceclub/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className="material-symbols-outlined text-xl">group</span>
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
