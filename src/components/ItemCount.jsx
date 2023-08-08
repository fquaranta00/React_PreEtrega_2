import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const reset = () => {
    setContador(0);
  };

  return (
    <Box textAlign="center" mt={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Cantidad: {contador}
      </Text>
      <Button colorScheme="blue" onClick={sumar} mr={2}>
        +
      </Button>
      <Button colorScheme="blue" onClick={reset} mr={2}>
        Reset
      </Button>
      <Button colorScheme="blue" onClick={restar}>
        -
      </Button>
    </Box>
  );
};

export default ItemCount;
