import { Text, VStack } from "@chakra-ui/react";
import { usePodcasts } from "api/hooks/podcasts/usePodcasts";
import { useMemo } from "react";

const Home = () => {
  const { data: podcasts } = usePodcasts({});
  console.log(podcasts?.feed?.entry[0].title.label);

  const podcastItems = useMemo(() => podcasts?.feed?.entry, [podcasts]);
  return (
    <VStack>
      {podcastItems?.map(podcast => (
        <Text fontSize="12px">{podcast.title.label}</Text>
      ))}
    </VStack>
  );
};

export default Home;
