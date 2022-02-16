import { Flex, Text, Box, Link as LinkChakra, HStack, Avatar, UseDisclosureReturn, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useSidebarDrawer } from "../../../context/SidebarDrawerContext";
import { RiMenuLine } from 'react-icons/ri'
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../../context/AuthContext";


export function Header(){
  const { onOpen } = useSidebarDrawer()
  const { user } = useAuth()
  console.log(user)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Flex px={['4', '4', '16']} py='4' bg='#202024' h='12vh'>
      <Link href='/' passHref>
        <img src={isWideVersion ? '/images/logo1.png' : '/images/logo-mobile.png'} alt="Logo" style={{cursor: 'pointer'}}/>
      </Link>
      
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          pt='5'
        >

        </IconButton>
      )}

      <Box display='flex' alignItems='center' ml='auto' >
        <Flex flexDirection='column' mr='4'>
          {isWideVersion ? <Text textAlign='right'>{user?.Iu?.sf}</Text> : ''}
          {isWideVersion ? <Text textAlign='right'>{user?.Iu?.yv}</Text> : ''}
        </Flex>
        <Avatar src={user?.Iu?.zN}/>
      </Box>
    </Flex>
  )
}