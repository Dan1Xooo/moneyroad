"use client";

import { useSearchParams } from "next/navigation";
import { Calculator } from "@/components/Calculator";

export function CalculatorEntry() {
  const searchParams = useSearchParams();
  return <Calculator initialOffer={searchParams.get("offer")} />;
}
