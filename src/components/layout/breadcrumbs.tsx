import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/layout/container";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Putanja stranice"
      className="py-4 bg-white border-b border-stone-200 bg-texture"
    >
      <Container>
        <ol className="flex items-center gap-3 overflow-x-auto whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 scrollbar-hide">
          <li className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 transition-colors hover:text-[var(--color-copper-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-copper-500)]"
            >
              <Home className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Početna</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-stone-300" aria-hidden="true" />
          </li>

          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-3">
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[var(--color-copper-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-copper-500)]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--color-forest-950)]" aria-current="page">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <ChevronRight className="h-3 w-3 text-stone-300" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
