import { Box, Flex, Spacer, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  const categorias = [
    { id: 'legumbres', nombre: 'Legumbres' },
    { id: 'lacteos', nombre: 'Lácteos' },
    { id: 'dulces', nombre: 'Dulces' },
    { id: 'harinas', nombre: 'Harinas' },
    { id: 'varios', nombre: 'Varios' },
  ];

  return (
    <Box bg="purple.400" py={4}>
      <Flex align="center" maxW="1200px" mx="auto">
        <Box>
          <Link to={"/"}>
            <Text color="black" mx={4} ml={1} fontSize={25}>
              Compras<Text as="span" fontStyle="italic">Comunitarias</Text>
            </Text>
          </Link>
        </Box>
        <Menu>
          <MenuButton as={Link} href="#" color="white" mx={4}>
            Productos-
          </MenuButton>
          <MenuList>
            {categorias.map((categoria) => (
              <MenuItem key={categoria.id} color="black">
                <Link to={`/category/${categoria.id}`}>{categoria.nombre}</Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Link to={`/about`} color="white" mx={4} className="navbar-link-prod">
          Productores-
        </Link>
        <Link href="#" color="white" mx={4} className="navbar-link">
          Info
        </Link>
        <Spacer />
        <Box>
          <CartWidget />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
