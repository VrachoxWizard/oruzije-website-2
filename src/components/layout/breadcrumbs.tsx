"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "./container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="py-4 bg-[var(--color-stone-50)] border-b border-stone-200">
      <Container>
        <ol className="flex items-center gap-2 text-xs font-medium text-stone-500 overflow-x-auto scrollbar-hide whitespace-nowrap">
          <li className="flex items-center gap-2">
            <Link href="/" className="hover:text-[var(--color-copper-500)] transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" />
              <span>Početna</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-stone-300" />
          </li>
          
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="hover:text-[var(--color-copper-500)] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--color-forest-950)] font-bold">{item.label}</span>
              )}
              {idx < items.length - 1 && <ChevronRight className="w-3 h-3 text-stone-300" />}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
