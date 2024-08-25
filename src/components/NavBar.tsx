import Link from "next/link";
import { Menu } from "./Menu";
import { RiShoppingCartFill } from "react-icons/ri";
import { Searchbar } from "./Searchbar";
import { NavIcons } from "./NavIcons";

export function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full flex  items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Carvalho</div>
        </Link>
        <Menu />
      </div>

      {/* full */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <RiShoppingCartFill width={24} height={24} />
            <div className="text-2xl tracking-wide"> Carvalho</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/"> Home</Link>
            <Link href="/"> Produtos</Link>
            <Link href="/"> Sobre</Link>
            <Link href="/"> Contato</Link>
          </div>
        </div>
        <div className="w-2/3 flex items-center justify-between gap-8">
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
