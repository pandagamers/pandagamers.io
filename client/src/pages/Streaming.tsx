import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Streaming() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-transparent border-b border-primary/20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary uppercase tracking-wide mb-4">
              Streaming Guidelines
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Share your gaming adventures with the public. These guidelines ensure a safe, respectful streaming environment for all members.
            </p>
          </div>
        </section>

        {/* Gradient Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            {/* Introduction */}
            <div className="mb-12 p-8 bg-card rounded-lg border border-primary/30">
              <p className="text-foreground/80 leading-relaxed">
                Across our various chapters, we have members who regularly stream and we want to give them an opportunity to share their content. Our <span className="font-mono text-primary">@PandaBot</span> bot will keep an eye on our members to see when they start streaming and will automatically let everyone know in our <span className="font-mono text-primary">#streaming</span> channel. If your streams are not being announced, be sure to connect your stream account to Discord (User Settings &gt; Connections) and then enable streamer mode (User Settings &gt; Experience &gt; Appearance &gt; Streamer Mode &gt; Enable Streamer Mode).
              </p>
            </div>

            {/* Rules Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 uppercase">Rules</h2>
              <div className="space-y-4">
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> The Conduct section of our Charter applies when streaming.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> You must block in-game guild/FC/company/community/private chat.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> You must have the permission of those sharing your voice channel and/or in-game group.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> Planned community events that will be live streamed must be advertised as such.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> If guests are invited to our Discord server, they must be at least 18 years old.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> You are allowed to use Pandamonium's logo in your stream and/or on your start/stop/pause/ads screen. They are not allowed to be modified in any way.
                  </p>
                </div>
              </div>
            </div>

            {/* Logo Usage Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 uppercase">Pandamonium Branding</h2>
              <p className="text-foreground/70 mb-8">
                Feel free to use any of these assets in your streams. Remember: they cannot be modified in any way. Click on any asset to download it.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <a
                  href="/manus-storage/pandamonium_logo_9f7b6793.png"
                  download="pandamonium_logo.png"
                  className="flex flex-col items-center p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/manus-storage/pandamonium_logo_9f7b6793.png"
                    alt="Pandamonium Logo"
                    className="w-40 h-40 object-contain mb-4"
                  />
                  <p className="text-center text-foreground/70 text-sm font-semibold">Logo</p>
                  <p className="text-center text-primary text-xs mt-2">Click to download</p>
                </a>
                <a
                  href="/manus-storage/pandamonium_icon_dc55b1a6.png"
                  download="pandamonium_icon.png"
                  className="flex flex-col items-center p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/manus-storage/pandamonium_icon_dc55b1a6.png"
                    alt="Pandamonium Icon"
                    className="w-40 h-40 object-contain mb-4"
                  />
                  <p className="text-center text-foreground/70 text-sm font-semibold">Icon</p>
                  <p className="text-center text-primary text-xs mt-2">Click to download</p>
                </a>
                <a
                  href="/manus-storage/pandamonium_text_03eeca61.png"
                  download="pandamonium_text.png"
                  className="flex flex-col items-center p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src="/manus-storage/pandamonium_text_03eeca61.png"
                    alt="Pandamonium Text"
                    className="w-40 h-40 object-contain mb-4"
                  />
                  <p className="text-center text-foreground/70 text-sm font-semibold">Text</p>
                  <p className="text-center text-primary text-xs mt-2">Click to download</p>
                </a>
              </div>
            </div>

            {/* Guidelines Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 uppercase">Guidelines & Suggestions</h2>
              <p className="text-foreground/70 mb-8 italic">
                If you decide to not follow these guidelines, you do so AT YOUR OWN RISK. The Rules above, however, are mandatory.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> Refer to people as their screen names in-game and in Discord. Do not use IRL names. If you are unsure, please ask.
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> Avoid mentioning your place of work. Try instead to reword it as the field you work in. For example, "Oh, you are an ER nurse? Cool, I used to work in the ER at the Mayo Clinic-Rochester." Instead try, "Oh, you are an ER nurse? I used to work in an emergency department also."
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> Avoid mentioning your child's/children's names (or the names of any minors in your life - nieces, nephews, grandchildren, etc.).
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> Avoid mentioning specific places you hang out (i.e., social clubs, gyms, places of worship).
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> Avoid giving out emails in stream (given that a lot of people have their full names attached to their personal email accounts).
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/70 transition-all duration-300">
                  <p className="text-foreground/80">
                    <span className="text-primary font-bold">→</span> Avoid mentioning that you can be found on personal sale sites (e.g., Etsy, Poshmark, Mecari, eBay). Names, numbers, and personal addresses are/can be attached to those or can be searched with what is given.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Message */}
            <div className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/30 text-center">
              <p className="text-lg text-foreground/80 font-semibold">
                We look forward to watching your streams!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
