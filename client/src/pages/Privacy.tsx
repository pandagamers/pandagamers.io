import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              PRIVACY STATEMENT
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              This Privacy Statement explains what information Pandamonium collects about its users and what we do with that information.
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="space-y-12">
              {/* Who is Pandamonium */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Who is Pandamonium</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Pandamonium is an unincorporated gaming community that maintains this website for recruitment purposes. In order to operate this website, Pandamonium receives hosting and administration services from GitHub. Pandamonium also maintains a server on Discord, a social online and mobile chat platform. GitHub and Discord are data controllers, whereas Pandamonium is a data processor.
                </p>
              </div>

              {/* How Pandamonium Collects Non-Public Personal Data */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">How Pandamonium Collects Non-Public Personal Data</h2>
                <p className="text-foreground/80 mb-4 leading-relaxed">We collect non-public personal data:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>when you browse our website; and</li>
                  <li>when you apply to join the Pandamonium community on Discord.</li>
                </ul>
                <p className="text-foreground/80 mt-4 leading-relaxed">
                  This data will be collected regardless of browser, device, or app used to access our services.
                </p>
              </div>

              {/* What Data Pandamonium Collects and Why */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">What Data Pandamonium Collects and Why</h2>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  Access to Pandamonium's private chat functionality within Discord requires an approved community application. When applying, we request your character name and general location ("Member Data"). We use this Member Data to identify you on the Discord server and within our gaming chapters. We may use your character name and/or Discord username on a public team profile or leadership team page located on Pandamonium's website. We may also use your Discord username within in-game notes, if available. We will store this data for as long as you remain a community member. Please refer to the relevant publisher's privacy policy for details on how your data is stored and processed in-game:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li><strong>Dune: Awakening:</strong> <a href="https://www.funcom.com/privacy-policy-dune-awakening/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Funcom Player Privacy Notice</a></li>
                  <li><strong>Final Fantasy XIV Online:</strong> <a href="https://www.square-enix-games.com/en_US/documents/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Square Enix, Inc. Privacy Notice</a></li>
                  <li><strong>Palia:</strong> <a href="https://palia.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Singularity 6 Corporation Privacy Notice</a></li>
                </ul>
              </div>

              {/* GitHub Collects Data */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">GitHub Collects Data About Website Visits</h2>
                <p className="text-foreground/80 leading-relaxed">
                  When you visit the Pandamonium website, GitHub may collect technical information from your visit, including logs of visitor IP addresses, to maintain the security and integrity of the website and service. This data is processed under GitHub's legitimate interest to provide their services to Pandamonium in an efficient and secure manner.
                </p>
              </div>

              {/* Discord Collects Member Data */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Discord Collects Member Data</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Access to Pandamonium's Discord server requires an account. That account and the data you provide therein are subject to the Discord Privacy Policy.
                </p>
              </div>

              {/* Who Your Data is Shared With */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Who Your Data is Shared With</h2>
                <p className="text-foreground/80 leading-relaxed">
                  When you browse our website, technical information such as web server logs and other log information, such as user session or activity logs, may be shared with GitHub in order to facilitate their hosting obligations. When you apply to our Discord server, your Member Data is then shared with Discord.
                </p>
              </div>

              {/* Where Your Data is Stored */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Where Your Data is Stored</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Your browsing technical information is stored and processed by GitHub and your Member Data is stored and processed by Discord, both in the United States. Both comply with the General Data Protection Regulation ("GDPR") (Regulation (EU) 2016/679) (including, for the purposes of this notice, the GDPR as adopted and implemented in the United Kingdom in the form of the UK GDPR).
                </p>
              </div>

              {/* Pandamonium's CCPA and GDPR Compliance */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Pandamonium's CCPA and GDPR Compliance</h2>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  We respect privacy rights under CCPA, GDPR, and all other relevant data protection laws.
                </p>

                <h3 className="text-2xl font-bold text-accent mb-4">CCPA Customer Rights</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  The California Consumer Protection Act of 2018 ("CCPA") provides certain rights in favor of natural persons that are California residents. The rights in question are as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4 mb-6">
                  <li>the right of access to personal data;</li>
                  <li>the right to erase personal data (right to be forgotten); and</li>
                  <li>the right of data portability.</li>
                </ul>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  These rights are exercisable by natural persons that are California residents.
                </p>

                <h3 className="text-2xl font-bold text-accent mb-4">GDPR Customer Rights</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  GDPR provides certain rights in favor of data subjects domiciled in the European Union ("EU") and the United Kingdom ("UK"). The rights in question are as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4 mb-6">
                  <li>the right of a data subject to receive detailed information on processing;</li>
                  <li>the right of access to personal data;</li>
                  <li>the right to amend and rectify any inaccuracies in personal data;</li>
                  <li>the right to erase of personal data (right to be forgotten);</li>
                  <li>the right to data portability;</li>
                  <li>the right to restrict processing;</li>
                  <li>the right to object to processing; and</li>
                  <li>the right to object to automated decision making, including profiling.</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  These rights are exercisable by EU and UK-domiciled data subjects (subject to limitations as provided for in relevant data protection law).
                </p>
              </div>

              {/* Contact Pandamonium */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Contact Pandamonium</h2>
                <p className="text-foreground/80 leading-relaxed">
                  The Pandamonium leadership team generally does not have access to personal data outside of limited access granted via Discord. Inquiries regarding your personal information should be sent to{" "}
                  <a href="mailto:privacy@pandagamers.io" className="text-primary hover:underline">
                    privacy@pandagamers.io
                  </a>
                  .
                </p>
              </div>

              {/* Changes to This Document */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Changes to This Document</h2>
                <p className="text-foreground/80 leading-relaxed">
                  This version of our privacy statement took effect December 30th, 2025. We will post any new versions of this statement at this URL. A full revision history for this page can be found on GitHub.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
