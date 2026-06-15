import Image from "next/image";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

const config = {
  header: {
    width: 180,
    height: 65,
    className: "h-10 w-auto md:h-12",
  },
  footer: {
    width: 160,
    height: 58,
    className: "h-9 w-auto",
  },
} as const;

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const { width, height, className: sizeClass } = config[variant];

  return (
    <Image
      src="/phiBrowsNG_logo.png"
      alt={siteConfig.name}
      width={width}
      height={height}
      className={`${sizeClass} ${className}`.trim()}
      priority={variant === "header"}
    />
  );
}
