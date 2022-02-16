import {
  Flex,
  Box,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import GoogleLogin from 'react-google-login';
import { useAuth } from '../context/AuthContext';



export default function Login() {
  const router = useRouter()
  const { setUser } = useAuth()

  const googleResponse = async (response) =>{
    await setUser(response)
    router.push('/home')
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.900', 'gray.900')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          To have access to all our movies and series
          </Text>
        </Stack>
        <Stack spacing={4}>
          <GoogleLogin 
            clientId={process.env.NEXT_PUBLIC_GOOGLE_ACESS_KEY}
            buttonText='Login com Google'
            onSuccess={googleResponse}
            onFailure={() => alert('Erro ao efetuar o login, tente novamente mais tarde')}
          />
        </Stack>
      </Stack>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  return (
    {
      props: {},
    }
  );
};
