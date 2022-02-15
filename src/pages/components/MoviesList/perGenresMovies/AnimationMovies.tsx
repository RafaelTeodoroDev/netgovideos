import { Box, Flex} from "@chakra-ui/react";
import { MovieBox } from "../MovieBox";

export function AnimationMovies({data}){

  return(
    <Box pb='8' h='88vh' overflowY='auto'>
      <Flex gap='8' flexWrap='wrap' justifyContent='space-evenly' mt='6' px='8'>
        {data.map((movie) => (
          movie.genres.includes('Animation') ? <MovieBox movie={movie}/> : <></>
        ))}
      </Flex>
    </Box> 
  )
}