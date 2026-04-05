import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Application() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">
                APPLICATION FORM
              </h1>

              <div className="space-y-6 text-foreground/90 text-lg leading-relaxed">
                <p>
                  Thank you for your interest in joining Pandamonium! Our application process is designed to ensure that new members align with our core values of inclusivity, equity, and accountability.
                </p>

                <div className="bg-background p-8 rounded-lg border border-primary/30">
                  <h2 className="text-2xl font-bold text-primary mb-4">Application Process</h2>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li>
                      <strong>Submit Your Application:</strong> Complete the application form in our Discord server by typing <code className="bg-primary/10 px-2 py-1 rounded">/apply</code> in any channel.
                    </li>
                    <li>
                      <strong>Community Review:</strong> Your application will be reviewed by our Community Managers and leadership team within 3-5 business days.
                    </li>
                    <li>
                      <strong>Interview (Optional):</strong> Depending on your application, you may be invited to a brief voice chat with a Community Manager to discuss your gaming interests and community values alignment.
                    </li>
                    <li>
                      <strong>Acceptance:</strong> Once approved, you'll receive full member status and access to all community channels and events.
                    </li>
                  </ol>
                </div>

                <div className="bg-background p-8 rounded-lg border border-primary/30">
                  <h2 className="text-2xl font-bold text-primary mb-4">What We're Looking For</h2>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Respect for our community values: inclusivity, equity, and accountability</li>
                    <li>Interest in multiplayer gaming, particularly MMOs</li>
                    <li>Willingness to engage positively with community members</li>
                    <li>Commitment to maintaining a drama-free environment</li>
                    <li>Age 18 or older</li>
                  </ul>
                </div>

                <div className="bg-background p-8 rounded-lg border border-primary/30">
                  <h2 className="text-2xl font-bold text-primary mb-4">Questions?</h2>
                  <p>
                    If you have questions about the application process, feel free to reach out to our Community Managers in Discord or submit a support ticket using the <code className="bg-primary/10 px-2 py-1 rounded">/ticket</code> command.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
