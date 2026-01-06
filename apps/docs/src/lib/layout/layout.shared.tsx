import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import type { LinkItemType } from "fumadocs-ui/layouts/shared";
import { Book, ComponentIcon, Pencil, Server } from "lucide-react";
import Link from "next/link";
import { UserButtonNav } from "@/components/user-button-nav";
import { paths } from "@/config/paths";
import { getProfileMenuItems } from "./menu-items";

export async function getLinkItems(): Promise<LinkItemType[]> {
  const profileItems = await getProfileMenuItems();

  return [
    {
      type: "menu",
      on: "menu",
      text: "Documentation",
      items: [
        {
          text: "Getting Started",
          url: paths.docs.gettingStarted,
          icon: <Book />,
        },
        {
          text: "Components",
          url: paths.docs.components,
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
            <Link href={paths.docs.root}>Documentation</Link>
          </NavbarMenuTrigger>
          <NavbarMenuContent>
            <NavbarMenuLink className="md:row-span-2" href={paths.docs.root}>
              <p className="font-medium">Getting Started</p>
              <p className="text-fd-muted-foreground text-sm">
                Learn how to use
              </p>
            </NavbarMenuLink>
            <NavbarMenuLink className="lg:col-start-2" href={paths.docs.root}>
              <ComponentIcon className="mb-2 rounded-md bg-fd-primary p-1 text-fd-primary-foreground" />
              <p className="font-medium">Components</p>
              <p className="text-fd-muted-foreground text-sm">
                See the available components.
              </p>
            </NavbarMenuLink>
            <NavbarMenuLink className="lg:col-start-2" href={paths.waitlist}>
              <Server className="mb-2 rounded-md bg-fd-primary p-1 text-fd-primary-foreground" />
              <p className="font-medium">Pricing</p>
              <p className="text-fd-muted-foreground text-sm">
                See the pricing.
              </p>
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
        <span className="flex cursor-not-allowed items-center gap-2 px-2 line-through opacity-50">
          Blog
        </span>
      ),
    },
    {
      type: "main",
      on: "nav",
      text: "Pricing",
      url: paths.waitlist,
    },
    {
      type: "main",
      on: "nav",
      text: "Account",
      url: paths.account.settings,
    },
    {
      type: "menu",
      on: "menu",
      text: "Account",
      items: profileItems,
    },
    {
      type: "custom",
      on: "nav",
      children: <UserButtonNav />,
      secondary: true,
    },
  ];
}

// Static linkItems for SSG (no auth check)
export const linkItems: LinkItemType[] = [
  {
    type: "menu",
    on: "menu",
    text: "Documentation",
    items: [
      {
        text: "Getting Started",
        url: paths.docs.gettingStarted,
        icon: <Book />,
      },
      {
        text: "Components",
        url: paths.docs.components,
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
          <Link href={paths.docs.root}>Documentation</Link>
        </NavbarMenuTrigger>
        <NavbarMenuContent>
          <NavbarMenuLink className="md:row-span-2" href={paths.docs.root}>
            <p className="font-medium">Getting Started</p>
            <p className="text-fd-muted-foreground text-sm">Learn how to use</p>
          </NavbarMenuLink>
          <NavbarMenuLink className="lg:col-start-2" href={paths.docs.root}>
            <ComponentIcon className="mb-2 rounded-md bg-fd-primary p-1 text-fd-primary-foreground" />
            <p className="font-medium">Components</p>
            <p className="text-fd-muted-foreground text-sm">
              See the available components.
            </p>
          </NavbarMenuLink>
          <NavbarMenuLink className="lg:col-start-2" href={paths.waitlist}>
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
      <span className="flex cursor-not-allowed items-center gap-2 px-2 line-through opacity-50">
        Blog
      </span>
    ),
  },
  {
    type: "main",
    on: "nav",
    text: "Pricing",
    url: paths.waitlist,
  },
  {
    type: "main",
    on: "nav",
    text: "Account",
    url: paths.account.settings,
  },
  {
    type: "menu",
    on: "menu",
    text: "Account",
    items: [
      {
        text: "Sign In",
        url: paths.auth.signIn,
      },
    ],
    // Items will be dynamically injected by AccountMenuItems component
  },
  {
    type: "custom",
    on: "nav",
    children: <UserButtonNav />,
    secondary: true,
  },
];

// baseOptions has been moved to layout-options.ts to avoid importing server-only code into client components
