import { createContext, useState } from "react";
import { Diagnostic_Data, Doctors_Data, Hospital_Data } from "../data";

export const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const [data, setData] = useState({services:Hospital_Data,
         doctors:Doctors_Data,
         diagnosis:Diagnostic_Data
        
        })
    return(
        <DataContext.Provider value={[data, setData]}>
        {children}
    </DataContext.Provider>
    )
   
}