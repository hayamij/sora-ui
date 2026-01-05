import { HomeLayoutWrapper } from "@/components/layouts/home-layout-wrapper";
import { linkItems } from "@/lib/layout/layout.shared";

export default function Layout({ children }: LayoutProps<"/account/[path]">) {
  return <HomeLayoutWrapper links={linkItems}>{children}</HomeLayoutWrapper>;
}
