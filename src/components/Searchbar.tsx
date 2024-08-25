"use client";
import { useRouter } from "next/navigation";
import { RiSearchLine } from "react-icons/ri";

export function Searchbar() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) router.push(`/list?=${name}`);
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-200 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Nome do produto"
        className="flex-1 bg-transparent outline-none"
        name="name"
      />
      <button className="cursor-pointer">
        <RiSearchLine width={16} height={16} />
      </button>
    </form>
  );
}
