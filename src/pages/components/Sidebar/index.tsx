import { Box, Flex, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../../context/SidebarDrawerContext";
import { NavLink } from "./NavLink";

export function Sidebar({setType, type}){
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  if(isDrawerVersion){
    return(
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg='gray.900'>
            <DrawerCloseButton mt='6'/>
            <DrawerHeader />

            <DrawerBody>
              <NavLink setType={setType} type={type} name="All"/>
              <NavLink setType={setType} type={type} name="Animation"/>
              <NavLink setType={setType} type={type} name="Action" />
              <NavLink setType={setType} type={type} name="Drama" />
              <NavLink setType={setType} type={type} name="Comedy"/>
              <NavLink setType={setType} type={type} name="Science Fiction" />
              <NavLink setType={setType} type={type} name="Family" />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return(
    <Box bg='#202024' h='88vh'>
      <Flex flexDirection='column' gap='4' p='4'>
        <NavLink setType={setType} type={type} name="All"/>
        <NavLink setType={setType} type={type} name="Animation"/>
        <NavLink setType={setType} type={type} name="Action" />
        <NavLink setType={setType} type={type} name="Drama" />
        <NavLink setType={setType} type={type} name="Comedy"/>
        <NavLink setType={setType} type={type} name="Science Fiction" />
        <NavLink setType={setType} type={type} name="Family" />
      </Flex>
    </Box>
    
  )
}