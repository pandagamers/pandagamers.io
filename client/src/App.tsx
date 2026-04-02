import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Charter from "./pages/Charter";
import History from "./pages/History";
import Leadership from "./pages/Leadership";
import Apply from "./pages/Apply";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/charter"} component={Charter} />
      <Route path={"/history"} component={History} />
      <Route path={"/leadership"} component={Leadership} />
      <Route path={"/apply"} component={Apply} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
