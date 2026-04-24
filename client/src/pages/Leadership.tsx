import Header from "@/components/Header";
import Footer from "@/components/Footer";

const leadershipTeam = [
  {
    role: "Community Managers",
    members: [
      { name: "Alianin Corvus", discord: "alianin", userId: "164765395390038016" },
      { name: "Amadeus Vrenn", discord: "amawyn1", userId: "205111723189862401" },
      { name: "Kaisa Connor", discord: "kaisa", userId: "204970523518566400" },
      { name: "Wymsical", discord: "wymsical1", userId: "205107361533132810" },
    ],
  },
  {
    role: "Dune: Awakening",
    members: [
      { name: "asnarkyshark", discord: "asnarkyshark", userId: "324622874658865152" },
      { name: "Bramble Wise", discord: "thorn.hobbs", userId: "445025398649257994" },
      { name: "phot", discord: "phot.", userId: "249970318511177728" },
      { name: "Saint", discord: "frznsaint14", userId: "270224107428249601" },
    ],
  },
  {
    role: "Final Fantasy XIV Online",
    members: [
      { name: "Adaire Thelmont", discord: "soiyer", userId: "135518124630867968" },
      { name: "Izzy Lazuli", discord: "tempotantrums", userId: "169178280530804736" },
      { name: "Kirne Emithelum", discord: "bookslap", userId: "113608688031236104" },
      { name: "Rowan Ashe", discord: "evcom", userId: "138788438252978176" },
      { name: "Stellan Auturin", discord: "jaffaran", userId: "300062167284187138" },
    ],
  },
  {
    role: "Palia",
    members: [
      { name: "Khara Emberhawk", discord: "nuime", userId: "393911500378734602" },
      { name: "Llwyden", discord: "llwyden", userId: "369961806128742403" },
      { name: "Ravvy", discord: "ravvyplaysgames", userId: "186667891624640512" },
    ],
  },
  {
    role: "General Officers",
    members: [
      { name: "Detective Halflight", discord: ".halflight", userId: "189485183420989441" },
    ],
  },
];

const getDiscordAvatarUrl = (userId: string) => {
  // Use default Discord avatar based on user ID modulo 5
  const avatarIndex = parseInt(userId) % 5;
  return `https://cdn.discordapp.com/embed/avatars/${avatarIndex}.png`;
};

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
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={getDiscordAvatarUrl(member.userId)}
                            alt={member.name}
                            className="w-12 h-12 rounded-full border border-primary/30"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                        </div>
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
