import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { urls } from "@/config/urls";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Sora UI",
    },
    githubUrl: urls.github.repo,
  };
}
