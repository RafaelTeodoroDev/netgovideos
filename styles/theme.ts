import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: '#141414'
  },

  fonts: {
    heading: 'sans-serif',
    body: 'sans-serif'
  },
  
  styles: {
    global: {
      body: {
        m: '0',
        p: '0',
        bg: '#121214',
        color: '#e5e5e5',
        
      }
    }
  }

})
