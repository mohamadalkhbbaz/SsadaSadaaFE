import React,{createContext} from 'react'

//1. Create context 
const ColorContext = createContext();

//2. Create provider 
const UseContextProider = ({children }) => {
  return (
    <ColorContext.Provider value='red'>
        {children }
    </ColorContext.Provider>
  )
}

//3. export context to use , provider to warp all component
export  {UseContextProider, ColorContext}