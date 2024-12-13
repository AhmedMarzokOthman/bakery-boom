"use client"

import AdminSidebarComponent from "@/components/adminSidebarComponent";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useResponsive } from "@/hooks/useResponsive";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  if (isDesktop) {
    return (
      <div className="flex bg-gray-100">
        <AdminSidebarComponent />
        <main className="flex-1 p-10">
          <h1 className="text-2xl  font-bold">Dashboard</h1>

        </main>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex bg-gray-100">
        <AdminSidebarComponent />
        <main className="flex-1 p-10">
          <h1 className="text-2xl  font-bold">Dashboard</h1>

        </main>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="flex bg-gray-100">
        <AdminSidebarComponent />
        <main className="flex-1 p-10">
          <h1 className="text-2xl  font-bold">Dashboard</h1>
        </main>
      </div>
    );
  }
}