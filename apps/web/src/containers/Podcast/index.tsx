import { useMemo } from "react";
import { EpisodeDto } from "types";

import { usePodcastDetailsById } from "api/hooks/podcasts/usePodcastDetailsById";
import { useSlugsParams } from "api/hooks/slug";

import {
  Card,
  Text,
  VStack,
  CardBody,
  Stack,
  useBreakpointValue,
  Skeleton,
} from "@chakra-ui/react";
import DetailCard from "components/Podcast/DetailCard";

import EpisodesTable from "./EpisodesTable";

const Podcast = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
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
      <VStack width="100%" maxWidth={isMobile ? "100%" : "645px"} spacing={4}>
        <Card width="100%" boxShadow={"lg"}>
          <CardBody padding={2} display="flex" alignItems="center" gap={2}>
            <Text fontSize="14px" fontWeight={600}>
              Episodes:
            </Text>
            {isLoading ? (
              <Skeleton height="15px" width="40px" />
            ) : (
              <Text as="span" fontSize="14px" fontWeight={600}>
                {podcastTotalEpisodes}
              </Text>
            )}
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
