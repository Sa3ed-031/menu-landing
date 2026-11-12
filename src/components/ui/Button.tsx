import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "md" | "lg";

type ButtonProps = React.ComponentProps<"a"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "hover:shadow-xl hover:shadow-primary/30 text-primary-foreground bg-primary shadow-lg shadow-primary/25",
  secondary:
    "hover:border-primary/40 text-foreground bg-surface border border-border",
  ghost: "hover:text-primary text-foreground",
  inverse: "shadow-lg hover:shadow-xl text-primary bg-background",
};

const sizes: Record<ButtonSize, string> = {
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "font-semibold inline-flex items-center justify-center gap-2",
        "transition-all duration-200 active:translate-y-0 hover:-translate-y-0.5",
        sizes[size],
        variants[variant],
        "rounded-brand",
        className,
      )}
      {...props}
    />
  );
}
