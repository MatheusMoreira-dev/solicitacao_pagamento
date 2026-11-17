import "./App.css";
import Home from "./pages/Home";
import PaymentsRequests from "./pages/PaymentsRequests";
import ServiceProviders from "./pages/ServiceProviders";
import Expenses from "./pages/Expenses";
import Header from "@/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppDataProvider } from "./contexts/AppDataContext";
import { ExpensesProvider } from "./features/expense/context/ExpensesContext";
import { ServicesProvidersProvider } from "./features/serviceProviders/context/ServicesProvidersContext";

function App() {
  return (
    <div className="h-dvh flex flex-col bg-background overflow-hidden">
      <AppDataProvider>
        <BrowserRouter>
          <Header />

          <main className="flex-1 min-h-0">
            <ServicesProvidersProvider>
              <ExpensesProvider>
                <Routes>
                  <Route path="/" element={<PaymentsRequests />} />
                  <Route path="/solicitacoes" element={<PaymentsRequests />} />
                  <Route path="/prestadores" element={<ServiceProviders />} />
                  <Route path="/despesas" element={<Expenses />} />
                </Routes>
              </ExpensesProvider>
            </ServicesProvidersProvider>
          </main>
        </BrowserRouter>
      </AppDataProvider>
    </div>
  );
}

export default App;
