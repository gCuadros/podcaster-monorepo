import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { ContentsDto, FindAllPodcast } from "types";

import { fetcher } from "api/fetcher";
import { normalizeString } from "utils/normalizeString";

type Props = FindAllPodcast["request"];

const defaultProps: Props = {
  query: {
    limit: 100,
    genre: 1310,
  },
};

export const podcastsKey = () =>
  [
    {
      id: "podcasts",
      scope: "podcasts",
      entity: "list",
      ...defaultProps,
    },
  ] as const;

export const fetchPodcasts = async ({
  queryKey: [{ query }],
}: QueryFunctionContext<ReturnType<typeof podcastsKey>>) => {
  const { limit, genre } = query;

  const response: FindAllPodcast["response"] = await fetcher(
    `/us/rss/toppodcasts/limit=${String(limit)}/genre=${String(genre)}/json`
  );
  return JSON.parse(response.contents);
};

export const usePodcasts = () =>
  useQuery({
    queryKey: podcastsKey(),
    queryFn: fetchPodcasts,
  });

export const usePodcastsFilterOnClient = (props: Props) =>
  useQuery({
    queryKey: podcastsKey(),
    queryFn: fetchPodcasts,
    select: (data: ContentsDto) => {
      const filteredPodcasts = data?.feed?.entry.filter(podcast =>
        props.filter.search !== undefined
          ? normalizeString(podcast["im:name"].label).includes(
              normalizeString(props.filter.search)
            ) ||
            normalizeString(podcast["im:artist"].label).includes(
              normalizeString(props.filter.search)
            )
          : true
      );

      return filteredPodcasts;
    },
  });

export const usePodcastsFilterById = (props: Props) =>
  useQuery({
    queryKey: podcastsKey(),
    queryFn: fetchPodcasts,
    select: (data: ContentsDto) => {
      const filteredPodcast = data?.feed?.entry.find(
        podcast => podcast.id.attributes["im:id"] === props.filter.id
      );

      return filteredPodcast;
    },
    enabled: !!props.filter.id,
  });
