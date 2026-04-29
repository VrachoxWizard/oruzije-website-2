import { Badge } from "@/components/ui/badge";
import { getStockLabel, getStockTone } from "@/lib/utils";
import type { ProductStockStatus } from "@/types/product";

type StockBadgeProps = {
  status: ProductStockStatus;
};

export function StockBadge({ status }: StockBadgeProps) {
  return <Badge variant={getStockTone(status)}>{getStockLabel(status)}</Badge>;
}
