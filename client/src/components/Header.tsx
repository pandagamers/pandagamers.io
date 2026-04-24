import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Charter", href: "/charter" },
    { label: "History", href: "/history" },
    { label: "Games", href: "/games" },
    { label: "Events", href: "/events" },
    { label: "FAQ", href: "/faq" },
    { label: "Leadership", href: "/leadership" },
    { label: "Apply", href: "/apply" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-primary/30 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663500670124/SXNGAT78vSNwpoRmkuGSKu/Clipboard_0_7E831671_68c346b0.png"
            alt="Pandamonium"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <span className="font-space-mono font-bold text-lg md:text-xl text-primary hidden sm:inline">
            PANDAMONIUM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-poppins font-medium text-foreground hover:text-primary transition-colors duration-200 uppercase text-sm tracking-wide">
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <a
              href="https://pandamonium-shop.fourthwall.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary/20 hover:bg-primary/30 text-primary font-bold uppercase border border-primary/50 h-9 px-4 py-2"
            >
              Store
            </a>
            <a
              href="https://discord.gg/pandagamers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase h-9 px-4 py-2"
            >
              Join Discord
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-primary/10 rounded transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-card border-t border-primary/30 py-4">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-poppins font-medium text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide block py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://pandamonium-shop.fourthwall.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary/20 hover:bg-primary/30 text-primary font-bold uppercase border border-primary/50 h-9 px-4 py-2 w-full"
            >
              Store
            </a>
            <a
              href="https://discord.gg/pandagamers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase h-9 px-4 py-2 w-full"
            >
              Join Discord
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
