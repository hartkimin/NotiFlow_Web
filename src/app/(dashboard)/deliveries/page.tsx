import { getTodayDeliveries } from "@/lib/queries/deliveries";
import { DeliveryList } from "@/components/delivery-list";
import { Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default async function DeliveriesPage() {
  const result = await getTodayDeliveries().catch(() => ({ count: 0, deliveries: [] }));

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Truck className="h-6 w-6" />
        <h1 className="text-2xl font-bold">배송현황</h1>
        <Badge variant="secondary" className="ml-2">{result.count}건</Badge>
      </div>
      <DeliveryList deliveries={result.deliveries} />
    </div>
  );
}
