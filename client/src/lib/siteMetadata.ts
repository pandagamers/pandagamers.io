export type PageMetadata = {
  path: string;
  title: string;
  description: string;
  indexable: boolean;
};

export const SITE_ORIGIN = "https://pandagamers.io";

export const INDEXABLE_PAGES: PageMetadata[] = [
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
];

export const DIRECT_ONLY_PAGES: PageMetadata[] = [
  {
    path: "/redundancy-room",
    title: "The Redundancy Room | Pandamonium",
    description:
      "A direct-link-only tribute to Pandamonium's retired Member Trackers.",
    indexable: false,
  },
];

export const ALL_PAGES = [...INDEXABLE_PAGES, ...DIRECT_ONLY_PAGES];

export const LEGACY_HASH_PATHS = new Set(ALL_PAGES.map((page) => page.path));

export function normalizePath(path: string): string {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "") || "/";
}

export function getPageMetadata(path: string): PageMetadata {
  const normalizedPath = normalizePath(path);

  return (
    ALL_PAGES.find((page) => page.path === normalizedPath) ?? {
      path: normalizedPath,
      title: "Page Not Found | Pandamonium",
      description: "The page you requested could not be found.",
      indexable: false,
    }
  );
}

export function canonicalUrl(path: string): string {
  const normalizedPath = normalizePath(path);
  return normalizedPath === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${normalizedPath}`;
}

export function applyPageMetadata(path: string): void {
  const metadata = getPageMetadata(path);
  const canonical = canonicalUrl(metadata.path);

  document.title = metadata.title;

  const setMeta = (selector: string, content: string) => {
    const element = document.querySelector<HTMLMetaElement>(selector);
    if (element) element.content = content;
  };

  setMeta('meta[name="description"]', metadata.description);
  setMeta('meta[property="og:title"]', metadata.title);
  setMeta('meta[property="og:description"]', metadata.description);
  setMeta('meta[name="twitter:title"]', metadata.title);
  setMeta('meta[name="twitter:description"]', metadata.description);
  setMeta('meta[name="robots"]', metadata.indexable ? "index,follow" : "noindex,nofollow");

  const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonicalLink) canonicalLink.href = canonical;
}

export function redirectLegacyHashRoute(): void {
  const legacyPath = window.location.hash.slice(1);
  if (!LEGACY_HASH_PATHS.has(legacyPath)) return;

  window.location.replace(legacyPath);
}
