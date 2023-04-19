import { Text, VStack } from "@chakra-ui/react";
import { usePodcasts } from "api/hooks/podcasts/usePodcasts";
import { useMemo } from "react";
import { EntryDto } from "types";

const Home = () => {
  const { data: podcasts } = usePodcasts({});

  const podcastItems: EntryDto[] = useMemo(
    () => podcasts?.feed?.entry,
    [podcasts]
  );
  return (
    <VStack>
      {podcastItems?.map(podcast => (
        <Text fontSize="12px">{podcast.title.label}</Text>
      ))}
    </VStack>
  );
};

export default Home;
