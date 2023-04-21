import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import { podcastsKey } from "api/hooks/podcasts/usePodcasts";
import { fetchPodcasts } from "api/hooks/podcasts/usePodcasts";

import Home from "containers/Home";

export const getStaticProps: GetStaticProps = async ({}) => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery(podcastsKey({}), fetchPodcasts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

const Page = () => {
  return (
    <>
      <NextSeo
        title="Podcaster"
        description="Discover engaging and informative podcasts on our site. From interviews to storytelling, our podcasts cover a wide range of topics. Listen now for free!"
        openGraph={{
          title: "Podcaster.com",
          description:
            "Discover engaging and informative podcasts on our site. From interviews to storytelling, our podcasts cover a wide range of topics. Listen now for free!",
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
      <Home />;
    </>
  );
};

export default Page;
