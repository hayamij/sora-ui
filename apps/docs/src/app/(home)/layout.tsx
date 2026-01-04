import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, getLinkItems } from "@/lib/layout.shared";

export const dynamic = "force-dynamic";

export default async function Layout({ children }: LayoutProps<"/">) {
  const linkItems = await getLinkItems();

  return (
    <HomeLayout {...baseOptions()} links={linkItems}>
      {children}
    </HomeLayout>
  );
}
