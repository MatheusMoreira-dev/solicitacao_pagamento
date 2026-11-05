import favicon from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

function Header() {
  return (
    <header className="sticky top-0 h-14 bg-primary z-50 py-1 shrink-0 shadow-sm mb-5">
      <div className="flex items-center justify-between size-full mx-auto px-6 relative">
        <div className="size-full flex items-center">
          <img src={favicon} alt="" className="object-contain h-full" />

          <h1 className="text-background mx-5 text-sm font-bold">
            Solicitação de Pagamento
          </h1>
        </div>

        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6 text-sm text-background">
          <NavLink to="/pagamentos" className="flex gap-1 items-center">
            <FaDollarSign></FaDollarSign>
            <span>Pagamentos</span>
          </NavLink>

          <NavLink to="/prestadores" className="flex gap-1 items-center">
            <MdPeople></MdPeople>
            <span>Prestadores</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
