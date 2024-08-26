import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiPinterestFill,
  RiTwitterFill,
  RiPaypalFill,
  RiMastercardFill,
  RiVisaFill,
} from "react-icons/ri";

export function Footer() {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative bg-gray-200 text-sm mt-24">
      <div className="flex flex-col md:flex-row  justify-between gap-24">
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Carvalho</div>
          </Link>
          <p>
            Rua Aristides Almeida, 960 - Santa Isabel, Teresina - PI, 64053-300
          </p>
          <span className="font-semibold">contato@carvalho.com</span>
          <span className="font-semibold">(86) 99962-0269</span>
          <div className="flex gap-6">
            <RiFacebookFill size={16} />
            <RiInstagramFill size={16} />
            <RiYoutubeFill size={16} />
            <RiPinterestFill size={16} />
            <RiTwitterFill size={16} />
          </div>
        </div>
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">EMPRESA</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="/">Sobre nós</Link>
              <Link href="/">Trabalhe conosco</Link>
              <Link href="/">Afiliados</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Entre em contato</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <h1 className="font-medium text-lg">LOJA</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="/">Produtos em destaque</Link>
              <Link href="/">Acessórios</Link>
              <Link href="/">Masculino</Link>
              <Link href="/">Feminino</Link>
              <Link href="/">Todos os produtos</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <h1 className="font-medium text-lg">AJUDA</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="/">Suporte ao cliente</Link>
              <Link href="/">Fale com a Jurema</Link>
              <Link href="/">Lojas próximas</Link>
              <Link href="/">Políticas de privacidade</Link>
              <Link href="/">Cartão presente</Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Inscreva-se</h1>
          <p>Seja o primeiro a receber todas as novidades da nossa loja </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Seu melhor e-mail"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-cartbg text-white">Ir</button>
          </div>
          <span className="font-semibold">Meios de pagamento</span>
          <div className="flex justify-between">
            <RiPaypalFill size={16} />
            <RiMastercardFill size={16} />
            <RiVisaFill size={16} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">®️ 2024 Carvalho</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Língua</span>
            <span className="font-medium">Portugês | Brasil</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Moeda</span>
            <span className="font-medium">R$ Real</span>
          </div>
        </div>
      </div>
    </div>
  );
}
