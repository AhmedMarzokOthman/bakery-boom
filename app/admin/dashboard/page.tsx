"use client"

import AdminSidebarComponent from "@/components/adminSidebarComponent";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useResponsive } from "@/components/hooks/useResponsive";

export default function DashboardPage() {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  if (isDesktop) {
    return (
      <div className="flex bg-gray-100">
        <AdminSidebarComponent />
        <main className="flex-1 p-10">
          <h1 className="text-2xl  font-bold">Header</h1>
          <form className="flex flex-col gap-y-5 p-10" action="">
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="LogoImage">Logo Image</Label>
              <Input className="w-[500px]" type="file" name="LogoImage" id="LogoImage" />
            </div>
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="Label1">Label 1</Label>
              <Input className="w-[500px]" type="text" name="Label1" id="Label1" />
            </div>
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="Label2">Label 2</Label>
              <Input className="w-[500px]" type="text" name="Label2" id="Label2" />
            </div>
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="Label3">Label 3</Label>
              <Input className="w-[500px]" type="text" name="Label3" id="Label3" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex bg-gray-100">
        <AdminSidebarComponent />
        <main className="flex-1 p-10">
          <h1 className="text-2xl  font-bold">Header</h1>
          <form className="flex flex-col gap-y-5 p-10" action="">
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="LogoImage">Logo Image</Label>
              <Input className="w-[500px]" type="file" name="LogoImage" id="LogoImage" />
            </div>
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="Label1">Label 1</Label>
              <Input className="w-[500px]" type="text" name="Label1" id="Label1" />
            </div>
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="Label2">Label 2</Label>
              <Input className="w-[500px]" type="text" name="Label2" id="Label2" />
            </div>
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="Label3">Label 3</Label>
              <Input className="w-[500px]" type="text" name="Label3" id="Label3" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="flex bg-gray-100">
        <AdminSidebarComponent />
        <main className="flex-1 p-10">
          <h1 className="text-2xl  font-bold">Header</h1>
          <form className="flex flex-col gap-y-5 p-10" action="">
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="LogoImage">Logo Image</Label>
              <Input className="w-[500px]" type="file" name="LogoImage" id="LogoImage" />
            </div>
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="Label1">Label 1</Label>
              <Input className="w-[500px]" type="text" name="Label1" id="Label1" />
            </div>
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="Label2">Label 2</Label>
              <Input className="w-[500px]" type="text" name="Label2" id="Label2" />
            </div>
            <div className="flex gap-x-2 items-center">
              <Label className="text-lg font-medium font-alexandria" htmlFor="Label3">Label 3</Label>
              <Input className="w-[500px]" type="text" name="Label3" id="Label3" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    );
  }
}