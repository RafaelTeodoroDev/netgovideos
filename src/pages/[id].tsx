import { Box, Container, Flex, SimpleGrid, Text, Image, Stack, Heading, useColorModeValue, StackDivider, VStack, List, ListItem, Button } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Home() {
  const [movie, setMovie] = useState<any>({})
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    async function getData(){
      await api.get(`/shows/${id}`).then((response) => setMovie(response.data))
    }

    getData()
  }, [])

  console.log(movie)

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 8 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              movie?.image?.original
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '750px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {movie?.name}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'lg'}
                fontWeight={'300'}>
                <div dangerouslySetInnerHTML={{__html: movie?.summary}} />
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Movie details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Nota:
                  </Text>{' '}
                  {movie?.rating?.average} / 10
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Type: 
                  </Text>{' '}
                  {movie?.type}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Language: 
                  </Text>{' '}
                  {movie?.language}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Runtime: 
                  </Text>{' '}
                  {(movie?.averageRuntime / 60)}h
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Local:
                  </Text>{' '}
                  {movie?.network?.country?.name}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Premiered: 
                  </Text>{' '}
                  {(movie?.premiered)}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Link href={`${movie.officialSite}`} passHref>
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Assistir
            </Button>
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return (
    {
      props: {},
    }
  );
};
