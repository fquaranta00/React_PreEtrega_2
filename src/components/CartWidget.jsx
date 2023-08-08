import { Box, Icon, Text } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
  return (
    <Box display="flex" alignItems="center">
      <Icon as={FiShoppingCart} boxSize={6} />
      <Text ml={2}>Carrito</Text>
      <Text ml={2}>5</Text>
    </Box>
  );
};

export default CartWidget;
