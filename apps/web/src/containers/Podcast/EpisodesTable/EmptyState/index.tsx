import NextLink from "next/link";

import { Card, CardBody, Link, Text, VStack } from "@chakra-ui/react";

const EmptyState = () => (
  <Card boxShadow="lg">
    <CardBody>
      <VStack gap={4} alignItems="flex-start">
        <Text fontSize="16px" color="gray.600">
          The content of this podcast is not available at the moment. While the
          issue is being resolved, you can have fun exploring other podcasts.
        </Text>

        <Link
          as={NextLink}
          href="/"
          paddingY={2}
          paddingX={4}
          border="1px solid"
          borderRadius="md"
          color="white"
          backgroundColor="#3078a7"
          _hover={{ textDecoration: "none" }}
          fontSize="14px"
        >
          Keep exploring
        </Link>
      </VStack>
    </CardBody>
  </Card>
);

export default EmptyState;
