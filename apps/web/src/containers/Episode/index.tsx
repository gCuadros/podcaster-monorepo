import NextLink from "next/link";

import { usePodcastFilterEpisodeById } from "api/hooks/podcasts/usePodcastDetailsById";
import { useSlugsParams } from "api/hooks/slug";

import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Link,
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
            <VStack spacing={8} alignItems="flex-start">
              {isLoading ? (
                <SkeletonText />
              ) : episode.description ? (
                <div
                  style={{
                    fontSize: "12px",
                    lineHeight: "18px",
                  }}
                  dangerouslySetInnerHTML={{ __html: episode?.description }}
                />
              ) : (
                <Text
                  fontSize="12px"
                  lineHeight="18px"
                  fontStyle="italic"
                  color="gray.600"
                >
                  This description is not available.
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
                  <VStack spacing={4}>
                    <Text fontSize="16px" lineHeight="18px" color="gray.600">
                      Sorry, this episode is not available.
                    </Text>
                    <Link
                      as={NextLink}
                      href={`/podcast/${podcastId}`}
                      paddingY={2}
                      paddingX={4}
                      border="1px solid"
                      borderRadius="md"
                      color="white"
                      backgroundColor="#3078a7"
                      _hover={{ textDecoration: "none" }}
                      fontSize="14px"
                    >
                      Ver otros episodios
                    </Link>
                  </VStack>
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
