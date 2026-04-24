import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

interface ChapterSection {
  title: string;
  content?: string | React.ReactNode;
  subsections?: Array<{ subtitle: string; text: string | React.ReactNode }>;
}

const charterSections: ChapterSection[] = [
  {
    title: "Mission Statement",
    content:
      "Pandamonium is a member-driven gaming community guided by core values of inclusivity, equity, and accountability. Our mission is to foster a safe and drama-free environment where gamers can forge lasting connections while treating each other with respect.",
  },
  {
    title: "Demographics",
    content: (
      <>
        <strong>Community Members:</strong> 300+<br />
        <strong>Average Age:</strong> 30s - 50s<br />
        <strong>Age Span:</strong> 18 to 76 years old<br />
        <strong>Year Established:</strong> 2004<br />
        <br />
        Our player base is primarily located across North America (Eastern, Central, Mountain, and Pacific time zones), though players from all time zones are welcome.
      </>
    ),
  },
  {
    title: "Membership Criteria",
    content: (
      <>
        Applications are reviewed by the entire community and decisions are made through consensus. Applicants must be at least 18 years of age to join Pandamonium. By submitting an application, you confirm that you meet this age requirement. No exceptions will be made. We have a zero-tolerance policy for bigoted, racist, homophobic, transphobic, xenophobic, or misogynistic behavior. Such behavior is incompatible with the community's values.
        <br />
        <br />
        <em>"There are no exceptions to the rule that everybody likes to be an exception to the rule." - Charles Osgood</em>
      </>
    ),
  },
  {
    title: "Diversity",
    content: (
      <>
        Within Pandamonium, our strength lies in our diversity. Our membership includes individuals from various backgrounds, including differences in race, age, gender, religion, neurodivergence, and sexual orientation. We welcome everyone except those inclined toward bigotry, racism, homophobia, transphobia, xenophobia, or misogyny. If you harbor such behavior, this isn't the community for you.
        <br />
        <br />
        <em>"Strength lies in differences, not in similarities." - Stephen Covey</em>
      </>
    ),
  },
  {
    title: "Conduct",
    content: (
      <>
        We hold ourselves to a high standard. Pandamonium members are expected to conduct themselves with honor and respect. Inflammatory or insulting comments, as well as rude or petty behavior, have no place in-game or on Discord. All members must adhere to the game's Terms of Service and Rules of Conduct at all times. Specifically, the use of third-party hacks or cheats is strictly prohibited, including unauthorized third-party tools. Violation of this rule will result in immediate removal from our community. Members are encouraged to report any observed violations to the Community Managers by opening a ticket, ensuring our community remains a safe and respectful space for all.
        <br />
        <br />
        <em>"There can be no friendship without confidence, and no confidence without integrity." - Samuel Johnson</em>
      </>
    ),
  },
  {
    title: "Commitment",
    content: (
      <>
        While gaming is our passion, real life takes precedence. We respect each other's situations and emergencies. However, we also value commitment. Before agreeing to attend an event, consider whether you can fulfill the commitment. Once committed, show up on time and prepared. If unforeseen circumstances arise, communicate promptly with the event leader.
        <br />
        <br />
        <em>"Unless commitment is made, there are only promises and hopes; but no plans." - Peter F. Drucker</em>
      </>
    ),
  },
  {
    title: "Loyalty",
    content: (
      <>
        In Pandamonium, loyalty binds us together. Every member is expected to abide by this Charter. We encourage you to invite other players whom you believe will enhance our community to submit an application via our Discord.
        <br />
        <br />
        <em>"The greater the loyalty of a group toward the group, the greater is the motivation among the members to achieve the goals of the group, and the greater the probability that the group will achieve its goals." - Rensis Likert</em>
      </>
    ),
  },
  {
    title: "Communication Channels",
    content: (
      <>
        This website serves as a valuable recruitment tool and provides essential information about Pandamonium, but Discord is where the magic happens! It is our central hub for announcements, discussions, upcoming events, and camaraderie. Stay informed by actively participating in voice and text chat, checking announcements, and joining conversations. Share your knowledge and experiences—it's what makes Pandamonium thrive.
        <br />
        <br />
        <em>"Communication leads to community, that is, to understanding, intimacy and mutual valuing." - Rollo May</em>
      </>
    ),
  },
  {
    title: "Engagement",
    content: (
      <>
        Active engagement on Discord ensures you remain a member of our vibrant community. If you become inactive on Discord for an extended period, your Pandamonium membership may be subject to revocation. Leaving our Discord server indicates your departure from the community. To rejoin, you must submit a new application. Please be aware that repeated departures (whether due to inactivity or personal choice) may impact future re-entry. Remember, our collective strength thrives on shared experiences and connections. Let's keep the conversations alive on Discord!
        <br />
        <br />
        <em>"There is no power for change greater than a community discovering what it cares about." - Margaret J. Wheatley</em>
      </>
    ),
  },
  {
    title: "Decision-Making and Leadership Development",
    content: (
      <>
        In Pandamonium, our leadership team plays a crucial role in shaping the community's direction. Comprising Officers and Community Managers, we work collaboratively to ensure community success through regular Discord communications, periodic leadership meetings, and ad-hoc town halls. We prioritize transparency, actively seek diverse perspectives, and focus on fostering a drama-free environment.
        <br />
        <br />
        But we recognize that leadership isn't static—it's dynamic and ever-evolving. We actively encourage and support the growth of potential new leaders within our ranks. Whether you're a seasoned member or a fresh face, there's always room to step up and contribute. We are all volunteers, driven by passion and commitment. As circumstances change, we need individuals who are willing to move into leadership roles, filling gaps and ensuring continuity. Whether it's organizing events, moderating discussions, or spearheading initiatives, there's a place for you to make a difference. Speak to one of the Community Managers if you would like to learn more.
        <br />
        <br />
        <em>"Leadership is not a person or a position. It is a complex moral relationship between people based on trust, obligation, commitment, emotion, and a shared vision of the good." - Piyushi Dhir</em>
      </>
    ),
  },
  {
    title: "Events",
    content: (
      <>
        Within Pandamonium, we thrive on member-driven initiatives. Whether you're passionate about in-game adventures (e.g., raids, dungeons, quests, tournaments, loot crawls) or want to explore non-gaming activities (e.g., movie nights, art showcases, charity drives), you have the power to shape our events. If you're not sure how to get started, speak to any member of the leadership team for guidance. Collaborate with like-minded individuals on event planning, promotion, and execution.
        <br />
        <br />
        <em>"They'll tell you you're too loud—that you need to wait your turn and ask the right people for permission. Do it anyway." - Alexandria Ocasio-Cortez</em>
      </>
    ),
  },
  {
    title: "Feedback",
    content: (
      <>
        In Pandamonium, we value input. There are multiple channels where you can provide feedback, suggestions, and express any concerns. Within Discord there is the option to open a ticket to communicate privately with our Community Managers. Members are encouraged to share ideas for improving our community, support the initiatives they believe in, and engage in constructive conversations with fellow members. In the Apprentice Review section, we evaluate individuals who are up for promotion to Member status. Bi-annual town halls occur, where all community members can engage live with the leadership team. Your insights matter—help us make informed decisions.
        <br />
        <br />
        <em>"We all need people who will give us feedback. That's how we improve." - Bill Gates</em>
      </>
    ),
  },
  {
    title: "Live Streaming",
    content: (
      <>
        If you're interested in live streaming or recording in-game content with other community members, permission is essential. Obtain consent from those sharing voice channels or participating in the same in-game group. When planning community events for live streaming or recording, clearly indicate whether the content will be permanently saved on platforms like Twitch or YouTube. Transparency ensures a positive experience for all.
        <br />
        <br />
        <em>"Privacy matters; privacy is what allows us to determine who we are and who we want to be." - Edward Snowden</em>
      </>
    ),
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
      {
        subtitle: "Community Manager",
        text: "A Community Manager is instrumental in shaping the community's direction and growth. They are responsible for coordinating policy creation, enforcing these policies, setting community goals, and overseeing the selection of new chapters and leadership team members. Our Community Managers, many of whom have been steering the community since its inception in 2004, continue to foster an environment that encourages collaboration, inclusivity, and fun in gaming.",
      },
    ],
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
        <section className="bg-card border-b border-primary/30 py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              CHARTER
            </h1>
            <p className="text-lg text-foreground/80">
              Our community's guiding principles and structure
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl">
            <div className="space-y-12">
              {charterSections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    {section.title}
                  </h2>

                  {section.content && (
                    <div className="text-foreground/80 leading-relaxed">
                      {section.content}
                    </div>
                  )}

                  {section.subsections && (
                    <div className="space-y-6 mt-6">
                      {section.subsections.map((subsection, subIdx) => (
                        <div key={subIdx} className="space-y-2">
                          <h3 className="text-lg font-semibold text-primary">
                            {subsection.subtitle}
                          </h3>
                          <div className="text-foreground/80 leading-relaxed">
                            {subsection.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
