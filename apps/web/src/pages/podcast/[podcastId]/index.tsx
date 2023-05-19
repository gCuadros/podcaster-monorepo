import { ParsedUrlQuery } from "querystring";

import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { PodcastContentsDto } from "types";

import { fetchPodcastDetail } from "api/hooks/podcasts/usePodcastDetailsById";
import { podcastDetailKey } from "api/hooks/podcasts/usePodcastDetailsById";

import Podcast from "containers/Podcast";

interface Params extends ParsedUrlQuery {
  podcastId: string;
}

interface Props {
  podcast?: PodcastContentsDto;
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
    revalidate: 60 * 60 * 24, // 1 day
  };
};

const Page = ({ podcast }: Props) => {
  return (
    <>
      <NextSeo
        title="Podcast Details"
        description={`Explore the fascinating world of this podcast through its ${
          podcast?.resultCount || ""
        } episodes. Join as they delve into  with insightful discussions and expert guests. Listen now for free and subscribe for more engaging content!`}
        openGraph={{
          title: "Podcast Details",
          description: `Explore the fascinating world of this podcast through its ${
            podcast?.resultCount || ""
          } episodes. Join as they delve into  with insightful discussions and expert guests. Listen now for free and subscribe for more engaging content!`,
        }}
        twitter={{
          handle: "@podcaster",
          site: "@podcaster",
          cardType: "summary_large_image",
        }}
      />
      <Podcast />
    </>
  );
};

export default Page;
