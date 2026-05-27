import { generateLlmsFullTxt } from "@/lib/geo";
import { createLlmTextResponse } from "@/lib/llm-response";

export const dynamic = "force-static";

export function GET() {
  return createLlmTextResponse(generateLlmsFullTxt());
}
