import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Apply() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              APPLY
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              Interested in joining Pandamonium? Here is how to apply.
            </p>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            {/* Step 1: Review Charter */}
            <div className="mb-16 p-8 bg-card rounded-lg border border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-primary mb-3">Review Our Charter</h2>
                  <p className="text-foreground/80 mb-4">
                    Start by reading our community charter. It outlines our core values, membership criteria, and the principles that guide our community. Make sure you align with our values of inclusivity, equity, and accountability.
                  </p>
                  <Link href="/charter">
                    <a className="inline-block px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase rounded transition-colors">
                      Read Charter
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Step 2: Join Discord */}
            <div className="mb-16 p-8 bg-card rounded-lg border border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-primary mb-3">Join Our Discord Server</h2>
                  <p className="text-foreground/80 mb-4">
                    Join our Discord server by clicking the link below. This is where our community lives and where you will submit your application.
                  </p>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase"
                  >
                    <a
                      href="https://discord.gg/pandagamers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Join Discord
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Step 3: Submit Application */}
            <div className="mb-16 p-8 bg-card rounded-lg border border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-primary mb-3">Submit Your Application</h2>
                  <p className="text-foreground/80 mb-4">
                    Once you have joined the Discord server, navigate to the <a href="https://discord.com/channels/204984438596042752/838783816767373362" target="_blank" rel="noopener noreferrer" className="font-mono text-primary hover:underline">#apply</a> channel and follow the directions to submit your application.
                  </p>
                  <p className="text-foreground/80">
                    Your application will be reviewed by all community members and approved or denied once a consensus has been reached. This process takes at least 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Wait for Approval */}
            <div className="mb-16 p-8 bg-card rounded-lg border border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-primary mb-3">Await Approval</h2>
                  <p className="text-foreground/80 mb-4">
                    Once your application has been reviewed, you will be notified via direct message on Discord. If you have any questions during the process, use <a href="https://discord.com/channels/204984438596042752/985222513640497233" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-mono">#open-a-ticket</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="p-8 bg-card rounded-lg border border-primary/30 mb-16">
              <h2 className="text-2xl font-bold text-primary mb-6">Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">
                    <span className="font-bold text-primary">Must be 18 years or older</span> - No exceptions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">
                    <span className="font-bold text-primary">Agree with our values</span> - Inclusivity, equity, and accountability.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">
                    <span className="font-bold text-primary">Zero-tolerance policy</span> - We do not tolerate bigotry, racism, homophobia, transphobia, xenophobia, or misogyny.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">
                    <span className="font-bold text-primary">Commitment to community</span> - We value active participation and engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Clarification Note */}
            <div className="p-6 bg-background border border-primary/20 rounded-lg mb-8">
              <p className="text-sm text-foreground/70 text-left">
                <span className="font-semibold text-primary">Note:</span> If you're looking for Pandemonium Books & Games, the store located in Cambridge, Massachusetts, visit{" "}
                <a href="https://pandemoniumbooks.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  pandemoniumbooks.com
                </a>
                {" "}or join their{" "}
                <a href="https://discord.gg/WN2vdCuYzB" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Discord
                </a>
. If you're looking for the Pandemonium Gaming Community within Conan Exiles, visit{" "}
                <a href="https://pand.life" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  pand.life
                </a>
                {" "}or join their{" "}
                <a href="https://discord.gg/pandemonium" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Discord
                </a>
                . Neither are affiliated with Pandamonium.
              </p>
            </div>


          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
