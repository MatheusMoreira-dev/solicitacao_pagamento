import "./App.css";
import Home from "./pages/Home";
import Payments from "./pages/Payments";
import ServiceProviders from "./pages/ServiceProviders";
import Header from "@/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-background w-full h-dvh overflow-hidden flex flex-col">
      <BrowserRouter>
        <Header />

        <main className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-tertiary">
          <Routes>
            <Route path="/" element={<Payments />} />
            <Route path="/pagamentos" element={<Payments />} />
            <Route path="/prestadores" element={<ServiceProviders />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
