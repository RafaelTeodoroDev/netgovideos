import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Header } from "../components/Header";
import { MovieList } from "../components/MoviesList";
import { Sidebar } from "../components/Sidebar";


export default function Home() {
  const [type, setType] = useState('All')
  const { user } = useAuth()

  return (
    <>
    <Header />
    <Box display='flex'>
      <Sidebar type={type} setType={setType}/>
      <MovieList type={type}/>
    </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return (
    {
      props: {},
    }
  );
};