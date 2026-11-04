import "./App.css";
import Home from "./pages/Home";
import Payments from "./pages/Payments";
import ServiceProviders from "./pages/ServiceProviders";
import Header from "@/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-background w-full h-dvh overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-tertiary">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Payments />} />
          <Route path="/pagamentos" element={<Payments />} />
          <Route path="/prestadores" element={<ServiceProviders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
