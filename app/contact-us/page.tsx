import AdminSidebarComponent from "@/components/adminSidebarComponent";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default async function ContactUsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebarComponent />
      <main className="flex-1 p-10">
        <h1 className="text-2xl  font-bold">Contact Us</h1>
        
      </main>
    </div>
  );
}