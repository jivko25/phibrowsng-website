import { generateLlmsTxt } from "@/lib/geo";
import { createLlmTextResponse } from "@/lib/llm-response";

export const dynamic = "force-static";

/** Псевдоним на /llms.txt — някои AI инструменти търсят llm.txt (единствено число) */
export function GET() {
  return createLlmTextResponse(generateLlmsTxt());
}
