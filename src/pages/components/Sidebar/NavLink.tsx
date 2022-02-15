import { Button } from "@chakra-ui/react";

export function NavLink({type, setType, name}){
  return(
    <Button 
      w='14rem' 
      bg='none'
      color='white'
      borderRadius='6' p='2' 
      fontWeight={type === name ? '900' : '500'} 
      textDecoration={type === name ? 'underline' : ''} 
      onClick={() => setType(name)}
      _hover={{
        bg: 'none'
      }}
    >
      {name}
    </Button>
  )
}