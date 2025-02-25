import { useQuery } from "@tanstack/react-query";
import { Car } from "../lib/finn-cars";

export function useCars() {
  return useQuery({
    queryKey: ["cars"],
    queryFn: async (): Promise<Car[]> => {
      const response = await fetch("/api/cars", {
        cache: "force-cache",
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch cars: ${response.status}`);
      }
      return response.json();
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    gcTime: 60 * 60 * 1000, // 1 hour
  });
}
