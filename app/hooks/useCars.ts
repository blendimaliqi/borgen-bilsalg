import { useQuery } from "@tanstack/react-query";
import { Car } from "../lib/finn-cars";

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
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });
}
