import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // HTTPS redirect middleware
  app.use((req, res, next) => {
    const proto = req.headers["x-forwarded-proto"] || "http";
    if (proto === "http") {
      return res.redirect(301, `https://${req.headers.host}${req.url}`);
    }
    next();
  });

  // Security headers middleware
  app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "no-referrer-when-downgrade");
    res.setHeader("Permissions-Policy", "geolocation=(self \"https://pandagamers.io\"), microphone=()");
    next();
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
