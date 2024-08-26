"use client";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const getProductsQuery = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get("/products?limit=10");
      return data;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  const getCategoryQuery = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await api.get("/categories");
      return data;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  const { data: getProducts } = getProductsQuery;
  const { data: getCategory } = getCategoryQuery;

  return { getProducts, getCategory };
};
