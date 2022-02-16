import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

export function MovieBox({movie}){

  return(
    <Link href={`/movie/${movie.id}`}>  
      <Box as='button' w='45' p='2' display='flex' flexDirection='column' alignItems='center' justifyContent='center' bg='#202024' borderRadius='15' boxShadow='lg'>
        <img src={movie.image.medium} style={{borderRadius: 8}} alt=""/>

        <Box display='flex' w='100%' alignItems='center' justifyContent='center' gap='2'>
          <Text fontSize='20' color='#46D369' fontWeight='bold'>{movie.rating.average}/10</Text> 
          <Text fontSize='20' color='white' textAlign='center' fontWeight='700'>- {movie.runtime}min</Text>
        </Box>

        <Box display='flex' w='40' justifyContent='center' flexDirection='column'>{movie.genres.map((genre) => <Text fontSize='13' color='white' textAlign='center' fontWeight='600'>{genre}</Text>)}</Box>
      </Box> 
    </Link>   
  )
}