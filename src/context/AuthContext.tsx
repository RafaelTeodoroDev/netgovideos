import { UserInfo } from "os";
import { createContext, ReactNode, useContext, useState } from "react";

export const AuthContext = createContext({} as AuthContextData)

interface Props {
  children: ReactNode;
}

interface AuthContextData{
  user: {
    Iu: {
      SW: string;
      hY: string;
      sf: string;
      vW: string;
      yv: string;
      zN:string
    },
    tokenId?: string; 
  }
  setUser: any;
  isAuthenticated: boolean;
  
}

export function AuthProvider({children}: Props){
  const [user, setUser] = useState<any>(null);
  const isAuthenticated = user !== null;
  
  return(
    <AuthContext.Provider value={{user, setUser, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext);

  return context;
}