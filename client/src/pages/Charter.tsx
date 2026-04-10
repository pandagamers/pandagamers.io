import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

interface ChapterSection {
  title: string;
  content: string;
  subsections?: Array<{ subtitle: string; text: string }>;
}

const charterSections: ChapterSection[] = [
  {
    title: "Mission Statement",
    content:
      "Pandamonium is a member-driven gaming community guided by core values of inclusivity, equity, and accountability. Our mission is to foster a safe and drama-free environment where gamers can forge lasting connections while treating each other with respect.",
  },
  {
    title: "Demographics",
    content:
      "Community Members: 345\nAverage Age: 30's - 50's\nAge Span: 18 to 76 years old\nPrimary Location: North America\nActive Games: Dune: Awakening, Final Fantasy XIV Online, Palia\nYear Established: 2004\n\nOur player base is primarily located across North America (Eastern, Central, Mountain, and Pacific time zones), though players from all time zones are welcome.",
  },
  {
    title: "Membership Criteria",
    content:
      "Applications are reviewed by the entire community and decisions are made through consensus. Applicants must be at least 18 years of age to join Pandamonium. By submitting an application, you confirm that you meet this age requirement. No exceptions will be made. We have a zero-tolerance policy for bigoted, racist, homophobic, transphobic, xenophobic, or misogynistic behavior. Such behavior is incompatible with the community's values.\n\n\"There are no exceptions to the rule that everybody likes to be an exception to the rule.\" - Charles Osgood",
  },
  {
    title: "Diversity",
    content:
      "Within Pandamonium, our strength lies in our diversity. Our membership includes individuals from various backgrounds, including differences in race, age, gender, religion, neurodivergence, and sexual orientation. We welcome everyone except those inclined toward bigotry, racism, homophobia, transphobia, xenophobia, or misogyny. If you harbor such behavior, this isn't the community for you.\n\n\"Strength lies in differences, not in similarities.\" - Stephen Covey",
  },
  {
    title: "Conduct",
    content:
      "We hold ourselves to a high standard. Pandamonium members are expected to conduct themselves with honor and respect. Inflammatory or insulting comments, as well as rude or petty behavior, have no place in-game or on Discord. All members must adhere to the game's Terms of Service and Rules of Conduct at all times. Specifically, the use of third-party hacks or cheats is strictly prohibited, including unauthorized third-party tools. Violation of this rule will result in immediate removal from our community. Members are encouraged to report any observed violations to the leadership team (#open-a-ticket), ensuring our community remains a safe and respectful space for all.\n\n\"There can be no friendship without confidence, and no confidence without integrity.\" - Samuel Johnson",
  },
  {
    title: "Commitment",
    content:
      "While gaming is our passion, real life takes precedence. We respect each other's situations and emergencies. However, we also value commitment. Before agreeing to attend an event, consider whether you can fulfill the commitment. Once committed, show up on time and prepared. If unforeseen circumstances arise, communicate promptly with the event leader.\n\n\"Unless commitment is made, there are only promises and hopes; but no plans.\" - Peter F. Drucker",
  },
  {
    title: "Loyalty",
    content:
      "In Pandamonium, loyalty binds us together. Every member is expected to abide by this Charter. We encourage you to invite other players whom you believe will enhance our community to submit an application via our Discord.\n\n\"The greater the loyalty of a group toward the group, the greater is the motivation among the members to achieve the goals of the group, and the greater the probability that the group will achieve its goals.\" - Rensis Likert",
  },
  {
    title: "Communication Channels",
    content:
      "Our website serves as a valuable recruitment tool, providing essential information about Pandamonium. Discord is where the magic happens! It is our central hub for announcements, discussions, upcoming events, and camaraderie. Stay informed by actively participating in voice and text chat, checking announcements, and joining conversations. Share your knowledge and experiences—it's what makes Pandamonium thrive.\n\n\"Communication leads to community, that is, to understanding, intimacy and mutual valuing.\" - Rollo May",
  },
  {
    title: "Engagement",
    content:
      "Active engagement on Discord ensures you remain a member of our vibrant community. If you become inactive on Discord for an extended period, your Pandamonium membership may be subject to revocation. Leaving our Discord server indicates your departure from the community. To rejoin, you must submit a new application. Please be aware that repeated departures (whether due to inactivity or personal choice) may impact future re-entry. Remember, our collective strength thrives on shared experiences and connections. Let's keep the conversations alive on Discord!\n\n\"There is no power for change greater than a community discovering what it cares about.\" - Margaret J. Wheatley",
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
  {
    title: "Live Streaming",
    content:
      "If you're interested in live streaming or recording in-game content with other community members, permission is essential. Obtain consent from those sharing voice channels or participating in the same in-game group. When planning community events for live streaming or recording, clearly indicate whether the content will be permanently saved on platforms like Twitch or YouTube. Transparency ensures a positive experience for all.\n\n\"Privacy matters; privacy is what allows us to determine who we are and who we want to be.\" - Edward Snowden",
  },
  {
    title: "Ranks",
    content: "",
    subsections: [
      {
        subtitle: "Apprentice",
        text: "An Apprentice is an individual who has applied for membership through the required channels, has agreed to abide by the published community charter, and has been welcomed into Pandamonium for a trial period during which time the Apprentice will be evaluated for compatibility and integrity. Apprentices may participate in all events for which they are eligible and may engage in conversation across all Discord channels to which they have access (note that while being active on Discord is encouraged for all community members, it is particularly important during the apprenticeship period because the community needs to determine whether the individual is a good fit). An Apprentice may be promoted to full membership upon recommendation by any Member or Senior Member and after a period of no less (though typically longer) than 30 days.",
      },
      {
        subtitle: "Member",
        text: "A Member is an individual who has completed the apprenticeship phase and has been approved for full membership by the leadership team. If a Member leaves the Pandamonium Discord server they must reapply for membership should they wish to return to the community.",
      },
      {
        subtitle: "Senior Member",
        text: "A Senior Member is an esteemed member who has demonstrated long-standing commitment and dedication to the community. Though the bestowing of this rank is sometimes subjective and dealt with on a case-by-case basis, the general guidelines include being a community member for 18+ months and generally active in voice and text chat on Pandamonium's Discord server. If a Senior Member leaves the Pandamonium Discord server, that is reflective of a decision to leave the community and they must reapply for membership should they wish to return.",
      },
      {
        subtitle: "Officer",
        text: "An Officer is an active participant within their Formal Chapter or the community generally. They are involved in community oversight and policy implementation. Though specific duties vary from person to person and chapter to chapter, they may include inviting and welcoming new apprentices, assisting members with general information, providing valuable and significant content to our Discord, and creating a positive environment in-game and on Discord. Officers are selected on an as-needed basis.",
      },
    ],
  },
  {
    title: "Community Manager",
    content:
      "A Community Manager is instrumental in shaping the community's direction and growth. They are responsible for coordinating policy creation, enforcing these policies, setting community goals, and overseeing the selection of new chapters and leadership team members. Our Community Managers, many of whom have been steering the community since its inception in 2004, continue to foster an environment that encourages collaboration, inclusivity, and fun in gaming.",
  },
  {
    title: "Chapters",
    content: "",
    subsections: [
      {
        subtitle: "Formal Chapter",
        text: "A Formal Chapter is a game in which Pandamonium has an active presence. It has the full use of resources within our gaming community, including recruitment, leadership manpower, and more robust Discord channels to facilitate its growth and prosperity. A game becomes a Formal Chapter if there is sufficient community interest, suitable individuals willing to accept Officer roles, and the leadership team agrees with its transition.\n\nWe currently have three Formal Chapters: Dune: Awakening, Final Fantasy XIV Online, and Palia.",
      },
      {
        subtitle: "Pilot Chapter",
        text: "A Pilot Chapter is a game that Pandamonium is testing out to see if there is enough community interest to sustain a Formal Chapter. Typically, it is formed at game release. It does not have a standard leadership structure like a Formal Chapter. Rather, existing leadership team members and/or certain longstanding members take on the role of mentors to get things organized and vet potential future Officers. Applications through a Pilot Chapter are allowed and a Pilot Chapter can be converted to a Formal Chapter at any time once it has its own self-sustaining/non-transitional officer team and a reasonable number of active members. Alternatively, a Pilot Chapter can be closed if it is deemed to be a failed experiment.\n\nWe currently have no Pilot Chapters.",
      },
      {
        subtitle: "Non-Chapters",
        text: "Any Senior Member may create an in-game community where there is not currently a Formal or Pilot Chapter. Only current community members can be invited to join. While these may not have the structured leadership or extensive resources of Formal Chapters, they are built on active engagement, dedication, and the shared values of our community (e.g., inclusivity, respect, drama-free environment).\n\nBe aware that by creating an in-game community, you're taking on a commitment. Starting one and then disappearing isn't acceptable. We expect active engagement and dedication. Life happens, circumstances change, and interests shift. If you can no longer manage it, you must first assign leadership to another active Senior Member and ensure a smooth transition. If no one else steps up or is available, you must disband the in-game community.",
      },
    ],
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
                  {section.content && (
                    <p className="text-foreground/80 text-lg leading-relaxed whitespace-pre-wrap">
                      {section.content}
                    </p>
                  )}
                  {section.subsections && (
                    <div className="space-y-6 mt-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="text-xl font-bold text-accent mb-2">
                            {subsection.subtitle}
                          </h3>
                          <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                            {subsection.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
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
