import { useEffect } from "react";
import { WELCOME_TO_PANDAMONIUM_REDIRECT } from "@/lib/siteMetadata";

export default function WelcomeToPandamoniumRedirect() {
  useEffect(() => {
    window.location.replace(WELCOME_TO_PANDAMONIUM_REDIRECT);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 text-center">
      <p className="text-foreground/70">Redirecting to the Welcome to Pandamonium download...</p>
    </main>
  );
}
