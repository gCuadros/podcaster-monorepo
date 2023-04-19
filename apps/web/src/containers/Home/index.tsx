import { Text, VStack } from "@chakra-ui/react";
import { usePodcasts } from "api/hooks/podcasts/usePodcasts";
import { useMemo } from "react";
import { EntryDto } from "types";
import PodcastList from "./PodcastList";

const Home = () => {
  const { data: podcasts } = usePodcasts({});

  const podcastItems: EntryDto[] = useMemo(
    () => podcasts?.feed?.entry,
    [podcasts]
  );
  return (
    <VStack padding={12} backgroundColor="white" borderRadius="8px">
      <PodcastList podcasts={podcastItems} />
    </VStack>
  );
};

export default Home;
