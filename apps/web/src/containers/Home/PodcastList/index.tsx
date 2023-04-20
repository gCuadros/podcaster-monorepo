import {
  Box,
  SimpleGrid,
  SimpleGridProps,
  Skeleton,
  SkeletonCircle,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { EntryDto } from "types";
import PodcastCard from "./PodcastCard";
import EmptyState from "./EmptyState";

interface Props extends SimpleGridProps {
  podcasts?: EntryDto[];
  isLoading?: boolean;
  isEmpty?: boolean;
}

const PodcastList = ({
  podcasts,
  isLoading,
  isEmpty,
  onClick,
  ...props
}: Props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isEmpty) {
    return <EmptyState />;
  }

  return (
    <SimpleGrid
      columns={isMobile ? 1 : 4}
      spacingX={4}
      spacingY={20}
      {...props}
    >
      {!isLoading
        ? podcasts?.map(podcast => (
            <PodcastCard
              key={podcast.id.attributes["im:id"]}
              podcast={podcast}
            />
          ))
        : [...Array(50)].map((_, index) => (
            <Box key={index} position="relative">
              <SkeletonCircle
                opacity="1"
                size="70"
                position="absolute"
                top="0%"
                left="50%"
                transform="translate(-50%, -50%)"
              />
              <Skeleton key={index} width="209px" height="100px" rounded="lg" />
            </Box>
          ))}
    </SimpleGrid>
  );
};

export default PodcastList;
