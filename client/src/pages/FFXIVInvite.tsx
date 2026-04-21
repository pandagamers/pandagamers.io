import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function FFXIVInvite() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-card border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              FFXIV IN-GAME FC INVITE
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              Once you've been approved on Discord, here's how to join the Pandamonium Free Company in-game.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            {/* Main Heading */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center uppercase tracking-wide">
                How to Join the FFXIV FC In-Game Once Approved on Discord
              </h2>
            </div>

            {/* FROM FC HOUSE Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-accent mb-8 uppercase tracking-wide">From FC House</h3>
              <div className="bg-card rounded-lg border border-primary/30 p-8 mb-8">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Visit the Pandamonium Free Company house on the Mist (Large) ward. Once there, you can interact with the estate profile to view company information and submit an application to join.
                </p>
                <div className="bg-background/50 p-6 rounded border border-primary/20 mb-6">
                  <p className="text-sm text-foreground/70 font-semibold mb-3">FC House Location:</p>
                  <p className="text-foreground/80 font-mono">Plot 32, 25th Ward, Mist (Large)</p>
                </div>
                <p className="text-foreground/70 text-sm">
                  <strong>Steps:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 text-foreground/80 text-sm mt-3 ml-2">
                  <li>Travel to the Mist housing district</li>
                  <li>Navigate to the 25th Ward</li>
                  <li>Find Plot 32 (Pandamonium FC House)</li>
                  <li>Click on the estate profile to view company details</li>
                  <li>Submit your application to join</li>
                </ol>
              </div>
            </div>

            {/* THROUGH PLAYER SEARCH Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-accent mb-8 uppercase tracking-wide">Through Player Search</h3>
              <div className="bg-card rounded-lg border border-primary/30 p-8">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  You can also search for the Pandamonium Free Company directly through the in-game Player Search interface.
                </p>
                <div className="bg-background/50 p-6 rounded border border-primary/20 mb-6">
                  <p className="text-sm text-foreground/70 font-semibold mb-3">Search Details:</p>
                  <p className="text-foreground/80 font-mono">Company Name: PANDAMONIUM</p>
                  <p className="text-foreground/80 font-mono">Server: Thunderfoot</p>
                </div>
                <p className="text-foreground/70 text-sm">
                  <strong>Steps:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 text-foreground/80 text-sm mt-3 ml-2">
                  <li>Open the Player Search interface in-game</li>
                  <li>Navigate to the Company Search tab</li>
                  <li>Search for "PANDAMONIUM" or browse companies on Thunderfoot</li>
                  <li>Click on the Pandamonium company profile</li>
                  <li>Submit your application to join</li>
                </ol>
              </div>
            </div>

            {/* Leadership Info */}
            <div className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/30 text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Need Help?</h3>
              <p className="text-foreground/80 mb-4">
                A list of the current Final Fantasy XIV Online officers can be found on the{" "}
                <Link href="/leadership">
                  <a className="text-primary hover:underline font-semibold">Leadership</a>
                </Link>
                {" "}page. Feel free to reach out if you have any questions!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
