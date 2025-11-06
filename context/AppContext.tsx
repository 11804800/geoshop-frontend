"use client"
import React, { createContext, ReactNode, useState } from 'react'

interface myproviderProp {
    children: ReactNode
}

interface MyContextType {
    country: string;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
}

const defaultContext: MyContextType = {
    country: "",
    setCountry: () => { },
};

export const AppContext = createContext(defaultContext);

const AppProvider: React.FC<myproviderProp> = ({ children }) => {
    const [country, setCountry] = useState<string>("India");
    return (
        <AppContext.Provider value={{ country: country, setCountry }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider