import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { usePodcastFilterEpisodeById } from "api/hooks/podcasts/usePodcastDetailsById";
import { useSlugsParams } from "api/hooks/slug";
import DetailCard from "containers/Podcast/DetailCard";
import parse from "html-react-parser";

const Episode = ({}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { podcastId, episodeId } = useSlugsParams();
  const { data: episode } = usePodcastFilterEpisodeById({
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
      <DetailCard podcastId={podcastId} isLink maxW="300px" />;
      <VStack width="100%" maxWidth="645px" spacing={4}>
        <Card width="100%">
          <CardHeader paddingX={4} paddingBottom={2}>
            <Text fontSize="14px" fontWeight={600}>
              {episode?.trackName}
            </Text>
          </CardHeader>
          <CardBody paddingX={4} paddingTop={0}>
            <VStack spacing={4}>
              <Text fontSize="12px">
                {episode?.description
                  ? parse(`${episode?.description}`)
                  : "Sorry, this description is not available."}
              </Text>
              <Box>{<audio src={episode?.episodeUrl} controls />}</Box>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </Stack>
  );
};

export default Episode;
