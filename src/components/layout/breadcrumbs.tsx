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
    <nav className="py-5 bg-white border-b border-stone-200 bg-texture">
      <Container>
        <ol className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 overflow-x-auto scrollbar-hide whitespace-nowrap">
          <li className="flex items-center gap-3">
            <Link href="/" className="hover:text-[var(--color-copper-500)] transition-colors flex items-center gap-1.5 group">
              <Home className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              <span>Početna</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-stone-300" />
          </li>
          
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              {item.href ? (
                <Link href={item.href} className="hover:text-[var(--color-copper-500)] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--color-forest-950)]">{item.label}</span>
              )}
              {idx < items.length - 1 && <ChevronRight className="w-3 h-3 text-stone-300" />}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}

