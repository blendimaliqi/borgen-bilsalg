import { useQuery } from "@tanstack/react-query";
import type { Car } from "../lib/car-types";

export function useCars() {
  return useQuery({
    queryKey: ["cars"],
    queryFn: async (): Promise<Car[]> => {
      const response = await fetch("/api/cars", {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch cars: ${response.status}`);
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    gcTime: 15 * 60 * 1000,
  });
}
