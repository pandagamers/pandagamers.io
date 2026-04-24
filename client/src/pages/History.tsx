import Header from "@/components/Header";
import Footer from "@/components/Footer";

const milestones = [
  { year: "November 2004", event: "Phantom Knights was formed on the Mistmoore server in EverQuest II." },
  { year: "October 2006", event: "First in-person gathering took place in Las Vegas, Nevada." },
  { year: "June 2007", event: "Phantom Knights dissolved on Mistmoore, and our core group continued raiding together on the Guk server in EverQuest II, laying the groundwork for what would become Pandamonium." },
  { year: "December 2011", event: "That long-standing core group formally founded Pandamonium on the Darth Bandon server in Star Wars: The Old Republic." },
  { year: "June 2012", event: "SWTOR Pandamonium moved to the Corellian Run server." },
  { year: "September 2012", event: "SWTOR Pandamonium moved to The Shadowlands server." },
  { year: "March 2014", event: "Pandamonium rebranded as a gaming community and created a WildStar chapter on the Thunderfoot realm." },
  { year: "September 2014", event: "WildStar Pandamonium moved to the Stormtalon realm." },
  { year: "October 2014", event: "WildStar Pandamonium moved to the Entity realm." },
  { year: "April 2015", event: "Created an Alliance chapter in World of Warcraft on the Proudmoore realm." },
  { year: "May 2016", event: "Created a chapter in Final Fantasy XIV Online on the Leviathan world." },
  { year: "August 2017", event: "Closed WildStar chapter due to inactivity." },
  { year: "November 2017", event: "SWTOR Pandamonium moved to the Star Forge server." },
  { year: "February 2018", event: "Created a Horde chapter in World of Warcraft on the Zul'jin realm." },
  { year: "September 2019", event: "Transitioned to using Discord as primary community communication." },
  { year: "May 2020", event: "Created a chapter in EverQuest II on the Halls of Fate server." },
  { year: "May 2021", event: "Created pre-launch chapter in New World." },
  { year: "September 2021", event: "New World Pandamonium company formed on the Mictlan server." },
  { year: "December 2021", event: "New World Pandamonium moved to the Calnagor server." },
  { year: "February 2022", event: "New World Pandamonium moved to the Orofena server." },
  { year: "November 2022", event: "Created additional New World Pandamonium company on the Amarah fresh start server." },
  { year: "April 2023", event: "New World Pandamonium moved to the Lilith (from Amarah) and Maramma (from Orofena) servers." },
  { year: "August 2023", event: "Created pre-launch chapter in Palia." },
  { year: "November 2023", event: "Palia Pandamonium converted from Pilot Chapter to Formal Chapter." },
  { year: "May 2024", event: "Closed EverQuest II and World of Warcraft chapters due to inactivity." },
  { year: "October 2024", event: "Created additional New World Pandamonium company on the Cathaysia fresh start server." },
  { year: "December 2024", event: "New World Pandamonium moved to the Maramma (from Lilith) server." },
  { year: "February 2025", event: "New World Pandamonium moved to the Hudsonland (from Cathaysia) and Valhalla (from Maramma) servers." },
  { year: "April 2025", event: "Created pre-launch chapter in Dune: Awakening on The Spiral server (Abbir sietch). Closed New World Pandamonium chapter due to inactivity." },
  { year: "October 2025", event: "Dune: Awakening converted from Pilot Chapter to Formal Chapter." },
];

export default function History() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              HISTORY
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              The history of Pandamonium is not just about one guild, but of a group of wonderful friends who have been playing together in different games and under different names for many years. Our goal is to provide a welcoming community for all, regardless of play style.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-accent transform md:-translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="space-y-12 pl-8 md:pl-0">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`md:flex md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* Content */}
                    <div className="md:w-1/2">
                      <div className="p-6 bg-card rounded-lg border border-primary/30 hover:border-primary/60 transition-colors">
                        <h3 className="text-xl font-bold text-accent mb-2">{milestone.year}</h3>
                        <p className="text-foreground/80">{milestone.event}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex md:w-0 md:justify-center md:items-center">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background absolute"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing */}
            <div className="mt-16 p-8 bg-card rounded-lg border border-primary/30 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">A Living History</h3>
              <p className="text-foreground/80 mb-6">
                From our humble beginnings in 2004 to today, Pandamonium has evolved while staying true to our core values. We are proud of our journey and excited about the future. Join us as we continue to build a welcoming, inclusive gaming community.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
