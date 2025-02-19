import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classConstructor(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}