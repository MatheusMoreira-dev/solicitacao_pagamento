import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="h-dvh flex flex-col bg-background overflow-hidden">
      <Header />

      <main className="flex-1 min-h-0">
        <Outlet />
      </main>
    </div>
  );
}
