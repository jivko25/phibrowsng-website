import { Heart } from "lucide-react";
import { getViberChatUrl } from "@/lib/viber";
import { siteConfig } from "@/lib/site";

type ViberButtonProps = {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
};

const sizeClasses = {
  sm: "h-10 w-10 gap-0 px-0",
  md: "h-12 min-w-12 px-4 gap-2",
  lg: "h-14 min-w-14 px-6 gap-3",
};

const heartSizes = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
};

export function ViberButton({ size = "md", showLabel = true, className = "" }: ViberButtonProps) {
  return (
    <a
      href={getViberChatUrl()}
      className={`inline-flex items-center justify-center rounded-lg border border-primary/35 bg-primary/12 font-medium text-foreground transition-all hover:border-primary/60 hover:bg-primary/20 ${sizeClasses[size]} ${className}`}
      aria-label={`Пишете ни във Viber на ${siteConfig.phoneDisplay}`}
    >
      <Heart
        className={`fill-primary text-primary ${heartSizes[size]}`}
        aria-hidden
        strokeWidth={1.5}
      />
      {showLabel && size !== "sm" && <span className="text-base">Viber</span>}
    </a>
  );
}
