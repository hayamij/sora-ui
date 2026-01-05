"use client";

import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { LinkItemType } from "fumadocs-ui/layouts/shared";
import { useMemo } from "react";
import { useAccountMenuItems } from "@/components/account-menu";
import { baseOptions } from "@/lib/layout/layout-options";

interface HomeLayoutWrapperProps {
  children: React.ReactNode;
  links: LinkItemType[];
}

/**
 * Shared wrapper component for HomeLayout
 * Used to avoid duplication across different route layouts
 * Injects dynamic Account menu items based on session
 */
export function HomeLayoutWrapper({ children, links }: HomeLayoutWrapperProps) {
  const accountMenuItems = useAccountMenuItems();

  // Find and update Account menu items dynamically
  const updatedLinks = useMemo(() => {
    return links.map((link) => {
      if (link.type === "menu" && link.text === "Account") {
        return {
          ...link,
          items: accountMenuItems,
        };
      }
      return link;
    });
  }, [links, accountMenuItems]);

  return (
    <HomeLayout {...baseOptions()} links={updatedLinks}>
      {children}
    </HomeLayout>
  );
}
