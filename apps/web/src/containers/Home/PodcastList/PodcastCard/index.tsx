import NextLink from "next/link";
import { EntryDto } from "types";

import {
  Card,
  CardBody,
  CardProps,
  Image,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";

interface Props extends CardProps {
  podcast?: EntryDto;
}

const PodcastCard = ({ podcast }: Props) => {
  if (!podcast) return null;

  return (
    <Link
      as={NextLink}
      href={`/podcast/${podcast.id.attributes["im:id"]}`}
      _hover={{ textDecoration: "none" }}
    >
      <Card
        position="relative"
        boxShadow={"lg"}
        border="1px solid"
        borderColor="gray.100"
        cursor="pointer"
        transition="0.3s ease all"
        _hover={{ boxShadow: "2xl" }}
        background="radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)"
      >
        <CardBody justifyContent="center" padding={8}>
          <Image
            src={podcast["im:image"][0].label}
            alt={podcast["im:name"].label}
            position="absolute"
            top="0%"
            left="50%"
            transform="translate(-50%, -50%)"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="50%"
            width="100%"
            maxWidth="80px"
          />
          <Tooltip
            label={podcast["im:name"].label}
            aria-label="name of podcast"
          >
            <Text
              fontSize="12px"
              fontWeight={600}
              marginTop={6}
              noOfLines={1}
              textTransform="uppercase"
              textAlign="center"
            >
              {podcast["im:name"].label}
            </Text>
          </Tooltip>

          <Text
            fontSize="11px"
            noOfLines={1}
            textAlign="center"
            color="gray.600"
          >
            Author: {podcast["im:artist"].label}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default PodcastCard;
