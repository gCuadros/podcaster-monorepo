import { ParsedUrlQuery } from "querystring";

import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import { fetchPodcastDetail } from "api/hooks/podcasts/usePodcastDetailsById";
import { podcastDetailKey } from "api/hooks/podcasts/usePodcastDetailsById";

import Podcast from "containers/Podcast";

interface Params extends ParsedUrlQuery {
  podcastId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const { podcastId } = params as Params;

  let podcast;

  podcast = await fetchPodcastDetail({
    queryKey: podcastDetailKey({
      query: { podcastId: podcastId },
    }),
    meta: undefined,
  });

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
        description="Explore the fascinating world of [podcast name] with our latest episode. Join [host name] as they delve into [episode topic] with insightful discussions and expert guests. Listen now for free and subscribe for more engaging content!"
        openGraph={{
          title: "Podcaster.com",
          description:
            "enjoy the fascinating world of this podcast with our latest episode. Listen now for free and subscribe for more engaging content!",
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
      <Podcast />
    </>
  );
};

export default Page;
