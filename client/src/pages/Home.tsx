import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663500670124/SXNGAT78vSNwpoRmkuGSKu/hero-gaming-bg-VXFUbtmne5nHWAvvpbQoFd.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/60"></div>

          {/* Content */}
          <div className="container relative z-10 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663500670124/SXNGAT78vSNwpoRmkuGSKu/Clipboard_0_E213DA37_8f8aae30.png"
                  alt="Pandamonium"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
                PANDAMONIUM
              </h1>

              <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                A member-driven gaming community guided by core values of{" "}
                <span className="text-accent font-bold">inclusivity, equity, and accountability</span>.
              </p>

              <p className="text-lg text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
                <strong>Founded in 2004, we foster a safe and drama-free environment where gamers can forge lasting connections while treating each other with respect.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Apply Now
                </Link>
                <Link href="/charter" className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                  Read Charter
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">
                ABOUT US
              </h2>

              <div className="space-y-6 text-foreground/90 text-lg leading-relaxed mb-12">
                <p>
                  Founded in 2004, Pandamonium is a member-driven gaming community with core values of inclusivity, equity, and accountability. We are composed of people from all walks of life who celebrate diversity – whether it's of race, age, gender, religion, neurodivergence, or sexual orientation.
                </p>

                <p>
                  Our over 300 members bring a multitude of perspectives that enrich our community, including voices often marginalized elsewhere. Together we are real-life and online friends who are committed to playing games and having fun.
                </p>

                <p>
                  Pandamonium is about forging lasting connections. We maintain a drama-free environment, strictly enforcing a zero-tolerance policy for toxicity or trolling. We reject bigotry, racism, homophobia, transphobia, xenophobia, and misogyny of any kind.
                </p>

                <p>
                  While MMOs remain our roots, we welcome multiplayer games across genres. We invite you to consider joining our vibrant community.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="p-6 bg-background rounded-lg border border-primary/30 hover:border-primary/60 transition-colors">
                  <Users className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Inclusivity</h3>
                  <p className="text-foreground/80">
                    We celebrate diversity and welcome everyone regardless of background or identity.
                  </p>
                </div>

                <div className="p-6 bg-background rounded-lg border border-primary/30 hover:border-primary/60 transition-colors">
                  <Zap className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Equity</h3>
                  <p className="text-foreground/80">
                    We ensure fair treatment and equal opportunities for all members of our community.
                  </p>
                </div>

                <div className="p-6 bg-background rounded-lg border border-primary/30 hover:border-primary/60 transition-colors">
                  <Shield className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Accountability</h3>
                  <p className="text-foreground/80">
                    We hold ourselves and each other to high standards of conduct and integrity.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-foreground/80 mb-6">
                  Check out our charter and apply today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase"
                  >
                    <Link href="/charter">
                      View Charter
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase"
                  >
                    <Link href="/apply">
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
