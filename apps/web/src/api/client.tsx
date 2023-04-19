import { createStandaloneToast } from "@chakra-ui/react";
import { Query, QueryCache, QueryClient } from "@tanstack/react-query";

const { toast } = createStandaloneToast();

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 60 * 60 * 1000 * 24, // 1 day
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      if (error.status === 401) {
        client.resetQueries({
          predicate: (query: Query<any, any, any, any>) =>
            query.queryKey[0].isPrivate,
        });
      }

      if (query.state.data !== undefined) {
        toast({
          title: "Algo falló",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    },
  }),
});
