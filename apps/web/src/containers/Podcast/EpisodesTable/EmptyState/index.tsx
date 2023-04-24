import NextLink from "next/link";

import { Card, CardBody, Link, Text, VStack } from "@chakra-ui/react";

const EmptyState = () => (
  <Card boxShadow="lg">
    <CardBody>
      <VStack gap={4} alignItems="flex-start">
        <Text fontSize="16px" color="gray.600">
          El contenido de este podcast no esta disponible en este momento.
          Mientras se soluciona el problema puedes divertirte explorando otros
          podcasts.
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
          Seguir explorando
        </Link>
      </VStack>
    </CardBody>
  </Card>
);

export default EmptyState;
