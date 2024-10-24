"use client";

import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  Home,
  LayoutDashboard,
  Map,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Weather Alerts",
    icon: AlertTriangle,
    href: "/weather",
    color: "text-violet-500",
  },
  {
    label: "Resource Management",
    icon: BarChart3,
    href: "/resources",
    color: "text-pink-700",
  },
  {
    label: "Incident Reports",
    icon: MessageSquare,
    href: "/incidents",
    color: "text-orange-700",
  },
  {
    label: "Maps & Analysis",
    icon: Map,
    href: "/maps",
    color: "text-emerald-500",
  },
  {
    label: "Team Management",
    icon: Users,
    href: "/team",
    color: "text-green-700",
  },
  {
    label: "Notifications",
    icon: Bell,
    href: "/notifications",
    color: "text-red-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <Home className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold ml-2">DisasterWatch</span>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-blue-600 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition",
                pathname === route.href
                  ? "text-blue-600 bg-gray-200/50 dark:bg-gray-800/50"
                  : "text-gray-600 dark:text-gray-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}