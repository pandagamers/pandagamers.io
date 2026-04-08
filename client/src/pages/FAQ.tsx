import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Can I invite friends to the Pandamonium Discord server?",
    answer:
      "Yes, you are welcome to share the server link with friends: <a href='https://discord.gg/pandagamers' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>https://discord.gg/pandagamers</a>. We love welcoming new members who share our values of inclusivity, equity, and accountability.",
  },
  {
    question: "Does Pandamonium have a store?",
    answer:
      "We do! We have Pandamonium-branded products available for purchase at <a href='https://pandamonium-shop.fourthwall.com/' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>https://pandamonium-shop.fourthwall.com/</a>. Check out our merchandise to show your Pandamonium pride!"
  },
  {
    question: "How do I create events for the community to participate in?",
    answer:
      "Yes! You can create events in our Discord server. Type /create in one of the event channels and follow the Sesh bot instructions. Events are a great way to bring the community together for raids, dungeons, social hangouts, and more.",
  },
  {
    question: "What's the easiest way to contact the leadership team?",
    answer:
      "You can open a ticket in the designated support channel in our Discord server. This will create a ticket accessible only to the Community Managers, who will then triage to determine who else should be involved in addressing your question or concern.",
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
          <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">{item.answer}</p>
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
              FREQUENTLY ASKED QUESTIONS
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
