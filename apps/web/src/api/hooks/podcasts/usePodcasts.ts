import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { fetcher } from "api/fetcher";

import { merge } from "utils/merge";

type Props = any;

const defaultProps: Props = {
  query: {
    limit: 100,
    genre: 1310,
  },
};

export const podcastsKey = (props: Props) =>
  [
    {
      id: "podcasts",
      scope: "podcasts",
      entity: "list",
      ...merge(defaultProps, props),
    },
  ] as const;

export const fetchPodcasts = async ({
  queryKey: [{ query }],
}: QueryFunctionContext<ReturnType<typeof podcastsKey>>) => {
  const { limit, genre } = query;

  const response: any = await fetcher(
    `/us/rss/toppodcasts/limit=${String(limit)}/genre=${String(genre)}/json`
  );
  return JSON.parse(response.contents);
};

export const usePodcasts = (props: Props) =>
  useQuery({
    queryKey: podcastsKey(props),
    queryFn: fetchPodcasts,
  });