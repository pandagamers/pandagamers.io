import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { applyPageMetadata } from "./lib/siteMetadata";
import Home from "./pages/Home";
import Charter from "./pages/Charter";
import History from "./pages/History";
import Games from "./pages/Games";
import Leadership from "./pages/Leadership";
import Apply from "./pages/Apply";
import Privacy from "./pages/Privacy";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import Apprentices from "./pages/Apprentices";
import GettingStarted from "./pages/GettingStarted";
import Streaming from "./pages/Streaming";
import RedundancyRoom from "./pages/RedundancyRoom";
import WelcomeToPandamoniumRedirect from "./pages/WelcomeToPandamoniumRedirect";

function RouteEffects() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    applyPageMetadata(location);
  }, [location]);

  return null;
}

function AppRouter() {
  return (
    <>
      <RouteEffects />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/charter" component={Charter} />
        <Route path="/history" component={History} />
        <Route path="/games" component={Games} />
        <Route path="/leadership" component={Leadership} />
        <Route path="/apply" component={Apply} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/events" component={Events} />
        <Route path="/faq" component={FAQ} />
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/apprentices" component={Apprentices} />
        <Route path="/streaming" component={Streaming} />
        <Route path="/redundancy-room" component={RedundancyRoom} />
        <Route path="/welcome-to-pandamonium" component={WelcomeToPandamoniumRedirect} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
