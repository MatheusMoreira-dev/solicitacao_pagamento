import favicon from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { MdPeople, MdOutlineAttachMoney } from "react-icons/md";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { IoMdExit } from "react-icons/io";
import { useAuth } from "@/hooks/useAuth";

function Header() {
  const { user, signOut } = useAuth();
  const simbol = user.displayName ?? user.email;

  return (
    <header className="sticky top-0 h-14 bg-primary z-50 py-1 shrink-0 shadow-sm mb-5">
      <div className="flex items-center justify-between size-full mx-auto px-6 relative">
        <div className="size-full flex items-center">
          <img src={favicon} alt="" className="object-contain h-full" />

          <h1 className="text-background mx-5 text-sm font-bold">
            Solicitação de Pagamento
          </h1>
        </div>

        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-2 text-sm text-background">
          <NavLink
            to="/despesas"
            className={({ isActive }) =>
              `flex items-center gap-1 px-2 py-1 ${
                isActive
                  ? "text-background border-b-3"
                  : "hover:text-background text-background/60"
              }`
            }
          >
            <MdOutlineAttachMoney />
            <span>Despesas</span>
          </NavLink>

          <NavLink
            to="/solicitacoes"
            className={({ isActive }) =>
              `flex items-center gap-1 px-2 py-1 ${
                isActive
                  ? "text-background border-b-3"
                  : "hover:text-background text-background/60"
              }`
            }
          >
            <IoIosSend />
            <span>Solicitações</span>
          </NavLink>

          <NavLink
            to="/prestadores"
            className={({ isActive }) =>
              `flex items-center gap-1 px-2 py-1 ${
                isActive
                  ? "text-background border-b-3"
                  : "hover:text-background text-background/60"
              }`
            }
          >
            <MdPeople></MdPeople>
            <span>Prestadores</span>
          </NavLink>
        </nav>

        <div className="flex items-center gap-0.5">
          <Avatar>
            <AvatarImage src={user?.photoURL}></AvatarImage>
            <AvatarFallback>{simbol.slice(0, 2)?.toUpperCase()}</AvatarFallback>
          </Avatar>

          <Button size="sm" onClick={signOut}>
            Sair
            <IoMdExit />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
