import parse from "html-react-parser";

import { usePodcastFilterEpisodeById } from "api/hooks/podcasts/usePodcastDetailsById";
import { useSlugsParams } from "api/hooks/slug";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  SkeletonText,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import DetailCard from "containers/Podcast/DetailCard";

const Episode = ({}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { podcastId, episodeId } = useSlugsParams();
  const { data: episode, isLoading } = usePodcastFilterEpisodeById({
    query: { podcastId },
    filter: { id: episodeId },
  });

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
        isLink
        maxW={isMobile ? "100%" : "300px"}
      />
      ;
      <VStack width="100%" maxWidth="645px" spacing={4}>
        <Card width="100%">
          <CardHeader paddingX={4} paddingBottom={2}>
            {isLoading ? (
              <SkeletonText />
            ) : (
              <Text fontSize="14px" fontWeight={600}>
                {episode?.trackName}
              </Text>
            )}
          </CardHeader>
          <CardBody paddingX={4} paddingTop={0}>
            <VStack spacing={4}>
              {isLoading ? (
                <SkeletonText />
              ) : (
                <Text fontSize="12px">
                  {episode?.description
                    ? parse(`${episode?.description}`)
                    : "Sorry, this description is not available."}
                </Text>
              )}

              <Box>{<audio src={episode?.episodeUrl} controls />}</Box>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Stack>
  );
};

export default Episode;
