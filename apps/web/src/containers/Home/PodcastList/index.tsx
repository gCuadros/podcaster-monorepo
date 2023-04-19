import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { EntryDto } from "types";
import PodcastCard from "./PodcastCard";

interface Props extends SimpleGridProps {
  podcasts?: EntryDto[];
}

const PodcastList = ({ podcasts, ...props }: Props) => {
  return (
    <SimpleGrid columns={4} spacingX={4} spacingY={20} {...props}>
      {podcasts?.map(podcast => (
        <PodcastCard podcast={podcast} />
      ))}
    </SimpleGrid>
  );
};

export default PodcastList;
