import NextLink from "next/link";
import {
  HStack,
  Card as ChakraCard,
  Text,
  VStack,
  CardBody,
} from "@chakra-ui/react";
import { usePodcastDetailsById } from "api/hooks/podcasts/usePodcastDetailsById";
import { useSlugsParams } from "api/hooks/slug";
import { EpisodeDto } from "types";
import { useMemo } from "react";
import Card from "./Card";
import Table from "./Table";

const Podcast = () => {
  const { podcastId } = useSlugsParams();
  const { data: podcast, isLoading: isPodcastLoading } = usePodcastDetailsById({
    query: { podcastId },
  });

  const podcastTotalEpisodes = useMemo(() => podcast?.resultCount, [podcast]);

  const podcastEpisodes: EpisodeDto[] = useMemo(
    () => podcast?.results,
    [podcast]
  );

  const isLoading = isPodcastLoading;
  const isEmpty = !isPodcastLoading && podcastEpisodes?.length === 0;

  return (
    <HStack
      padding={4}
      justifyContent="space-between"
      alignItems="flex-start"
      width="100%"
      gap={12}
    >
      <Card />
      <VStack width="100%" spacing={4}>
        <ChakraCard width="100%">
          <CardBody padding={2}>
            <Text fontSize="14px" fontWeight={600}>
              Episodes: {podcastTotalEpisodes}
            </Text>
          </CardBody>
        </ChakraCard>
        <Table
          podcastId={podcastId}
          podcastEpisodes={podcastEpisodes}
          isLoading={isLoading}
          isEmpty={isEmpty}
        />
      </VStack>
    </HStack>
  );
};

export default Podcast;
