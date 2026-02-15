"use client";

import Link from "next/link";
import {
  Bell,
  Menu,
  Package,
  Package2,
  Search,
  Home,
  MessageSquare,
  ClipboardList,
  CalendarDays,
  Truck,
  BarChart3,
  Shield,
  Building2,
  Factory,
  Users,
  Brain,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserMenu } from "./user-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold mb-4"
            >
              <Package2 className="h-6 w-6" />
              <span className="">NotiFlow</span>
            </Link>
            {navItems.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
                    isActive && "bg-muted text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <UserMenu />
    </header>
  );
}
