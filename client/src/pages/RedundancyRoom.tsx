export default function RedundancyRoom() {
  const trackers = [
    {
      name: "Sirris Toussaint",
      pronouns: "she/her",
      discord: "p.h.",
      avatar: "/tracker_sirris.png",
      title: "Chief Surveillance Officer, Roster Division",
      memberSince: "November 2015",
      yearsOfService: "~10 years",
      favoriteGame: "Dark Souls III",
      roast: "Spent a decade watching over this community with the same quiet intensity she brings to Dark Souls III. She survived Malenia, Nameless King, and a 300-person Discord server. Historians will argue which was harder. She will not.",
      quote: "The sky and cosmos are one.",
      quoteNote: "(We are also unsure what this means, but it felt important to include.)",
    },
    {
      name: "Bootytai Twerksalot",
      pronouns: "he/him",
      discord: "bootytai",
      avatar: "/tracker_bootytai.png",
      title: "Deputy Watcher of Activity Status, BNDY Division",
      memberSince: "April 2017",
      yearsOfService: "~8 years",
      favoriteGame: "God of War: Ragnarok",
      roast: "Brought the same relentless energy to member tracking as Kratos brings to parenting: thorough, unflinching, and somehow always aware of exactly where everyone was. He played God of War for fun. This should tell you everything you need to know.",
      quote: null,
      quoteNote: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        {/* Official Notice Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-accent/10 to-transparent border-b border-accent/30">
          <div className="container max-w-3xl text-center">
            <p className="text-accent font-space-mono text-xs uppercase tracking-[0.3em] mb-3">
              Pandamonium Official Notice
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-primary uppercase tracking-wide mb-3">
              The Redundancy Room
            </h1>
            <p className="text-accent font-space-mono text-xs uppercase tracking-[0.2em]">
              Department of Member Tracking &bull; Est. Whenever Someone Volunteered For This
            </p>
          </div>
        </section>

        {/* The Announcement */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="p-8 bg-card rounded-lg border border-accent/30 text-center">
              <p className="text-foreground/80 leading-relaxed text-base italic mb-4">
                Effective immediately, the role of Member Tracker has been eliminated following the successful deployment of PandaBot: a tireless, emotionless automaton who does not need sleep, snacks, or appreciation. PandaBot does not have feelings about this. We checked.
              </p>
              <p className="text-foreground/80 leading-relaxed text-base italic">
                We thank our outgoing Trackers for their years of dedicated service and wish them well in their next endeavors (i.e., actually playing games instead of watching other people's activity status).
              </p>
              <div className="mt-6 pt-6 border-t border-accent/20">
                <p className="text-foreground/50 text-sm font-space-mono">
                  This page exists because they asked to be immortalized on the website in a funny way.<br />
                  We are nothing if not a community that honors its commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        {/* The Plaques */}
        <section className="py-16 md:py-24">
          <div className="container max-w-5xl">
            <p className="text-center text-accent font-space-mono text-xs uppercase tracking-[0.3em] mb-12">
              In Memoriam of Their Employment
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {trackers.map((tracker) => (
                <div
                  key={tracker.discord}
                  className="relative flex flex-col bg-card rounded-lg border-2 border-accent/50 shadow-xl shadow-accent/5 overflow-hidden"
                >
                  {/* Gold top bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-accent/40 via-accent to-accent/40" />

                  {/* Retired stamp */}
                  <div className="absolute top-6 right-6 rotate-12 border-2 border-destructive/70 rounded px-2 py-0.5">
                    <span className="text-destructive font-space-mono font-bold text-xs uppercase tracking-widest">
                      Retired
                    </span>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-5 mb-6">
                      <img
                        src={tracker.avatar}
                        alt={tracker.name}
                        className="w-20 h-20 rounded-full border-2 border-accent/50 object-cover flex-shrink-0"
                      />
                      <div>
                        <h2 className="text-xl font-bold text-primary leading-tight">
                          {tracker.name}
                        </h2>
                        <p className="text-foreground/50 text-sm font-space-mono">
                          {tracker.pronouns} &bull; {tracker.discord}
                        </p>
                        <p className="text-accent text-xs font-space-mono mt-1 leading-snug">
                          {tracker.title}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                      <div className="bg-background rounded p-3 border border-primary/20">
                        <p className="text-foreground/40 text-xs uppercase tracking-wider mb-1 font-space-mono">Member Since</p>
                        <p className="text-foreground/80 font-semibold">{tracker.memberSince}</p>
                      </div>
                      <div className="bg-background rounded p-3 border border-primary/20">
                        <p className="text-foreground/40 text-xs uppercase tracking-wider mb-1 font-space-mono">Years of Service</p>
                        <p className="text-foreground/80 font-semibold">{tracker.yearsOfService}</p>
                      </div>
                      <div className="bg-background rounded p-3 border border-primary/20 col-span-2">
                        <p className="text-foreground/40 text-xs uppercase tracking-wider mb-1 font-space-mono">Favorite Game</p>
                        <p className="text-foreground/80 font-semibold">{tracker.favoriteGame}</p>
                      </div>
                    </div>

                    {/* Roast */}
                    <div className="flex-1 mb-6">
                      <p className="text-foreground/70 leading-relaxed text-sm">
                        {tracker.roast}
                      </p>
                    </div>

                    {/* Quote */}
                    {tracker.quote && (
                      <div className="pt-4 border-t border-primary/20">
                        <p className="text-primary/70 text-sm italic font-space-mono">
                          "{tracker.quote}"
                        </p>
                        {tracker.quoteNote && (
                          <p className="text-foreground/40 text-xs mt-1">{tracker.quoteNote}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Gold bottom bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-12 border-t border-primary/20">
          <div className="container max-w-2xl text-center">
            <p className="text-foreground/40 text-sm font-space-mono leading-relaxed">
              Their legacy lives on in every roster check PandaBot will silently run at 3am without complaint.<br />
              <span className="text-foreground/25">PandaBot has been informed of this page. PandaBot does not care.</span>
            </p>
            <p className="mt-6 text-foreground/20 text-xs font-space-mono">
              &copy; Pandamonium &bull; Department of Member Tracking &bull; Now Permanently Closed
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
