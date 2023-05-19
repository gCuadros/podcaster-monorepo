import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticProps } from "next";

import { podcastsKey } from "api/hooks/podcasts/usePodcasts";
import { fetchPodcasts } from "api/hooks/podcasts/usePodcasts";

import Home from "containers/Home";

export const getStaticProps: GetStaticProps = async ({}) => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery(podcastsKey(), fetchPodcasts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

const Page = () => <Home />;

export default Page;
