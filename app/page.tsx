import Image from "next/image";

export default function Home() {
  return (
    <nav className="bg-primary-orange text-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo simples laranja */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF8C00] rounded-md" />
          <span className="font-semibold hidden sm:block">Itau-like</span>
        </a>


        {/* Menu desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:underline">Conta</a>
          <a href="#" className="hover:underline">Cartões</a>
          <a href="#" className="hover:underline">Empréstimos</a>
          <a href="#" className="hover:underline">Investimentos</a>
        </div>


        {/* Botão login */}
        <a
          href="#"
          className="hidden md:block bg-[#FF8C00] text-[#072B5A] px-3 py-1 rounded-md font-semibold"
        >
          Acessar
        </a>


        {/* Botão mobile */}
        <button

          className="md:hidden p-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>


      {/* Menu mobile */}

      <div className="md:hidden bg-[#072B5A] border-t border-white/10">
        <div className="flex flex-col p-4 gap-3 text-sm">
          <a href="#" className="hover:underline">Conta</a>
          <a href="#" className="hover:underline">Cartões</a>
          <a href="#" className="hover:underline">Empréstimos</a>
          <a href="#" className="hover:underline">Investimentos</a>
          <a
            href="#"
            className="bg-[#FF8C00] text-[#072B5A] text-center py-2 rounded-md font-semibold"
          >
            Acessar
          </a>
        </div>
      </div>

    </nav>
  );
}
