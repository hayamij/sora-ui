import { generate as DefaultImage } from "fumadocs-ui/og";
import { ImageResponse } from "next/og";

export const revalidate = false;

export function GET() {
  return new ImageResponse(
    <DefaultImage
      description="Sora UI Documentation"
      site="Sora UI"
      title="Sora UI"
    />,
    {
      width: 1200,
      height: 630,
    }
  );
}
