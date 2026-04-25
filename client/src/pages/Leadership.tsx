import Header from "@/components/Header";
import Footer from "@/components/Footer";

const leadershipTeam = [
  {
    role: "Community Managers",
    members: [
      { name: "Alianin Corvus", discord: "alianin", avatar: "https://cdn.discordapp.com/avatars/164765395390038016/6fc24dcfaf3282be2b981f59aaad97bf.webp?size=2048" },
      { name: "Amadeus Vrenn", discord: "amawyn1", avatar: "https://cdn.discordapp.com/avatars/205111723189862401/ee36727e2e073e822a2ce4fa9da9991d.webp?size=2048" },
      { name: "Kaisa Connor", discord: "kaisa", avatar: "https://cdn.discordapp.com/avatars/204970523518566400/bb3e445be843b289537edbd70a3c1ed7.webp?size=2048" },
      { name: "Wymsical", discord: "wymsical1", avatar: "https://cdn.discordapp.com/avatars/205107361533132810/3b9bfdb67b4f7932b003e953cc3c0330.webp?size=2048" },
    ],
  },
  {
    role: "Dune: Awakening",
    members: [
      { name: "asnarkyshark", discord: "asnarkyshark", avatar: "https://cdn.discordapp.com/avatars/324622874658865152/b450ecdc65f9fd0f4f919862be447478.webp?size=2048" },
      { name: "Bramble Wise", discord: "thorn.hobbs", avatar: "https://cdn.discordapp.com/avatars/445025398649257994/98f672e114a15ef87b511050ee89202f.webp?size=2048" },
      { name: "phot", discord: "phot.", avatar: "https://cdn.discordapp.com/avatars/249970318511177728/4dce731f73a62159d97c10122340b7cf.webp?size=2048" },
      { name: "Saint", discord: "frznsaint14", avatar: "https://cdn.discordapp.com/avatars/270224107428249601/39deb721ac44b9c80c1cd5ccf2a9cea4.webp?size=2048" },
    ],
  },
  {
    role: "Final Fantasy XIV Online",
    members: [
      { name: "Adaire Thelmont", discord: "soiyer", avatar: "https://cdn.discordapp.com/avatars/135518124630867968/f21b547424bd9adb18e9eab83f6ac528.webp?size=2048" },
      { name: "Izzy Lazuli", discord: "tempotantrums", avatar: "https://cdn.discordapp.com/avatars/169178280530804736/fbfcdc30a2da3a3517ace99c6cfb567e.webp?size=2048" },
      { name: "Kirne Emithelum", discord: "bookslap", avatar: "https://cdn.discordapp.com/avatars/113608688031236104/3428a5f1a2fae61f1a7dc6c3e06f0800.webp?size=2048" },
      { name: "Rowan Ashe", discord: "evcom", avatar: "https://cdn.discordapp.com/avatars/138788438252978176/518218044e9b139801251cebda1d0259.webp?size=2048" },
      { name: "Stellan Auturin", discord: "jaffaran", avatar: "https://cdn.discordapp.com/avatars/300062167284187138/a_511e96488a670ad3a4f7bf79b972b2bf.webp?size=2048&animated=true" },
    ],
  },
  {
    role: "Palia",
    members: [
      { name: "Khara Emberhawk", discord: "nuime", avatar: "https://cdn.discordapp.com/avatars/393911500378734602/d705f797b1cb02e17cae75ee729089a0.webp?size=2048" },
      { name: "Llwyden", discord: "llwyden", avatar: "https://cdn.discordapp.com/avatars/369961806128742403/ccc1bbb65269b9695b1d7224ba82dd9b.webp?size=2048" },
      { name: "Ravvy", discord: "ravvyplaysgames", avatar: "https://cdn.discordapp.com/avatars/186667891624640512/26dba4b6563bd833120ebe28e9988609.webp?size=2048" },
    ],
  },
  {
    role: "General Officers",
    members: [
      { name: "Detective Halflight", discord: ".halflight", avatar: "https://cdn.discordapp.com/avatars/189485183420989441/70ef8c223116ad811a6f6a8f5d80c0ef.webp?size=2048" },
    ],
  },
];

export default function Leadership() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-transparent border-b border-primary/20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary uppercase tracking-wide mb-4">
              Leadership
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Meet the dedicated members who help guide and support our community. Our leadership team is committed to fostering a safe, inclusive, and drama-free environment.
            </p>
          </div>
        </section>

        {/* Gradient Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

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
                        className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={member.avatar}
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
                Have questions for leadership? Use <a href="https://discord.com/channels/204984438596042752/985222513640497233" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-mono">#open-a-ticket</a> on Discord to reach the Community Managers.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
