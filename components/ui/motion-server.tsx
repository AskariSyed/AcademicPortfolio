/**
 * Server-safe animation primitives — pure CSS, no client JS.
 * Use these in Server Components instead of the client-only framer-motion wrappers.
 * Interactive hover/tap effects are handled via Tailwind CSS utilities.
 */

import React from "react";
import { cn } from "@/lib/utils";

interface FadeInServerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number; // 0–5, mapped to a CSS animation-delay in 100ms steps
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  distance?: number;
  once?: boolean;
}

/**
 * CSS-only fade-in that works in Server Components.
 * Uses a small inline style for the delay and relies on globals.css @keyframes fadeIn.
 */
export function FadeInServer({
  children,
  className,
  delay = 0,
  direction,
  duration,
  distance,
  once,
  style,
  ...props
}: FadeInServerProps) {
  return (
    <div
      className={cn("animate-fade-in", className)}
      style={{
        ...(delay ? { animationDelay: `${delay * 100}ms` } : {}),
        animationFillMode: "both",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

interface StaggerServerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

/** Wraps children in a grid/flex container. Items are individually staggered via CSS. */
export function StaggerContainerServer({
  children,
  className,
  staggerDelay,
  delay,
  ...props
}: StaggerServerProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

interface StaggerItemServerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  index?: number; // 0-based index drives the CSS delay
}

export function StaggerItemServer({
  children,
  className,
  index = 0,
  style,
  ...props
}: StaggerItemServerProps) {
  return (
    <div
      className={cn("animate-fade-in", className)}
      style={{
        animationDelay: `${index * 80}ms`,
        animationFillMode: "both",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

interface HoverLiftServerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  lift?: number;
  scale?: number;
}

/** CSS-only hover lift using Tailwind transition utilities. */
export function HoverLiftServer({
  children,
  className,
  lift,
  scale,
  ...props
}: HoverLiftServerProps) {
  return (
    <div
      className={cn(
        "transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.01]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
