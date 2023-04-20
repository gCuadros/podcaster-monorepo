import { Badge, HStack, Text, VStack } from "@chakra-ui/react";
import {
  usePodcasts,
  usePodcastsFilterOnClient,
} from "api/hooks/podcasts/usePodcasts";
import { useMemo, useState } from "react";
import { EntryDto } from "types";
import PodcastList from "./PodcastList";
import SearchBar from "components/SearchBar";

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
      padding={12}
      backgroundColor="white"
      borderRadius="8px"
      spacing={16}
    >
      <HStack width="100%" justifyContent="flex-end">
        <HStack>
          <Badge
            color="white"
            backgroundColor="#3078a7"
            fontSize="12px"
            borderRadius="8px"
            paddingY={1}
            paddingX={4}
            minWidth="52px"
            minHeight="26px"
            textAlign="center"
          >
            {podcasts?.length}
          </Badge>
          <SearchBar value={search} onChange={setSearch} maxW="450px" />
        </HStack>
      </HStack>
      <PodcastList
        podcasts={podcasts}
        isLoading={isLoading}
        isEmpty={isEmpty}
        onClick={() => setSearch("")}
      />
    </VStack>
  );
};

export default Home;
