import { ParsedUrlQuery } from "querystring";

import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import {
  fetchPodcastDetail,
  podcastDetailKey,
} from "api/hooks/podcasts/usePodcastDetailsById";

import Episode from "containers/Episode";

interface Params extends ParsedUrlQuery {
  podcastId: string;
  episodeId: string;
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
    },
  };
};

const Page = () => {
  return (
    <>
      <NextSeo
        title="Podcaster"
        description="Join in this exciting episode. Gain valuable insights and unique perspectives as they discuss. Tune in now and join the conversation!"
        openGraph={{
          title: "Podcaster.com",
          description:
            "Join in this exciting episode. Gain valuable insights and unique perspectives as they discuss. Tune in now and join the conversation!",
          images: [
            {
              url: "/assets/logo.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/assets/logo.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "Podcaster",
        }}
        twitter={{
          site: "@podcaster",
          cardType: "summary_large_image",
        }}
      />
      <Episode />
    </>
  );
};

export default Page;
