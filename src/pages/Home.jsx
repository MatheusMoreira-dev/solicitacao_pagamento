import Payments from "./Payments";
import ServiceProviders from "./ServiceProviders";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleDollarSign, UsersRoundCollaboration } from "lucide-react";

function Home() {
  return (
    <div className="h-full">
      <Header />

      <Tabs
        defaultValue="payments"
        className="w-full mx-auto flex min-h-0 flex-1 flex-col mb-5"
      >
        <TabsList className="px-8 bg-background">
          <TabsTrigger value="payments" className="cursor-pointer">
            <CircleDollarSign /> Pagamentos
          </TabsTrigger>

          <TabsTrigger value="serviceProviders" className="cursor-pointer">
            <UsersRoundCollaboration />
            Prestadores
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="payments"
          className="flex min-h-0 flex-1 flex-col overflow-hidden"
        >
          <Payments />
        </TabsContent>

        <TabsContent
          value="serviceProviders"
          className="flex min-h-0 flex-1 flex-col overflow-hidden"
        >
          <ServiceProviders />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Home;
