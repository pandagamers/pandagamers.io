import React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster: React.FC<ToasterProps> = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return React.createElement(Sonner, {
    theme: theme as ToasterProps["theme"],
    className: "toaster group",
    style: {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)",
    } as React.CSSProperties,
    ...props,
  });
};

export { Toaster };
