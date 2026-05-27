import { getViberChatUrl } from "@/lib/viber";
import { siteConfig } from "@/lib/site";

type ViberButtonProps = {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
};

const sizeClasses = {
  sm: "h-10 w-10 text-xl gap-0 px-0",
  md: "h-12 min-w-12 px-4 text-2xl gap-2",
  lg: "h-14 min-w-14 px-6 text-3xl gap-3",
};

export function ViberButton({ size = "md", showLabel = true, className = "" }: ViberButtonProps) {
  return (
    <a
      href={getViberChatUrl()}
      className={`inline-flex items-center justify-center rounded-lg border border-[#7360f2]/40 bg-[#7360f2]/15 font-medium text-foreground transition-all hover:border-[#7360f2] hover:bg-[#7360f2]/25 ${sizeClasses[size]} ${className}`}
      aria-label={`Пишете ни във Viber на ${siteConfig.phoneDisplay}`}
    >
      <span role="img" aria-hidden>
        💜
      </span>
      {showLabel && size !== "sm" && <span className="text-base">Viber</span>}
    </a>
  );
}
