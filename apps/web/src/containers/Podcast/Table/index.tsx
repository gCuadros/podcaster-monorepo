import {
  Card,
  CardBody,
  Table as ChakraTable,
  Link,
  Skeleton,
  TableContainer,
  TableProps,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { EpisodeDto } from "types";
import NextLink from "next/link";
import { getDateInfo } from "utils/useDateinfo";

interface Props extends TableProps {
  podcastId?: string;
  podcastEpisodes?: EpisodeDto[];
  isLoading?: boolean;
  isEmpty?: boolean;
}
const Table = ({ podcastId, podcastEpisodes, isLoading, isEmpty }: Props) => {
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
    <Card width="100%">
      <CardBody padding={2}>
        <TableContainer>
          <ChakraTable
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
                    <Tr key={episode.trackId}>
                      <Td textAlign="start">
                        <Link
                          as={NextLink}
                          href={`/podcast/${podcastId}/episode/${episode.trackId}`}
                          display="block"
                          width="100%"
                        >
                          {episode.trackName}
                        </Link>
                      </Td>
                      <Td textAlign="end">{formatDate(episode.releaseDate)}</Td>
                      <Td textAlign="end">
                        {formatTimeInMs(episode.trackTimeMillis)}
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
          </ChakraTable>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Table;
