import { ParsedUrlQuery } from "querystring";

import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { EpisodeDto } from "types";

import {
  fetchPodcastDetail,
  podcastDetailKey,
} from "api/hooks/podcasts/usePodcastDetailsById";

import Episode from "containers/Episode";

interface Params extends ParsedUrlQuery {
  podcastId: string;
  episodeId: string;
}

interface Props {
  podcast: EpisodeDto;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const { podcastId, episodeId } = params as Params;

  let podcast;

  podcast = await fetchPodcastDetail({
    queryKey: podcastDetailKey({
      query: { podcastId: podcastId },
    }),
    meta: undefined,
  });

  podcast = podcast.results.find(
    episode => String(episode.trackId) === episodeId
  );

  queryClient.setQueryData(
    podcastDetailKey({ query: { podcastId: podcastId } }),
    podcast
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      podcast,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

const Page = ({ podcast }: Props) => {
  return (
    <>
      <NextSeo
        title={` ${podcast?.trackName || "Episode"} - Podcast on Podcaster`}
        description={`Listen the episodes of ${
          podcast?.collectionName || "this episode"
        }`}
        openGraph={{
          title: ` ${podcast?.trackName || "Episode"} - Podcast on Podcaster`,
          description: `Listen the episodes of ${
            podcast?.collectionName || "this episode"
          }`,
        }}
        twitter={{
          handle: "@podcaster",
          site: "@podcaster",
          cardType: "summary_large_image",
        }}
      />
      <Episode />
    </>
  );
};

export default Page;
