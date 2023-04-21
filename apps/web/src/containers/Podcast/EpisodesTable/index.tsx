import NextLink from "next/link";
import { EpisodeDto } from "types";

import { getDateInfo } from "utils/useDateinfo";

import {
  Card,
  CardBody,
  Table,
  Link,
  Skeleton,
  TableContainer,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Tooltip,
} from "@chakra-ui/react";

interface Props extends TableProps {
  podcastId?: string;
  podcastEpisodes?: EpisodeDto[];
  isLoading?: boolean;
  isEmpty?: boolean;
}
const EpisodesTable = ({
  podcastId,
  podcastEpisodes,
  isLoading,
  isEmpty,
}: Props) => {
  const formatDate = (dateInMs: string) => {
    const { day, month, year } = getDateInfo(dateInMs);

    return `${day}/${month}/${year}`;
  };

  const formatTimeInMs = (TimeInMs: number) => {
    const { hours, minutes, seconds } = getDateInfo(TimeInMs);

    return `${hours && `${hours}:`}${minutes && `${minutes}:`}${
      seconds && seconds
    }`;
  };

  return (
    <Card width="100%" boxShadow={"lg"}>
      <CardBody padding={2}>
        <TableContainer>
          <Table
            size="sm"
            variant="striped"
            colorScheme={isLoading ? "simple" : "gray"}
          >
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Date</Th>
                <Th>Duration</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!isLoading
                ? podcastEpisodes?.map(episode => (
                    <Tr key={episode.trackId} border="none">
                      <Td textAlign="start" maxWidth="425px">
                        <Link
                          as={NextLink}
                          href={`/podcast/${podcastId}/episode/${episode.trackId}`}
                          transition="0.3s all ease"
                          _hover={{ textDecoration: "none", opacity: "0.6" }}
                        >
                          <Tooltip
                            label={episode.trackName}
                            aria-label="name of episode"
                          >
                            <Text noOfLines={1} display="block">
                              {episode.trackName}
                            </Text>
                          </Tooltip>
                        </Link>
                      </Td>
                      <Td textAlign="end">
                        {episode.releaseDate && formatDate(episode.releaseDate)}
                      </Td>
                      <Td textAlign="end">
                        {episode.trackTimeMillis &&
                          formatTimeInMs(episode.trackTimeMillis)}
                      </Td>
                    </Tr>
                  ))
                : [...Array(50)].map((_, index) => (
                    <Tr key={index}>
                      <Td>
                        <Skeleton width="300px" height="15px" />
                      </Td>
                      <Td>
                        <Skeleton width="175px" height="15px" />
                      </Td>
                      <Td>
                        <Skeleton width="99px" height="15px" />
                      </Td>
                    </Tr>
                  ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default EpisodesTable;
