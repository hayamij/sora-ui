import { SignedIn, SignedOut, UserButton } from "@daveyplate/better-auth-ui";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { Book, ComponentIcon, Pencil, Server, UserCircle2 } from "lucide-react";
import Link from "next/link";

export const linkItems: LinkItemType[] = [
  {
    type: "menu",
    on: "menu",
    text: "Documentation",
    items: [
      {
        text: "Getting Started",
        url: "/docs",
        icon: <Book />,
      },
      {
        text: "Components",
        url: "/docs/ui/components",
        icon: <ComponentIcon />,
      },
    ],
  },
  {
    type: "custom",
    on: "nav",
    children: (
      <NavbarMenu>
        <NavbarMenuTrigger>
          <Link href="/docs">Documentation</Link>
        </NavbarMenuTrigger>
        <NavbarMenuContent>
          <NavbarMenuLink className="md:row-span-2" href="/docs">
            <p className="font-medium">Getting Started</p>
            <p className="text-fd-muted-foreground text-sm">Learn how to use</p>
          </NavbarMenuLink>
          <NavbarMenuLink className="lg:col-start-2" href="/docs">
            <ComponentIcon className="mb-2 rounded-md bg-fd-primary p-1 text-fd-primary-foreground" />
            <p className="font-medium">Components</p>
            <p className="text-fd-muted-foreground text-sm">
              See the available components.
            </p>
          </NavbarMenuLink>
          <NavbarMenuLink className="cursor-not-allowed opacity-50 lg:col-start-2">
            <Server className="mb-2 rounded-md bg-fd-primary p-1 text-fd-primary-foreground" />
            <p className="font-medium">Pricing</p>
            <p className="text-fd-muted-foreground text-sm">See the pricing.</p>
          </NavbarMenuLink>
          <NavbarMenuLink className="cursor-not-allowed opacity-50 lg:col-start-3 lg:row-start-1">
            <Pencil className="mb-2 rounded-md bg-fd-primary p-1 text-fd-primary-foreground" />
            <p className="font-medium">Comming Soon</p>
            <p className="text-fd-muted-foreground text-sm">
              We are working on it.
            </p>
          </NavbarMenuLink>
        </NavbarMenuContent>
      </NavbarMenu>
    ),
  },
  {
    type: "custom",
    on: "nav",
    children: (
      <span className="flex cursor-not-allowed items-center gap-2 opacity-50">
        Blog
      </span>
    ),
  },
  {
    type: "custom",
    on: "nav",
    children: (
      <div className="flex items-center">
        <UserButton size={"icon"} />
      </div>
    ),
    secondary: true,
  },
  {
    type: "custom",
    on: "menu",
    children: (
      <>
        <SignedIn>
          {/* Maybe show a dialog when the user clicks the button instead of redirecting to the settings page */}
          <Link href="/account/settings">
            <UserButton size={"icon"} />
          </Link>
        </SignedIn>
        <SignedOut>
          <Link
            className="flex items-center gap-1.5 rounded-md p-0.5 font-medium text-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            href="/auth/sign-in"
          >
            <UserCircle2 className="h-6 w-6" />
          </Link>
        </SignedOut>
      </>
    ),
    secondary: true,
  },
];

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Sora UI",
    },
    githubUrl: "https://github.com/axyl1410/sora-ui",
  };
}
