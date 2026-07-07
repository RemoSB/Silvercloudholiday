import type { CSSProperties } from "react";

type IconProps = {
  name: string; // symbol id without the leading "i-", e.g. "phone"
  className?: string;
  filled?: boolean;
  sm?: boolean;
  style?: CSSProperties;
};

// Mirrors legacy markup: <svg class="icon"><use href="#i-name"/></svg>
export default function Icon({ name, className, filled, sm, style }: IconProps) {
  const classes = ["icon", sm && "icon-sm", filled && "icon-filled", className]
    .filter(Boolean)
    .join(" ");
  return (
    <svg className={classes} style={style} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}
