import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Charter from "./pages/Charter";
import History from "./pages/History";
import Games from "./pages/Games";
import Leadership from "./pages/Leadership";
import Apply from "./pages/Apply";
import Privacy from "./pages/Privacy";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import Application from "./pages/Application";
import FFXIVInvite from "./pages/FFXIVInvite";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/charter"} component={Charter} />
      <Route path={"/history"} component={History} />
      <Route path={"/games"} component={Games} />
      <Route path={"/leadership"} component={Leadership} />
      <Route path={"/apply"} component={Apply} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/events"} component={Events} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/application"} component={Application} />
      <Route path={"/ffxiv_invite"} component={FFXIVInvite} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
