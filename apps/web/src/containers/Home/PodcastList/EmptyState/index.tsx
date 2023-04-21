import { MouseEventHandler } from "react";

import { Button, Text, VStack } from "@chakra-ui/react";

interface Props {
  onClick: MouseEventHandler;
}

const EmptyState = ({ onClick }) => (
  <VStack margin="0 auto" spacing={4}>
    <Text maxWidth="450px" textAlign="center">
      Lo siento, no se han encontrado resultados para su búsqueda. Intente una
      búsqueda diferente
    </Text>
    <Button
      backgroundColor="#3078a7"
      color="white"
      _hover={{ opacity: "0.8" }}
      onClick={onClick}
    >
      Limpiar busqueda
    </Button>
  </VStack>
);

export default EmptyState;
