import { ShieldAlert } from "lucide-react";
import { getComplianceMessage } from "@/lib/compliance";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

type ComplianceNoticeProps = {
  product?: Product;
  title?: string;
  message?: string;
  className?: string;
};

export function ComplianceNotice({ product, title = "Regulirani asortiman", message, className }: ComplianceNoticeProps) {
  const resolvedMessage = message ?? (product ? getComplianceMessage(product) : "");

  if (!resolvedMessage) return null;

  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--color-copper-500)]/25 bg-[var(--color-forest-950)] p-5 text-white shadow-xl shadow-forest-950/10",
        className,
      )}
    >
      <div className="flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-copper-500)]/15 text-[var(--color-copper-500)]">
          <ShieldAlert className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-black uppercase tracking-wide">{title}</h3>
          <p className="text-xs font-medium leading-relaxed text-white/65">{resolvedMessage}</p>
        </div>
      </div>
    </div>
  );
}
