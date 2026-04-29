import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProductStockStatus } from "@/types/product";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = "EUR") {
  return new Intl.NumberFormat("hr-HR", {
    style: "currency",
    currency,
  }).format(price);
}

export function getStockLabel(status: ProductStockStatus) {
  switch (status) {
    case "in-stock":
      return "Na zalihi";
    case "limited":
      return "Ograničena količina";
    case "backorder":
      return "Po narudžbi";
    case "out-of-stock":
      return "Trenutno nedostupno";
  }
}

export function getStockTone(status: ProductStockStatus): "success" | "warning" | "info" | "destructive" {
  switch (status) {
    case "in-stock":
      return "success";
    case "limited":
      return "warning";
    case "backorder":
      return "info";
    case "out-of-stock":
      return "destructive";
  }
}
