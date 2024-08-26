export function Filter() {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Tipo</option>
          <option value="jewelery">Jóia</option>
          <option value="electronics">Eletrônicos</option>
          <option value="women's clothing">Feminino</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="Preço mínimo"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="Preço máximo"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Tipo</option>
          <option value="jewelery">Jóia</option>
          <option value="electronics">Eletrônicos</option>
          <option value="women's clothing">Feminino</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Tipo</option>
          <option value="jewelery">Jóia</option>
          <option value="electronics">Eletrônicos</option>
          <option value="women's clothing">Feminino</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Tipo</option>
          <option value="jewelery">Jóia</option>
          <option value="electronics">Eletrônicos</option>
          <option value="women's clothing">Feminino</option>
        </select>
      </div>
      <div>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        >
          <option>Ordenar por</option>
          <option value="jewelery">Jóia</option>
          <option value="electronics">Eletrônicos</option>
          <option value="women's clothing">Feminino</option>
        </select>
      </div>
    </div>
  );
}
