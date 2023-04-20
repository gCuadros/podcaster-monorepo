import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

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
});