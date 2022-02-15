import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { MovieList } from "./components/MoviesList";
import { Sidebar } from "./components/Sidebar";


export default function Home() {
  const [type, setType] = useState('All')

  return (
    <Box display='flex'>
      <Sidebar type={type} setType={setType}/>
      <MovieList type={type}/>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return (
    {
      props: {},
    }
  );
};
