import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FFXIVInvite() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">
                FINAL FANTASY XIV INVITE
              </h1>

              <div className="space-y-6 text-foreground/90 text-lg leading-relaxed">
                <p>
                  Welcome to Pandamonium's Final Fantasy XIV community! We're excited to have you join our Free Company (FC) on the Thunderfoot realm.
                </p>

                <div className="bg-background p-8 rounded-lg border border-primary/30">
                  <h2 className="text-2xl font-bold text-primary mb-4">Getting Started</h2>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li>
                      <strong>Join Our Discord:</strong> First, make sure you've joined our Discord server at{" "}
                      <a href="https://discord.gg/pandagamers" className="text-accent hover:text-accent/80 underline">
                        discord.gg/pandagamers
                      </a>
                    </li>
                    <li>
                      <strong>Verify Your Account:</strong> Complete the verification process in Discord to access our FFXIV channels.
                    </li>
                    <li>
                      <strong>Create Your Character:</strong> If you don't have a character on Thunderfoot, create one and let us know in the #ffxiv-general channel.
                    </li>
                    <li>
                      <strong>Request an Invite:</strong> Post in #ffxiv-invites with your character name, and a Community Manager will send you an in-game invite to our Free Company.
                    </li>
                  </ol>
                </div>

                <div className="bg-background p-8 rounded-lg border border-primary/30">
                  <h2 className="text-2xl font-bold text-primary mb-4">Free Company Information</h2>
                  <ul className="space-y-3 list-disc list-inside">
                    <li><strong>Server:</strong> Thunderfoot (North American Data Center)</li>
                    <li><strong>Free Company Name:</strong> Pandamonium</li>
                    <li><strong>Focus:</strong> Casual to mid-core raiding, social events, and community building</li>
                    <li><strong>Requirements:</strong> Be respectful, follow our community values, and have fun!</li>
                  </ul>
                </div>

                <div className="bg-background p-8 rounded-lg border border-primary/30">
                  <h2 className="text-2xl font-bold text-primary mb-4">What We Offer</h2>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Regular raid groups and dungeon runs</li>
                    <li>Crafting and gathering support</li>
                    <li>Social events and community activities</li>
                    <li>Mentorship for new players</li>
                    <li>A drama-free, inclusive community</li>
                  </ul>
                </div>

                <div className="bg-background p-8 rounded-lg border border-primary/30">
                  <h2 className="text-2xl font-bold text-primary mb-4">Questions?</h2>
                  <p>
                    Join our Discord and ask in the #ffxiv-general channel, or reach out to any of our FFXIV officers. We're here to help!
                  </p>
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
