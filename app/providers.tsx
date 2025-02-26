"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the devtools to avoid issues in production
const ReactQueryDevtools = dynamic(
  () =>
    import("@tanstack/react-query-devtools").then(
      (mod) => mod.ReactQueryDevtools
    ),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 6 * 60 * 60 * 1000, // 6 hours
            gcTime: 24 * 60 * 60 * 1000, // 24 hours
            refetchOnWindowFocus: false, // Disable refetching when window regains focus
            refetchOnReconnect: false, // Disable refetching when reconnecting
            retry: false, // Disable automatic retries on failure
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
