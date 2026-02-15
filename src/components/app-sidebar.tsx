"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
  Brain,
  MessageSquare,
  ClipboardList,
  CalendarDays,
  Truck,
  BarChart3,
  Shield,
  Building2,
  Factory,
} from "lucide-react";

const navItems = [
  { href: "/", label: "홈", icon: Home },
  { href: "/messages", label: "수신메시지", icon: MessageSquare },
  { href: "/orders", label: "주문관리", icon: ClipboardList },
  { href: "/calendar", label: "캘린더", icon: CalendarDays },
  { href: "/deliveries", label: "배송현황", icon: Truck },
  { href: "/reports", label: "매출리포트", icon: BarChart3 },
  { href: "/kpis", label: "KPIS신고", icon: Shield },
  { href: "/hospitals", label: "거래처", icon: Building2 },
  { href: "/products", label: "품목", icon: Package },
  { href: "/suppliers", label: "공급사", icon: Factory },
  { href: "/users", label: "사용자", icon: Users },
  { href: "/settings", label: "AI 설정", icon: Brain },
];

export function AppSidebar({ userName }: { userName?: string }) {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">NotiFlow</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    isActive && "bg-muted text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
