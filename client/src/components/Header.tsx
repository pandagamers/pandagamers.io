import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Charter", href: "/charter" },
    { label: "History", href: "/history" },
    { label: "Leadership", href: "/leadership" },
    { label: "Apply", href: "/apply" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-primary/30 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="https://raw.githubusercontent.com/pandagamers/pandagamers/main/images/panda_icon_original.png"
              alt="Pandamonium"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="font-space-mono font-bold text-lg md:text-xl text-primary hidden sm:inline">
              PANDAMONIUM
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="font-poppins font-medium text-foreground hover:text-primary transition-colors duration-200 uppercase text-sm tracking-wide">
                {item.label}
              </a>
            </Link>
          ))}
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase"
          >
            <a href="https://discord.gg/pandagamers" target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-primary/10 rounded transition-colors"
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
        <nav className="md:hidden bg-card border-t border-primary/30 py-4">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="font-poppins font-medium text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase w-full"
            >
              <a href="https://discord.gg/pandagamers" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
