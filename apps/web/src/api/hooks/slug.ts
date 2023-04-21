import { ParsedUrlQuery } from "querystring";

import { useRouter } from "next/router";

//hook para obtener los slugs que sabemos que existen en nuestro site.
export const useSlugsParams = (): any => {
  const { query, ...props } = useRouter();

  return {
    ...slugsParams(query),
    ...props,
  };
};

export const slugsParams = (query: ParsedUrlQuery) => ({
  podcastId:
    query.podcastId !== "undefined" ? (query.podcastId as string) : undefined,
  episodeId:
    query.episodeId !== "undefined" ? (query.episodeId as string) : undefined,
});
