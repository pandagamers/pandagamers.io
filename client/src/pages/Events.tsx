import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users } from "lucide-react";

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              EVENTS & CALENDAR
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              Stay up to date with Pandamonium community events, raids, dungeons, and gatherings. Check our calendar for upcoming activities across all our games.
            </p>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="p-6 bg-card rounded-lg border border-primary/30 text-center">
                <div className="flex justify-center mb-4">
                  <Calendar className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Community Events</h3>
                <p className="text-foreground/70 text-sm">
                  Guild raids, dungeons, and organized community activities across all games.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-primary/30 text-center">
                <div className="flex justify-center mb-4">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Real-Time Updates</h3>
                <p className="text-foreground/70 text-sm">
                  Calendar updates automatically as events are added and modified by leadership.
                </p>
              </div>

              <div className="p-6 bg-card rounded-lg border border-primary/30 text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Join the Fun</h3>
                <p className="text-foreground/70 text-sm">
                  Visit our Discord to RSVP, ask questions, or coordinate with other members.
                </p>
              </div>
            </div>

            {/* Embedded Calendar */}
            <div className="bg-card rounded-lg border border-primary/30 overflow-hidden shadow-lg">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Pandamonium Community Calendar</h2>
                
                <div className="w-full overflow-x-auto">
                  <iframe
                    src="https://calendar.google.com/calendar/embed?src=pandaguild%40pm.me&ctz=America%2FNew_York&mode=WEEK"
                    style={{
                      border: 0,
                      width: "100%",
                      height: "500px",
                      minWidth: "320px",
                    }}
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                  ></iframe>
                </div>

                <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/30">
                  <h3 className="text-lg font-bold text-primary mb-3">How to Stay Updated</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">1.</span>
                      <span>Check this calendar regularly for upcoming events and activities.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">2.</span>
                      <span>Join our Discord server to RSVP to events and coordinate with other members.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">3.</span>
                      <span>Enable notifications in Discord so you don't miss important announcements.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">4.</span>
                      <span>Have an event idea? Reach out to your chapter leaders or Community Managers.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/30 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Join the Action?</h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                Head over to our Discord to connect with other Pandamonium members, RSVP to events, and find your gaming community.
              </p>
              <a
                href="https://discord.gg/pandagamers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-primary text-background font-bold rounded hover:bg-primary/90 transition-colors"
              >
                Join Our Discord
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
