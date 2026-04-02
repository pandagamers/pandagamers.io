import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gamepad2, Users, Globe } from "lucide-react";

export default function Games() {
  const games = [
    {
      title: "Dune: Awakening",
      description: "An open-world survival MMO set in the Dune universe. Build your settlement, form alliances, and explore the vast deserts of Arrakis with our community.",
      icon: "🏜️",
      features: ["Open-World Survival", "Settlement Building", "Alliances", "PvP & PvE"],
      link: "https://www.duneawakening.com/"
    },
    {
      title: "Final Fantasy XIV Online",
      description: "A massively multiplayer online role-playing game set in the world of Eorzea. Join our Free Company and experience epic raids, dungeons, and community events.",
      icon: "⚔️",
      features: ["Free Company Community", "Raid Groups", "Dungeon Runs", "Social Events"],
      link: "https://www.finalfantasyxiv.com/"
    },
    {
      title: "Palia",
      description: "A cozy community simulation game focused on relaxation and creativity. Fish, cook, decorate, and make friends in this welcoming multiplayer world.",
      icon: "🎣",
      features: ["Cozy Gameplay", "Fishing & Cooking", "Decorating", "Community Focus"],
      link: "https://www.palia.com/"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              GAMES WE PLAY
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              Pandamonium brings together gamers across multiple titles and genres. While we have organized chapters for our main games, our members also collaborate on a wide range of other games in a less formal fashion. Whether you're into epic MMORPGs or cozy community games, there's a place for you here.
            </p>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {games.map((game, index) => (
                <div
                  key={index}
                  className="bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="text-5xl mb-4">{game.icon}</div>
                  <h2 className="text-2xl font-bold text-primary mb-3">{game.title}</h2>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{game.description}</p>

                  <div className="space-y-3 mb-6">
                    <h3 className="text-sm font-bold text-accent uppercase">What We Do</h3>
                    <ul className="space-y-2">
                      {game.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded transition-colors text-sm font-semibold"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>

            {/* Discord Widget Section */}
            <div className="mt-20 pt-16 border-t border-primary/30">
              <h2 className="text-4xl font-bold text-primary mb-4 text-center">Join Our Community</h2>
              <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto mb-12">
                Connect with Pandamonium members on Discord. Whether you're looking for a raid group, casual hangout, or just want to meet fellow gamers, we've got you covered.
              </p>

              <div className="flex justify-center">
                <iframe
                  src="https://discord.com/widget?id=DISCORD_SERVER_ID&theme=dark"
                  width="350"
                  height="500"
                  allowTransparency={true}
                  frameBorder="0"
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  className="rounded-lg border border-primary/30"
                ></iframe>
              </div>

              <div className="text-center mt-8">
                <p className="text-foreground/70 mb-4">
                  Don't have Discord? Download it free and join our server.
                </p>
                <a
                  href="https://discord.gg/pandagamers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary text-background font-bold rounded hover:bg-primary/90 transition-colors"
                >
                  Join Discord Server
                </a>
              </div>
            </div>

            {/* Why Play With Us */}
            <div className="mt-20 pt-16 border-t border-primary/30">
              <h2 className="text-4xl font-bold text-primary mb-12 text-center">Why Play With Pandamonium?</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Inclusive Community</h3>
                  <p className="text-foreground/80">
                    We celebrate diversity and welcome gamers of all backgrounds, identities, and experience levels.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Gamepad2 className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Multiple Games</h3>
                  <p className="text-foreground/80">
                    From epic MMORPGs to cozy community games, we play across genres and platforms.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Globe className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">Drama-Free Zone</h3>
                  <p className="text-foreground/80">
                    We maintain a zero-tolerance policy for toxicity. Gaming should be fun and welcoming for everyone.
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
