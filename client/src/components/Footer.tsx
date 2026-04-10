import { Mail, Instagram, Youtube } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/30 mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 uppercase">About</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Pandamonium is a member-driven gaming community guided by core values of inclusivity, equity, and accountability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/charter" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Charter
                </a>
              </li>
              <li>
                <a href="/history" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  History
                </a>
              </li>
              <li>
                <a href="/leadership" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Leadership
                </a>
              </li>
              <li>
                <a href="/games" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Games
                </a>
              </li>
              <li>
                <a href="/events" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Events
                </a>
              </li>
              <li>
                <a href="/faq" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/apply" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Apply
                </a>
              </li>
              <li>
                <a href="https://pandamonium-shop.fourthwall.com/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Store
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 uppercase">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://discord.gg/pandagamers"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded transition-colors"
                aria-label="Discord"
              >
                <SiDiscord className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://instagram.com/pandagamers.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://youtube.com/@pandagamersio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary/20 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} Pandamonium. All Rights Reserved.</p>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Statement
          </Link>
        </div>
      </div>
    </footer>
  );
}
