import React, { createContext, useContext, useEffect, useState } from "react";
import useSubmit from "../hooks/useSubmit";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const {response} = useSubmit();
  const [state, setState] = useState({
    isOpen: false,
    type: response.type,
    message: response.message,
  });


  const onOpen = async(type, message)=>{
    setState(prev => ({
        ...prev, 
        isOpen:!state.isOpen,
        type, 
        message
    }))
  }


  const onClose =()=>{
    setState(prev => ({
        ...prev, 
        isOpen:!state.isOpen,
        type:"",
        message:""
    }))
  }
//   useEffect(() => {
//     // console.log("isOpen now in context: ", state.isOpen);
//     console.log("state in context: ", state);
//   }, [state, state.isOpen]);

  

//   useEffect (()=>{
//     onOpen(state.type, state.message)
//   },[state])


//   const onOpen = (type, message)=>{
//     setState(prev => ({...prev , type , message}) )
//   }
  return (
    <AlertContext.Provider value={{...state, onOpen, onClose}} >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
