import { useParams } from 'react-router-dom';
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Center } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const numericId = parseInt(id); // Convierte el id a un número
  const filteredProducts = productos.filter((producto) => producto.id === numericId);
  console.log(filteredProducts)
  return (
    <div>
      {filteredProducts.map((p) => (
        <div key={p.id}>
          <Center p='1rem'>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={`../src/assets/img/${p.img}`}
                alt='varias'
              />
              <Stack>
                <CardBody>
                  <Heading size='md'>{p.nombre}</Heading>
                  <Text py='2'>{p.description}</Text>
                  <Text>{p.category}</Text>
                </CardBody>
                <CardFooter>
                  <ItemCount />
                </CardFooter>
              </Stack>
            </Card>
          </Center>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
