"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <RiMenuLine
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/"> Home</Link>
          <Link href="/"> Produtos</Link>
          <Link href="/"> Sobre</Link>
          <Link href="/"> Contato</Link>
          <Link href="/"> Lgout</Link>
          <Link href="/"> Carrinho (1)</Link>
        </div>
      )}
    </div>
  );
}
