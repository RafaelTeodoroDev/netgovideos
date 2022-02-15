import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/Header'
import { theme } from '../../styles/theme'
import '../../styles/global.css'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'

function MyApp({ Component, pageProps }) {

  return(
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Header />
        <Component {...pageProps} />
      </SidebarDrawerProvider>  
    </ChakraProvider>
  )
}

export default MyApp
