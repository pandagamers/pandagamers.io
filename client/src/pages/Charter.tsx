import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const charterSections = [
  {
    title: "Mission Statement",
    content:
      "Pandamonium is a member-driven gaming community guided by core values of inclusivity, equity, and accountability. Our mission is to foster a safe and drama-free environment where gamers can forge lasting connections while treating each other with respect. We continue to foster an environment that encourages collaboration, inclusivity, and fun in gaming.",
  },
  {
    title: "Demographics",
    content:
      "Average Age: 30s - 50s | Age Span: 18 to 76 years old | Primary Location: North America | Year Established: 2004",
  },
  {
    title: "Membership Criteria",
    content:
      "Applications are reviewed by the entire community and decisions are made through consensus. Applicants must be at least 18 years of age to join Pandamonium. We have a zero-tolerance policy for bigoted, racist, homophobic, transphobic, xenophobic, or misogynistic behavior.",
  },
  {
    title: "Diversity",
    content:
      "Within Pandamonium, our strength lies in our diversity. Our membership includes individuals from various backgrounds, including differences in race, age, gender, religion, neurodivergence, and sexual orientation. We welcome everyone except those inclined toward bigotry, racism, homophobia, transphobia, xenophobia, or misogyny.",
  },
  {
    title: "Conduct",
    content:
      "We hold ourselves to a high standard. Pandamonium members are expected to conduct themselves with honor and respect. Inflammatory or insulting comments, as well as rude or petty behavior, have no place in-game or on Discord. All members must adhere to the game's Terms of Service and Rules of Conduct at all times.",
  },
  {
    title: "Commitment",
    content:
      "While gaming is our passion, real life takes precedence. We respect each other's situations and emergencies. However, we also value commitment. Before agreeing to attend an event, consider whether you can fulfill the commitment. Once committed, show up on time and prepared.",
  },
  {
    title: "Loyalty",
    content:
      "In Pandamonium, loyalty binds us together. Every member is expected to abide by this Charter. We encourage you to invite other players whom you believe will enhance our community to submit an application via our Discord.",
  },
  {
    title: "Communication Channels",
    content:
      "Our website serves as a valuable recruitment tool, providing essential information about Pandamonium. Discord is where the magic happens! It is our central hub for announcements, discussions, upcoming events, and camaraderie.",
  },
  {
    title: "Engagement",
    content:
      "Active engagement on Discord ensures you remain a member of our vibrant community. If you become inactive on Discord for an extended period, your Pandamonium membership may be subject to revocation. Leaving our Discord server indicates your departure from the community.",
  },
  {
    title: "Decision-Making and Leadership",
    content:
      "In Pandamonium, our leadership team plays a crucial role in shaping the community's direction. We prioritize transparency, actively seek diverse perspectives, and focus on fostering a drama-free environment. We actively encourage and support the growth of potential new leaders within our ranks.",
  },
  {
    title: "Events",
    content:
      "Within Pandamonium, we thrive on member-driven initiatives. Whether you are passionate about in-game adventures or want to explore non-gaming activities, you have the power to shape our events. Collaborate with like-minded individuals on event planning, promotion, and execution.",
  },
  {
    title: "Feedback",
    content:
      "In Pandamonium, we value input. There are multiple channels where you can provide feedback, suggestions, and express any concerns. Your insights matter—help us make informed decisions.",
  },
];

export default function Charter() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              CHARTER
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              Our community is built on core values of inclusivity, equity, and accountability. This charter outlines the principles that guide Pandamonium.
            </p>
          </div>
        </section>

        {/* Charter Content */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="space-y-12">
              {charterSections.map((section, index) => (
                <div key={index} className="pb-12 border-b border-primary/20 last:border-b-0">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {section.title}
                  </h2>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-card rounded-lg border border-primary/30 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Join?</h3>
              <p className="text-foreground/80 mb-6">
                If you believe Pandamonium is a good fit for you, we encourage you to apply through our Discord server.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply">
                  <a className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase rounded transition-colors">
                    Learn About Applying
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
