import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { ActionsMovies } from "./perGenresMovies/ActionsMovies"
import { AllMovies } from "./perGenresMovies/AllMovies"
import { AnimationMovies } from "./perGenresMovies/AnimationMovies"
import { ComedyMovies } from "./perGenresMovies/ComedyMovies"
import { DramaMovies } from "./perGenresMovies/DramaMovies"
import { FamilyMovies } from "./perGenresMovies/FamilyMovies"
import { ScienciFicMovies } from "./perGenresMovies/ScienceFicMovies"

export function MovieList({type}){
  const [data, setData] = useState([])
  
  useEffect(() => {
    async function getData(){
      await api.get('/shows').then((response) => setData(response.data))
    }

    getData()
  }, [])

  return(
    <Box px='4'>
      {type === 'All' && <AllMovies data={data} />}
      {type === 'Action' && <ActionsMovies data={data}/>}
      {type === 'Drama' && <DramaMovies data={data}/>}
      {type === 'Comedy' && <ComedyMovies data={data}/>}
      {type === 'Animation' && <AnimationMovies data={data}/>}
      {type === 'Family' && <FamilyMovies data={data}/>}
      {type === 'Science Fiction' && <ScienciFicMovies data={data}/>}
    </Box>
  )
}