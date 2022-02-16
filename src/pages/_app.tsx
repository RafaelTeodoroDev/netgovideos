import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/Header'
import { theme } from '../../styles/theme'
import '../../styles/global.css'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import { AuthProvider, useAuth } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  const { isAuthenticated } = useAuth()

  if(isAuthenticated === false){
    return (
      console.log('erro')
    )
  }

  return(
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>  
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
