import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "blockquote"
  | "list"
  | "code"
  | "lead"
  | "large"
  | "small"
  | "muted";

export function Text({
  children,
  as,
  className,
}: {
  children: React.ReactNode;
  as: TextType;
  className?: ClassValue;
}) {
  return as === "h1" ? (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  ) : as === "h2" ? (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  ) : as === "h3" ? (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  ) : as === "h4" ? (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  ) : as === "p" ? (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  ) : as === "blockquote" ? (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  ) : as === "list" ? (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  ) : as === "code" ? (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  ) : as === "lead" ? (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  ) : as === "large" ? (
    <p className={cn("text-lg font-semibold", className)}>{children}</p>
  ) : as === "small" ? (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  ) : as === "muted" ? (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  ) : (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}
