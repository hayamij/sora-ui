import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/content/source";
import { baseOptions } from "@/lib/layout/layout-options";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
