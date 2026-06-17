import * as React from "react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "btn-industrial-sm py-2.5",
  md: "btn-industrial-md py-4",
  lg: "btn-industrial-lg py-5",
} as const;

type BaseProps = {
  size?: keyof typeof sizeClasses;
  fullWidth?: boolean;
  shadow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = BaseProps &
  React.ComponentPropsWithoutRef<"a"> & {
    as?: "a";
  };

type ButtonProps = BaseProps &
  React.ComponentPropsWithoutRef<"button"> & {
    as: "button";
  };

export type IndustrialButtonProps = LinkProps | ButtonProps;

export function IndustrialButton({
  size = "md",
  fullWidth,
  shadow,
  className,
  children,
  ...props
}: IndustrialButtonProps) {
  const classes = cn(
    "btn-industrial",
    sizeClasses[size],
    fullWidth && "btn-industrial-full",
    shadow && "btn-industrial-shadow",
    className,
  );

  if ("as" in props && props.as === "button") {
    const { as: _, ...buttonProps } = props;
    return (
      <button className={classes} {...buttonProps}>
        {children}
      </button>
    );
  }

  const { as: _, ...anchorProps } = props as LinkProps;
  return (
    <a className={classes} {...anchorProps}>
      {children}
    </a>
  );
}

export function IndustrialIconButton({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a className={cn("btn-industrial-icon", className)} {...props}>
      {children}
    </a>
  );
}
