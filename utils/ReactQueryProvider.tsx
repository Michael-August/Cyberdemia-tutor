'use client';
import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function QueryClientWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
