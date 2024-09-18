import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Heading
} from '@chakra-ui/react'
import { login } from '../../services/login';
import { Header } from '../../components/Header/Header';
import { Botao } from '../../components/Button/Button';

export const Card = () => {
  return(
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Header />
        <Box backgroundColor='#FFFFFF' borderRadius='0 0 25px 25px' padding='15px' >
          <Center>
            <Heading as="h2" size="md">Faça o login</Heading>
          </Center>
          <Input placeholder="email" margin="10px 0 10px 0"/>
          <Input placeholder="password" margin="0 0 10px 0" />
          <Center>
            <Botao onClick={login} />
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default Card;