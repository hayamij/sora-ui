import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { LinkItemType } from "fumadocs-ui/layouts/shared";
import { baseOptions } from "@/lib/layout.shared";

interface HomeLayoutWrapperProps {
  children: React.ReactNode;
  links: LinkItemType[];
}

/**
 * Shared wrapper component for HomeLayout
 * Used to avoid duplication across different route layouts
 */
export function HomeLayoutWrapper({ children, links }: HomeLayoutWrapperProps) {
  return (
    <HomeLayout {...baseOptions()} links={links}>
      {children}
    </HomeLayout>
  );
}
