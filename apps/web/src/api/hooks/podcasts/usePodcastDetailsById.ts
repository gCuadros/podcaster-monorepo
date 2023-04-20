import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { fetcher } from "api/fetcher";
import {
  EpisodeContentsDto,
  FindAllPodcast,
  FindPodcast,
  PodcastContentsDto,
} from "types";

type Props = FindPodcast["request"];

export const podcastDetailKey = (props: Props) =>
  [
    {
      id: "podcast",
      scope: "podcast",
      entity: "detail",
      ...props,
    },
  ] as const;

export const fetchPodcastDetail = async ({
  queryKey: [{ query }],
}: QueryFunctionContext<ReturnType<typeof podcastDetailKey>>) => {
  const { podcastId } = query;

  const response: FindPodcast["response"] = await fetcher(
    `/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
  );
  return JSON.parse(response.contents) as PodcastContentsDto;
};

export const usePodcastDetailsById = (props: Props) =>
  useQuery({
    queryKey: podcastDetailKey(props),
    queryFn: fetchPodcastDetail,
    enabled: !!props.query.podcastId,
  });

export const usePodcastFilterEpisodeById = (props: Props) =>
  useQuery({
    queryKey: podcastDetailKey(props),
    queryFn: fetchPodcastDetail,
    select: (data: EpisodeContentsDto) => {
      const filteredEpisode = data?.results.find(
        episode => String(episode.trackId) === props.filter.id
      );

      return filteredEpisode;
    },
    enabled: !!props.query.podcastId && !!props.filter.id,
  });
