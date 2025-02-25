import { useMutation, useQueryClient } from "@tanstack/react-query";

interface RefreshResult {
  success: boolean;
  count: number;
  message: string;
  duration: string;
  timestamp: string;
}

export function useRefreshCars() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (): Promise<RefreshResult> => {
      const response = await fetch("/api/cars/refresh", {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`Failed to refresh cars: ${response.status}`);
      }
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch the cars query
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });
}
