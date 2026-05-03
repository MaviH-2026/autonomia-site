/**
 * Merge Tailwind CSS classes with clsx and tailwind-merge
 * Prevents duplicate/conflicting Tailwind classes
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
