import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "Can I invite friends to the Pandamonium Discord server?",
    answer: (
      <>
        Yes, you are welcome to share the server link with friends:{" "}
        <a
          href="https://discord.gg/pandagamers"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold"
        >
          https://discord.gg/pandagamers
        </a>
        . We love welcoming new people who share our values of inclusivity, equity, and accountability. Knowing that some gaming experience may require coordination with outside folks, non-members are able to join designated public channels on our server. Keep in mind that adherence to the{" "}
        <Link href="/charter">
          <a className="text-primary hover:underline font-semibold">Charter</a>
        </Link>
        {" "}is a requirement for everyone using our space, including guests.
      </>
    ),
  },
  {
    question: "Does Pandamonium have a store?",
    answer: (
      <>
        We do! We have Pandamonium-branded products available for purchase at{" "}
        <a
          href="https://pandamonium-shop.fourthwall.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold"
        >
          https://pandamonium-shop.fourthwall.com
        </a>
        . Check out our merchandise to show your Pandamonium pride!
      </>
    ),
  },
  {
    question: "What does \"member-driven\" mean?",
    answer: (
      <>
        Pandamonium's leadership team provides support and tools to ensure our gaming community is safe and healthy, but all events are led by our members. We're all gamers and adults here, and we all enjoy different aspects of the games we play. If you're looking for a specific type of event or structured play, we encourage you to be the change you want to see in the community. Our leadership team is here to support your initiatives with Discord tools and guidance to help you succeed.
      </>
    ),
  },
  {
    question: "How do I create events for the community to participate in?",
    answer: (
      <>
        Once you have applied and been accepted as a member, you can create events in our Discord server. Go to{" "}
        <a
          href="https://sesh.fyi/dashboard/204984438596042752"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold"
        >
          Sesh
        </a>
        , authorize your Discord, and click Create Event. Events are a great way to bring the community together for raids, dungeons, social hangouts, and more.
      </>
    ),
  },
  {
    question: "What's the easiest way to contact the leadership team?",
    answer: (
      <>
        You can{" "}
        <a
          href="https://discord.com/channels/204984438596042752/985222513640497233"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold"
        >
          #open-a-ticket
        </a>
        {" "}in our Discord server. This will create a ticket accessible only to the Community Managers, who will then triage to determine who else should be involved in addressing your question or concern.
      </>
    ),
  },
  {
    question: "Do I have to join a game chapter to become a member?",
    answer: (
      <>
        No, you don't have to join a game chapter to become a member of Pandamonium. However, chapter membership is the primary way most members engage with the community. If you're not interested in joining a specific chapter, you can still participate in Pandamonium by being very active in our Discord server. You'll need to demonstrate consistent engagement—attending community events, participating in discussions, and contributing to the community culture. Members who are active in Discord but not in a chapter are still valued members of Pandamonium, though chapter membership provides more structured opportunities for gameplay and community building.
      </>
    ),
  },
  {
    question: "What if I want to play a game that doesn't have a Pandamonium chapter yet?",
    answer: (
      <>
        If there's a game you're passionate about, we'd love to hear about it. We have a few ways to organize around games:
        <br />
        <br />
        <strong>Non-Chapter Communities:</strong> Any Senior Member can create an in-game community for a game that doesn't have a Formal or Pilot Chapter. These are built on active engagement and our shared community values. If you're interested in starting one, speak to a Community Manager.
        <br />
        <br />
        <strong>Discord Posts:</strong> Anyone in our community can create a new post in Discord to follow and organize around a specific game. This is a low-barrier way to find other members interested in the same game and coordinate gameplay sessions.
        <br />
        <br />
        <strong>Pilot Chapters:</strong> If there's significant community interest in a new game (especially at release), we may establish a Pilot Chapter. Pilot Chapters are tested to see if there's enough sustained interest to eventually become a Formal Chapter. Existing leadership team members and longstanding community members mentor the process. If you think a game deserves this level of investment, bring it up with the leadership team!
      </>
    ),
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-primary/30 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/10 transition-colors text-left"
      >
        <h3 className="font-bold text-primary text-lg">{item.question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-card/50 border-t border-primary/30">
          <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              FAQ
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              Have questions about Pandamonium? Find answers to common questions about joining, participating, and getting the most out of our community.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <div className="space-y-4 mb-16">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* Still Have Questions Section */}
            <div className="p-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/30 text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h2>
              <p className="text-foreground/80 mb-6">
                If you can't find the answer you're looking for, feel free to reach out to our Community Managers on Discord or visit our Charter page to learn more about how Pandamonium operates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.gg/pandagamers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-primary text-background font-bold rounded hover:bg-primary/90 transition-colors"
                >
                  Join Our Discord
                </a>
                <a
                  href="/charter"
                  className="inline-block px-8 py-3 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-colors"
                >
                  View Charter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
