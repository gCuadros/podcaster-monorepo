import { MouseEventHandler } from "react";

import { Button, Icon, Text, VStack } from "@chakra-ui/react";
import { BsExclamationCircle } from "react-icons/bs";

interface Props {
  onClick: MouseEventHandler;
}

const EmptyState = ({ onClick }) => (
  <VStack margin="0 auto" gap={4} maxW="800px">
    <Icon as={BsExclamationCircle} fontSize="20px" />
    <Text fontSize="28px" textAlign="center">
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
