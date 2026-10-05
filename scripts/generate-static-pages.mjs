import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const clientRoot = join(projectRoot, "client");
const siteOrigin = "https://pandagamers.io";
const generatedRoutes = [
  {
    path: "/",
    title: "Pandamonium | Inclusive Gaming Community",
    description:
      "Pandamonium is a member-driven gaming community built on inclusivity, equity, accountability, and lasting connections.",
    indexable: true,
  },
  {
    path: "/charter",
    title: "Community Charter | Pandamonium",
    description:
      "Read the Pandamonium Community Charter, including our values, conduct expectations, and membership principles.",
    indexable: true,
  },
  {
    path: "/history",
    title: "Our History | Pandamonium",
    description:
      "Explore the history of Pandamonium, a member-driven gaming community founded in 2004.",
    indexable: true,
  },
  {
    path: "/games",
    title: "Games and Chapters | Pandamonium",
    description:
      "Explore the games, chapters, and shared adventures that bring the Pandamonium community together.",
    indexable: true,
  },
  {
    path: "/events",
    title: "Community Events | Pandamonium",
    description:
      "Discover Pandamonium community events and ways to play, connect, and build friendships together.",
    indexable: true,
  },
  {
    path: "/faq",
    title: "Frequently Asked Questions | Pandamonium",
    description:
      "Find answers to common questions about Pandamonium, joining the community, events, and community standards.",
    indexable: true,
  },
  {
    path: "/leadership",
    title: "Community Leadership | Pandamonium",
    description:
      "Meet the community managers, officers, and volunteers who help guide Pandamonium.",
    indexable: true,
  },
  {
    path: "/apply",
    title: "Apply to Join | Pandamonium",
    description:
      "Learn how to apply to join Pandamonium and become part of a respectful, member-driven gaming community.",
    indexable: true,
  },
  {
    path: "/apprentices",
    title: "Apprenticeship Process | Pandamonium",
    description:
      "Learn about Pandamonium's apprenticeship process and what to expect after submitting a community application.",
    indexable: true,
  },
  {
    path: "/getting-started",
    title: "Getting Started | Pandamonium",
    description:
      "Get started in Pandamonium with Discord setup, game preferences, events, and chapter-specific onboarding.",
    indexable: true,
  },
  {
    path: "/streaming",
    title: "Streaming Guidelines | Pandamonium",
    description:
      "Review Pandamonium streaming guidelines, community rules, privacy practices, and branding resources.",
    indexable: true,
  },
  {
    path: "/privacy",
    title: "Privacy Statement | Pandamonium",
    description:
      "Read the Pandamonium Privacy Statement and learn how we approach privacy for our gaming community website.",
    indexable: true,
  },
  {
    path: "/redundancy-room",
    title: "The Redundancy Room | Pandamonium",
    description:
      "A direct-link-only tribute to Pandamonium's retired Member Trackers.",
    indexable: false,
  },
  {
    path: "/welcome-to-pandamonium",
    title: "Welcome to Pandamonium Download | Pandamonium",
    description: "Redirecting to the Welcome to Pandamonium MP3 download.",
    indexable: false,
    redirectTo:
      "https://drive.google.com/file/d/1UsPwGAWxWuKBRhK3Lmzpyive_fNoFbau/view",
  },
  {
    path: "/404",
    title: "Page Not Found | Pandamonium",
    description: "The page you requested could not be found.",
    indexable: false,
  },
];

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const canonicalUrl = (path) => (path === "/" ? `${siteOrigin}/` : `${siteOrigin}${path}`);

function pageDocument(page) {
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const canonical = canonicalUrl(page.path);
  const robots = page.indexable ? "index,follow" : "noindex,nofollow";
  const redirectTo = page.redirectTo ? escapeHtml(page.redirectTo) : null;

  return `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${canonical}" />
    ${redirectTo ? `<meta http-equiv="refresh" content="0;url=${redirectTo}" />` : ""}
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="Pandamonium" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="msvalidate.01" content="042B5A623E976DFE64034D29535A7169" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://forge.butterfly-effect.dev; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://d2xsxph8kpxj0f.cloudfront.net https://d36hbw14aib5lz.cloudfront.net https://cdn.discordapp.com; frame-src https://sesh.fyi https://www.youtube-nocookie.com; connect-src 'self' https://forge.butterfly-effect.dev; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"Pandamonium","url":"https://pandagamers.io/","description":"A member-driven gaming community guided by core values of inclusivity, equity, and accountability.","foundingDate":"2004","sameAs":["https://discord.gg/pandagamers"]}</script>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

async function writePage(path, content) {
  if (path === "/") return;

  const outputPath = join(clientRoot, path.slice(1), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, content, "utf8");
}

await Promise.all(generatedRoutes.map((page) => writePage(page.path, pageDocument(page))));

console.log(`Generated ${generatedRoutes.length - 1} static route entry points.`);
