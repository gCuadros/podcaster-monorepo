import NextLink from "next/link";
import {
  HStack,
  Card,
  Text,
  VStack,
  CardBody,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { usePodcastDetailsById } from "api/hooks/podcasts/usePodcastDetailsById";
import { useSlugsParams } from "api/hooks/slug";
import { EpisodeDto } from "types";
import { useMemo } from "react";
import DetailCard from "./DetailCard";
import EpisodesTable from "./EpisodesTable";

const Podcast = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
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
    <Stack
      flexDirection={isMobile ? "column" : "row"}
      padding={4}
      justifyContent="space-between"
      alignItems="flex-start"
      width="100%"
      gap={8}
    >
      <DetailCard
        podcastId={podcastId}
        width="100%"
        maxW={isMobile ? "100%" : "300px"}
      />
      <VStack width="100%" maxWidth="645px" spacing={4}>
        <Card width="100%">
          <CardBody padding={2}>
            <Text fontSize="14px" fontWeight={600}>
              Episodes: {podcastTotalEpisodes}
            </Text>
          </CardBody>
        </Card>
        <EpisodesTable
          podcastId={podcastId}
          podcastEpisodes={podcastEpisodes}
          isLoading={isLoading}
          isEmpty={isEmpty}
        />
      </VStack>
    </Stack>
  );
};

export default Podcast;
