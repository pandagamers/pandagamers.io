import { createRoot } from "react-dom/client";
import App from "./App";
import { redirectLegacyHashRoute } from "./lib/siteMetadata";
import "./index.css";

redirectLegacyHashRoute();

createRoot(document.getElementById("root")!).render(<App />);
