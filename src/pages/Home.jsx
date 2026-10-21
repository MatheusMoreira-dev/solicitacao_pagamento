import Payments from "./Payments";
import Header from "@/components/Header";

function Home() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header></Header>
      <Payments></Payments>
    </div>
  );
}

export default Home;
