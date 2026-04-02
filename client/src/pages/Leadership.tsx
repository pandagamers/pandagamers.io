import Header from "@/components/Header";
import Footer from "@/components/Footer";

const leadershipTeam = [
  {
    role: "Community Managers",
    members: [
      { name: "Alianin Corvus", discord: "alianin" },
      { name: "Amadeus Vrenn", discord: "amawyn1" },
      { name: "Kaisa Connor", discord: "kaisa" },
      { name: "Wymsical", discord: "wymsical1" },
    ],
  },
  {
    role: "Dune: Awakening",
    members: [
      { name: "asnarkyshark", discord: "asnarkyshark" },
      { name: "Bramble Wise", discord: "thorn.hobbs" },
      { name: "phot", discord: "phot." },
      { name: "Saint", discord: "frznsaint14" },
    ],
  },
  {
    role: "Final Fantasy XIV Online",
    members: [
      { name: "Adaire Thelmont", discord: "soiyer" },
      { name: "Izzy Lazuli", discord: "tempotantrums" },
      { name: "Kirne Emithelum", discord: "bookslap" },
      { name: "Rowan Ashe", discord: "evcom" },
      { name: "Stellan Auturin", discord: "jaffaran" },
    ],
  },
  {
    role: "Palia",
    members: [
      { name: "Khara Emberhawk", discord: "nuime" },
      { name: "Llwyden", discord: "llwyden" },
      { name: "Ravvy", discord: "ravvyplaysgames" },
    ],
  },
  {
    role: "General Officers",
    members: [
      { name: "Detective Halflight", discord: ".halflight" },
    ],
  },
];

export default function Leadership() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              LEADERSHIP
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              Meet the dedicated members who help guide and support our community. Our leadership team is committed to fostering a safe, inclusive, and drama-free environment.
            </p>
          </div>
        </section>

        {/* Leadership Teams */}
        <section className="py-16 md:py-24">
          <div className="container max-w-5xl">
            <div className="space-y-16">
              {leadershipTeam.map((team, index) => (
                <div key={index}>
                  <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 text-center uppercase">
                    {team.role}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.members.map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/60 transition-all hover:shadow-lg"
                      >
                        <h3 className="text-lg font-bold text-primary mb-2">{member.name}</h3>
                        <p className="text-foreground/70 text-sm">
                          Discord: <span className="text-primary font-mono">{member.discord}</span>
                        </p>
                      </div>
                    ))}
                  </div>

                  {index < leadershipTeam.length - 1 && (
                    <div className="mt-12 h-px bg-primary/20"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-16 p-8 bg-card rounded-lg border border-primary/30 text-center">
              <p className="text-foreground/80">
                Have questions for leadership? Use <span className="text-primary font-mono">#open-a-ticket</span> on Discord to reach the Community Managers.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
