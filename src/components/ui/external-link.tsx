"use client";

import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  iconClassName?: string;
}

/**
 * External link component with accessible attributes and optional indicator icon.
 * Automatically adds rel="noopener noreferrer" and target="_blank".
 */
export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
  iconClassName,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-1", className)}
    >
      {children}
      {showIcon && (
        <ExternalLinkIcon
          className={cn("w-3 h-3 opacity-70 shrink-0", iconClassName)}
          aria-hidden="true"
        />
      )}
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
