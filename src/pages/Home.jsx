import Payments from "./Payments";
import ServiceProviders from "./ServiceProviders";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleDollarSign, UsersRoundCollaboration } from "lucide-react";

function Home() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header></Header>
      <Tabs
        defaultValue="payments"
        className="w-full max-w-7xl mx-auto flex min-h-0 flex-1 flex-col"
      >
        <TabsList variant="line" className="px-8 my-2 bg-background">
          <TabsTrigger value="payments">
            <CircleDollarSign></CircleDollarSign> <span>Pagamentos</span>
          </TabsTrigger>
          <TabsTrigger value="serviceProviders">
            <UsersRoundCollaboration></UsersRoundCollaboration>
            <span>Prestadores</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="payments" className="flex min-h-0 flex-1 flex-col">
          <Payments />
          <ServiceProviders />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Home;
