import { HomeLayoutWrapper } from "@/components/layouts/home-layout-wrapper";
import { getLinkItems } from "@/lib/layout/layout.shared";

export const dynamic = "force-dynamic";

export default async function Layout({ children }: LayoutProps<"/">) {
  const linkItems = await getLinkItems();

  return <HomeLayoutWrapper links={linkItems}>{children}</HomeLayoutWrapper>;
}
