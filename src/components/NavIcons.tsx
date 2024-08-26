"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  RiUserLine,
  RiNotificationLine,
  RiShoppingCartLine,
} from "react-icons/ri";
import { CartModal } from "./CartModal";
import { useCartStore } from "@/hooks/useCartStore";

export function NavIcons() {
  const router = useRouter();
  const { counter } = useCartStore();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) router.push("/login");
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <RiUserLine
        size={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Perfil</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}

      <RiNotificationLine size={22} className="cursor-pointer" />

      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <RiShoppingCartLine size={22} className="cursor-pointer" />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-cartbg rounded-full text-sm text-white flex items-center justify-center">
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}
