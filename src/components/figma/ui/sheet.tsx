"use client";

import * as React from "react";
import { X } from "../Icons.tsx";
import { cn } from "./utils.ts";

interface SheetProps {
  children: React.ReactNode;
  className?: string;
}

interface SheetContentProps {
  children: React.ReactNode;
  className?: string;
}

interface SheetHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface SheetTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface SheetDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface SheetTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Sheet({ children, className }: SheetProps) {
  return <div className={cn("", className)}>{children}</div>;
}

export function SheetContent({ children, className }: SheetContentProps) {
  return (
    <div className={cn("fixed inset-y-0 right-0 z-50 h-full w-3/4 border-l bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", className)}>
        {children}
    </div>
  );
}

export function SheetHeader({ children, className }: SheetHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}>
      {children}
    </div>
  );
}

export function SheetTitle({ children, className }: SheetTitleProps) {
  return (
    <h2 className={cn("text-lg font-semibold text-foreground", className)}>
      {children}
    </h2>
  );
}

export function SheetDescription({ children, className }: SheetDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function SheetTrigger({ children, className, onClick }: SheetTriggerProps) {
  return (
    <button className={cn("", className)} onClick={onClick}>
      {children}
    </button>
  );
}