import { MouseEventHandler } from "react";

import { Button, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { MdOutlineSearchOff } from "react-icons/md";

interface Props {
  search?: string;
  onClick: MouseEventHandler;
}

const EmptyState = ({ search, onClick }: Props) => (
  <VStack margin="0 auto" gap={4} maxW="800px">
    <Icon as={MdOutlineSearchOff} fontSize="32px" />
    <HStack>
      <Text fontSize="24px" textAlign="center" color="gray.600">
        No results found for
      </Text>
      <Text as="strong" fontStyle="italic" fontSize="24px" color="gray.600">
        {`"${search}"`}.
      </Text>
    </HStack>
    <Text fontSize="16px" textAlign="center" fontWeight={500}>
      Try checking your spelling or expanding your search.
    </Text>

    <Button
      backgroundColor="#3078a7"
      color="white"
      fontSize="14px"
      _hover={{ opacity: "0.8" }}
      onClick={onClick}
    >
      See all
    </Button>
  </VStack>
);

export default EmptyState;
