import favicon from "../assets/logo.png";

function Header() {
  return (
    <header className="sticky top-0 h-14 bg-primary z-50 py-1 shrink-0 shadow-sm mb-5">
      <div className="flex items-center size-full mx-auto px-6 ">
        <img src={favicon} alt="" className="object-contain h-full" />
        <h1 className="text-background mx-5 text-sm font-bold">
          Solicitação de Pagamento
        </h1>
      </div>
    </header>
  );
}

export default Header;
