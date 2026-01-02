import { getLLMText, source } from "@/lib/source";

export const revalidate = false;

//todo: free tier can't access all pages, need to filter out the paid pages
export async function GET() {
  const scan = source.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join("\n\n"));
}
