import { useState } from "react";

import { usePodcastsFilterOnClient } from "api/hooks/podcasts/usePodcasts";

import { HStack, Icon, Skeleton, Text, VStack } from "@chakra-ui/react";
import SearchBar from "components/SearchBar";
import { BiPodcast } from "react-icons/bi";

import PodcastList from "./PodcastList";

const Home = () => {
  const [search, setSearch] = useState("");
  const { data: podcasts, isLoading: isPodcastLoading } =
    usePodcastsFilterOnClient({
      filter: { search },
    });

  const isLoading = isPodcastLoading;
  const isEmpty = !isPodcastLoading && podcasts?.length === 0;

  return (
    <VStack
      paddingY={8}
      paddingX={4}
      backgroundColor="white"
      borderRadius="8px"
      gap={20}
    >
      <HStack
        width="100%"
        maxW="380px"
        alignSelf="flex-end"
        justifyContent="flex-end"
        spacing={4}
      >
        <HStack
          spacing={3}
          width="100%"
          minWidth="67px"
          maxWidth="100px"
          height={10}
          border="1px solid"
          borderColor="gray.300"
          borderRadius="md"
          paddingX={2}
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={BiPodcast} fontSize="18px" color="#3078a7" />
          {isLoading ? (
            <Skeleton height="15px" width="40px" />
          ) : (
            <Text fontSize="14px"> {podcasts?.length}</Text>
          )}
        </HStack>

        <SearchBar
          value={search}
          onChange={setSearch}
          pointerEvents={isLoading ? "none" : "inherit"}
        />
      </HStack>
      <PodcastList
        podcasts={podcasts}
        isLoading={isLoading}
        isEmpty={isEmpty}
        search={search}
        onClick={() => setSearch("")}
      />
    </VStack>
  );
};

export default Home;
