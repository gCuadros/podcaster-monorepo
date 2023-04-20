import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  VStack,
  CardProps,
  Skeleton,
} from "@chakra-ui/react";
import { usePodcastsFilterById } from "api/hooks/podcasts/usePodcasts";
import { PodcastContentsDto } from "types";

interface Props extends CardProps {
  podcastId: string;
}

const DetailCard = ({ podcastId, ...props }: Props) => {
  const {
    data: podcastDetail,
    isLoading,
    isFetched,
  } = usePodcastsFilterById({
    filter: { id: podcastId },
  });

  const isEmpty = !isLoading && isFetched && !podcastDetail;

  if (isEmpty) return null;

  if (isLoading)
    return <Skeleton width="350px" height="500px" borderRadius="8px" />;

  return (
    <Card {...props}>
      <CardBody>
        <VStack>
          <Image
            src={podcastDetail["im:image"][0].label}
            alt={podcastDetail.title.label}
            borderRadius="lg"
            boxSize="200px"
          />
          <Divider />
          <Stack padding={2} justifyContent="flex-start" width="100%">
            <Heading size="sm">{podcastDetail.title.label}</Heading>
            <Text fontSize="12px">by {podcastDetail["im:artist"].label}</Text>
          </Stack>
          <Divider />
          <Stack padding={2} justifyContent="flex-start" width="100%">
            <Heading size="sm">Description:</Heading>
            <Text fontSize="12px">{podcastDetail.summary.label}</Text>
          </Stack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default DetailCard;
