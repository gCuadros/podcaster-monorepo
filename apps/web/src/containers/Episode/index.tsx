import parse from "html-react-parser";

import { usePodcastFilterEpisodeById } from "api/hooks/podcasts/usePodcastDetailsById";
import { useSlugsParams } from "api/hooks/slug";

import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import DetailCard from "components/Podcast/DetailCard";

const Episode = ({}) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
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
        width="100%"
        maxW={isMobile ? "100%" : "300px"}
      />
      ;
      <VStack width="100%" maxWidth={isMobile ? "100%" : "645px"} spacing={4}>
        <Card width="100%" boxShadow={"lg"}>
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
            <VStack spacing={4} w="100%">
              {isLoading ? (
                <SkeletonText />
              ) : (
                <Text fontSize="12px" lineHeight="18px">
                  {episode?.description
                    ? parse(`${episode?.description}`)
                    : "Sorry, this description is not available."}
                </Text>
              )}
              <Flex
                w="100%"
                justifyContent="center"
                alignItems="center"
                padding={4}
              >
                {isLoading ? (
                  <Skeleton width="300px" height="50px" borderRadius="50px" />
                ) : episode?.episodeUrl ? (
                  <audio
                    src={episode?.episodeUrl}
                    controls
                    style={{ width: "100%", maxWidth: "500px" }}
                  />
                ) : (
                  <Text>Sorry, this episode is not available.</Text>
                )}
              </Flex>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Stack>
  );
};

export default Episode;
