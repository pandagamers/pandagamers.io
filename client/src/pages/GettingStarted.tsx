import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Section {
  title: string;
  content: React.ReactNode;
}

interface ChapterSection {
  name: string;
  sections: Section[];
}

const genericSections: Section[] = [
  {
    title: "Channels & Roles",
    content: (
      <>
        To ensure you don't get misgendered, if you haven't already please select your pronouns in the <em>Channels & Roles</em> section, right at the top of the Panda channels list. You should also select the games you play, the events you'd like to be notified of, and the channels you'd like to follow. You can make changes to these selections at any time.
      </>
    ),
  },
  {
    title: "Discord Introduction",
    content: (
      <>
        The Pandamonium Discord server is our central hub for announcements, discussions, upcoming events, and camaraderie. Stay informed by actively participating in voice and text chat, checking announcements, and joining conversations. Share your knowledge and experiences—it's what makes Pandamonium thrive. Active engagement on Discord ensures you remain a member of our vibrant community. We would encourage you to download the Discord application if you have a smartphone/device and send a message in the <strong>Introductions</strong> channel so your fellow community members can get to know you.
      </>
    ),
  },
  {
    title: "Apprenticeship",
    content: (
      <>
        A typical apprenticeship period lasts for a minimum of 30 days. During that time the Pandamonium community will be evaluating you for compatibility and integrity through Discord, in-game chat, and community events. Membership is decided by community vote—this is our opportunity to get to know each other, so it's important to interact with other members during this time. Because the quality of in-game communication can vary, we definitely recommend engaging on Discord to reach the most Pandas!
        <br />
        <br />
        <strong>Discord Engagement During Apprenticeship:</strong> Your level of engagement and participation during your first few weeks is important. We're all here to have fun and build connections—if you're deemed inactive or disengaged during your apprenticeship while we're trying to get to know you (and vice versa), you likely won't progress past this stage. But remember, this is meant to be fun and positive, not stressful. We're looking for people who are genuinely interested in being part of our community, not perfect participation.
      </>
    ),
  },
  {
    title: "Creating Events",
    content: (
      <>
        Once you have applied and been accepted as an apprentice, you can create events in our Discord server. Go to <a href="https://sesh.fyi/dashboard/204984438596042752" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Sesh</a>, authorize your Discord, and click Create Event. Events are a great way to bring the community together for raids, dungeons, social hangouts, and more. If you have an event idea, create it—people will come!
      </>
    ),
  },
  {
    title: "Questions?",
    content: (
      <>
        If you ever have any questions, you can always <a href="https://discord.com/channels/204984438596042752/985222513640497233" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">#open-a-ticket</a>.
      </>
    ),
  },
];

const chapterSections: ChapterSection[] = [
  {
    name: "Dune: Awakening",
    sections: [
      {
        title: "Company Invite",
        content: (
          <>
            Thank you for choosing us as your Dune: Awakening community on <em>The Spiral</em> world. You can get your toon invited in-game by posting a request in <strong>Pandamonium › 💬 Guild Invites</strong>. Be aware that we have two in-game guilds: Pandamonium (Atreides) and Pandaloons (Harkonnen). Be sure to specify which guild you are seeking an invite to when you post your request. If you would like to build your base on the same sietch as Panda, we're on <em>Abbir</em>. The primary Dune chat post can be found here: <strong>Pandamonium › 💬 Dune Chat</strong>.
          </>
        ),
      },
      {
        title: "Group Activities",
        content: (
          <>
            If you're interested in group activities once the game launches, keep an eye on the <strong>Pandamonium › 📅 Dune Events</strong> channel.
          </>
        ),
      },
    ],
  },
  {
    name: "Final Fantasy XIV Online",
    sections: [
      {
        title: "FC Invite",
        content: (
          <>
            To get a toon invited to the FC, you can submit an application by clicking on the placard outside the FC house, or connecting with one of the FFXIV Chapter Officers. <strong>Note: Submitting an application via the placard will allow us to auto-accept you as soon as an officer is available. This is generally the most efficient option. Keep in mind that for any FC invitation your character must be located on Leviathan and it cannot be a trial account.</strong> The FC house is located at La Noscea, Mist, Ward 25, Plot 32.
            <br />
            <br />
            If you prefer to connect with one of the officers directly, you can find them by using the Player Search option via your in-game Social menu to search for their characters by name. Your FFXIV Chapter Officers are: <strong>Adaire Thelmont</strong>, <strong>Kirne Emithelum</strong>, <strong>Rowan Ashe</strong>, <strong>Stellan Auturin</strong>, or <strong>Tempo Tantrum</strong>. You can locate an officer by using the Player Search option via your in-game Social Menu to search for their character by name. Right click their name in the player search results and select either "Send Tell" to message them directly or "View Company Profile" to open a new window with information about the FC and an option to submit an FC application. Submitting an application via this Company Profile will allow us to auto-accept you as soon as an officer is available. <strong>Note: You can only locate a player if they are currently on-line, so you might have to search for more than one officer. If no officers are available, please make use of the placard outside the FC house.</strong>
            <br />
            <br />
            Here is a <a href="#" className="text-primary hover:underline font-semibold">screenshot guide</a> on how to apply through the FC house or Player Search.
          </>
        ),
      },
      {
        title: "Group Activities",
        content: (
          <>
            If you're interested in group activities, keep an eye on the <strong>Pandamonium › 📅 Events</strong> channel.
          </>
        ),
      },
    ],
  },
  {
    name: "Palia",
    sections: [
      {
        title: "Community Invite",
        content: (
          <>
            Thank you for choosing us as your Palia community. You can get your toon invited in-game by posting a request in <strong>Pandamonium › 💬 Community Invites and Friend Re...</strong> Be sure you are not a member of another in-game community before posting or the invite will not go through.
          </>
        ),
      },
      {
        title: "Group Activities",
        content: (
          <>
            If you're interested in group activities, keep an eye on the <strong>Pandamonium › 📅 Events</strong> channel.
          </>
        ),
      },
    ],
  },
];

function GenericSection({ section }: { section: Section }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-primary mb-3">{section.title}</h3>
      <p className="text-foreground/80 leading-relaxed">{section.content}</p>
    </div>
  );
}

function ChapterAccordion({ chapter }: { chapter: ChapterSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-primary/30 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/10 transition-colors text-left"
      >
        <h3 className="font-bold text-primary text-lg">{chapter.name}</h3>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-6 bg-card/50 border-t border-primary/30 space-y-6">
          {chapter.sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-primary mb-2">{section.title}</h4>
              <p className="text-foreground/80 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function GettingStarted() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              GETTING STARTED
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              Welcome to Pandamonium! Here's everything you need to know as a newly accepted apprentice.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            {/* Generic Sections */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">For All Apprentices</h2>
              {genericSections.map((section, idx) => (
                <GenericSection key={idx} section={section} />
              ))}
            </div>

            {/* Chapter-Specific Sections */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Chapter-Specific Information</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Select your chapter below to view specific onboarding information:
              </p>
              {chapterSections.map((chapter, idx) => (
                <ChapterAccordion key={idx} chapter={chapter} />
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-16 p-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/30 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Get Started?</h3>
              <p className="text-foreground/80 mb-6">
                Head over to Discord, introduce yourself, and start connecting with your fellow Pandas. We're excited to have you!
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
