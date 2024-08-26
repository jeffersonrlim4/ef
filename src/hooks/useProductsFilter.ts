"use client";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

interface useProductsFilterProps {
  categoryId?: string;
  productId?: string;
}

export const useProductsFilter = ({
  categoryId,
  productId,
}: useProductsFilterProps) => {
  const getProductsByCategoryId = useQuery({
    queryKey: ["getProductsByCategoryId"],
    queryFn: async () => {
      if (!categoryId) return;
      const { data } = await api.get(`/products/?categoryId=${categoryId}`);
      return data;
    },
  });

  const singleProductQuery = useQuery({
    queryKey: ["singleProduct"],
    queryFn: async () => {
      if (!productId) return;
      const { data } = await api.get(`/products/${productId}`);
      return data;
    },
  });

  const { data: getProductsByCategory } = getProductsByCategoryId;
  const { data: singleProduct } = singleProductQuery;

  return { getProductsByCategory, singleProduct };
};
