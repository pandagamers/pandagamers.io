import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Application() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card border-b border-primary/30">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-center">
              PANDAMONIUM APPRENTICESHIP PROCESS
            </h1>
            <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
              Guidance for reviewing applications and evaluating apprentice promotions
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            {/* Introduction */}
            <div className="mb-12 p-8 bg-card rounded-lg border border-primary/30">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Pandamonium is a member-driven community and as such we need feedback from all our members. We cannot emphasize enough that we greatly appreciate and always take into consideration all feedback on potential new members.
              </p>
            </div>

            {/* Can't See Channels Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wide">
                Can't See the Open Applications Section or Apprentice Review Channels?
              </h2>
              <div className="bg-card rounded-lg border border-primary/30 p-8">
                <p className="text-foreground/80 mb-6">
                  Scroll to the top of the channel listing and click on <span className="font-mono text-primary">"Channels & Roles."</span> Then click on <span className="font-mono text-primary">"Browse Channels"</span> on desktop or <span className="font-mono text-primary">"All Channels"</span> on mobile.
                </p>
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <p className="font-semibold text-primary mb-2">For Apprentice Reviews:</p>
                    <p className="ml-4">Scroll down to the Information section and click on the checkbox next to <span className="font-mono text-primary">"apprentice_review."</span></p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">For Applications:</p>
                    <p className="ml-4">Scroll down to the <span className="font-mono text-primary">"Open Applications"</span> category (third category down). Click on <span className="font-mono text-primary">"Follow Category."</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wide">Applications</h2>
              <div className="bg-card rounded-lg border border-primary/30 p-8">
                <p className="text-foreground/80 leading-relaxed">
                  Once a community application has been submitted, it is accessible by those ranked as <strong>Member</strong> and above in the <strong>Open Applications</strong> category. All community members are encouraged and welcome to submit their comments within those underlying channels. A simple Yes or No reaction will also suffice. Once an applicant has been accepted, future issues or concerns should be brought directly to the attention of{" "}
                  <Link href="/leadership">
                    <a className="text-primary hover:underline font-semibold">Leadership</a>
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Criteria For Review Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wide">Criteria For Review</h2>
              <div className="bg-card rounded-lg border border-primary/30 p-8 space-y-6">
                <div>
                  <p className="font-semibold text-primary mb-3">1. Did they take the application process seriously?</p>
                  <p className="text-foreground/80 ml-4">
                    Did they provide enough information so that we were able to get a basic sense of them as a person?
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-3">2. Do they appear to be a well-rounded player?</p>
                  <p className="text-foreground/80 ml-4">
                    If they go on in great detail about their min-maxing experience and singular focus, giving no real detail about who they are as a person, they likely won't fit in here. Our community is a diverse group of people with a variety of playstyles and our base is built on social interaction. If someone is not interested in more than hardcore content, this is likely not the right place for them.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-3">3. Did you get a good or bad vibe?</p>
                  <p className="text-foreground/80 ml-4">
                    We realize this is hard to quantify. Even if a specific issue doesn't jump out at you, getting a bad vibe from an app is usually reason enough to deny.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-3">4. Does it align with our diversity statement?</p>
                  <p className="text-foreground/80 ml-4">
                    <em>"Our members represent differences in race, age, gender, politics, religion, and sexual orientation. Those inclined towards bigoted, racist, homophobic, transphobic, xenophobic, or misogynistic behavior need not apply. You wouldn't like it here, and we wouldn't like to have you."</em> This is a no brainer.
                  </p>
                </div>
              </div>
            </div>

            {/* Keep In Mind Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wide">Keep In Mind</h2>
              <div className="bg-card rounded-lg border border-primary/30 p-8 space-y-6">
                <div>
                  <p className="font-semibold text-primary mb-3">1. For friends or family of current members</p>
                  <p className="text-foreground/80 ml-4">
                    Please encourage them to go through the process as if we were strangers (because most of us are). It's unlikely they would be denied entry due to a poor application, but it's not the greatest first impression to give to our members.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-3">2. Keep comments constructive</p>
                  <p className="text-foreground/80 ml-4">
                    The application comments section should not be used as a forum to convince other members that their point of view is wrong. Comedic banter is fine. Replying to say you agree is fine. Asking people to justify their position or calling them out in some negative way is not productive. People should not worry about being attacked (even if done respectfully) for their opinions. Simply share your thoughts on an app and let other folks do the same. Trust that the process will work.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-3">3. Review each application on its own merit</p>
                  <p className="text-foreground/80 ml-4">
                    Do not use past applications as justification for approving or denying a new one. All apps should be reviewed on their own.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-3">4. Be respectful of fellow community members</p>
                  <p className="text-foreground/80 ml-4">
                    Above all else, be respectful of your fellow community members. If you take significant issue with the comments someone is making and feel like your response will be harsher than is appropriate, please speak with a member of{" "}
                    <Link href="/leadership">
                      <a className="text-primary hover:underline font-semibold">Leadership</a>
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Apprentice Reviews Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-accent mb-6 uppercase tracking-wide">Apprentice Reviews</h2>
              <div className="bg-card rounded-lg border border-primary/30 p-8 space-y-6">
                <div>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    After a minimum of 30 days, Apprentices are put up for an initial review with the community. We encourage members to be vocal about their experiences with Apprentices, whether the commentary is positive or negative. We use this information to approve or deny an Apprentice for membership, so please be vocal in sharing your thoughts.
                  </p>
                </div>

                <div className="bg-background/50 p-6 rounded border border-primary/20">
                  <p className="font-semibold text-primary mb-4">Voting Guidelines:</p>
                  <ul className="space-y-3 text-foreground/80 text-sm">
                    <li>
                      <strong className="text-primary">Yes:</strong> If you've had a positive interaction with an Apprentice, that's enough for a "Yes" vote.
                    </li>
                    <li>
                      <strong className="text-primary">Needs More Time:</strong> Any yellow flags warrant a "Needs more time" vote.
                    </li>
                    <li>
                      <strong className="text-primary">No:</strong> A "No" vote is for red flags.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-foreground/80">
                    Please share any related information for a "No" or "Needs more time" vote in the post or with a Community Manager. Before an Apprentice is promoted to Member, any comments on them will be deleted.
                  </p>
                </div>

                <div>
                  <p className="text-foreground/80 mb-3">
                    An Apprenticeship can be extended for another two weeks due to inactivity or insufficient "Yes" votes, at which time they'll be up for a final review.
                  </p>
                </div>

                <div className="bg-accent/10 border border-accent/30 p-6 rounded">
                  <p className="font-semibold text-accent mb-3">Important:</p>
                  <p className="text-foreground/80 text-sm">
                    If there are issues with an Apprentice, don't wait for the review to be posted. Contact a member of the leadership team or open a ticket with the Community Managers so the issue can be addressed.
                  </p>
                </div>

                <div className="border-t border-primary/20 pt-6">
                  <p className="text-foreground/80 italic">
                    The membership process was always intended to be collaborative so that everyone is comfortable with who is coming in the door. Thus far we think it's worked out very well. Keep it up!
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
