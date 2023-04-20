import {
  Card,
  CardBody,
  CardProps,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { EntryDto } from "types";

interface Props extends CardProps {
  podcast?: EntryDto;
}

const PodcastCard = ({ podcast }: Props) => {
  if (!podcast) return null;

  return (
    <Card
      position="relative"
      boxShadow={"lg"}
      border="1px solid"
      borderColor="gray.100"
      cursor="pointer"
      transition="0.3s ease all"
      _hover={{ boxShadow: "2xl" }}
    >
      <CardBody justifyContent="center">
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
          maxWidth="70px"
        />
        <Tooltip label={podcast["im:name"].label} aria-label="name of podcast">
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

        <Text fontSize="11px" noOfLines={1} textAlign="center" color="gray.600">
          Author: {podcast["im:name"].label}
        </Text>
      </CardBody>
    </Card>
  );
};

export default PodcastCard;
