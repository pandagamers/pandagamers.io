import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-9xl md:text-[120px] font-bold text-primary mb-4">404</h1>
                <p className="text-3xl md:text-4xl font-bold text-accent mb-4">Page Not Found</p>
              </div>

              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Oops! It looks like you've ventured into uncharted gaming territory. The page you're looking for doesn't exist or has been moved.
              </p>

              <div className="space-y-4">
                <p className="text-lg text-foreground/70">
                  Here are some helpful links to get you back on track:
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase h-9 px-6 py-2">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                  </Link>
                  <Link href="/apply" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase h-9 px-6 py-2">
                    Join Pandamonium
                  </Link>
                </div>
              </div>

              <div className="mt-12 p-6 bg-card rounded-lg border border-primary/30">
                <p className="text-foreground/70 text-sm">
                  If you believe this is an error, please contact our Community Managers on Discord at{" "}
                  <a href="https://discord.gg/pandagamers" className="text-accent hover:text-accent/80 underline">
                    discord.gg/pandagamers
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
