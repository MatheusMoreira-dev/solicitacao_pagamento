import "./App.css";
import PaymentsRequests from "./pages/PaymentsRequests";
import ServiceProviders from "./pages/ServiceProviders";
import Expenses from "./pages/Expenses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExpensesProvider } from "./features/expense/context/ExpensesContext";
import { ServicesProvidersProvider } from "./features/serviceProviders/context/ServicesProvidersContext";
import { MainLayout } from "@/layouts/MainLayout";
import Login from "./pages/Login";

function App() {
  const user = false;

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <BrowserRouter>
          <ServicesProvidersProvider>
            <ExpensesProvider>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route index element={<Expenses />} />
                  <Route path="/solicitacoes" element={<PaymentsRequests />} />
                  <Route path="/prestadores" element={<ServiceProviders />} />
                  <Route path="/despesas" element={<Expenses />} />
                </Route>
              </Routes>
            </ExpensesProvider>
          </ServicesProvidersProvider>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
