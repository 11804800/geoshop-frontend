"use client"
import React, { createContext, ReactNode, useEffect, useState } from 'react'

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

    useEffect(() => {
        function GetUserLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        try {
                            const res = await fetch(
                                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
                            );
                            const data = await res.json();
                            if (data.address && data.address.country) {
                                setCountry(data.address.country);
                            } else {
                                console.log('Country not found in response.');
                            }

                        }
                        catch (err) {
                            console.log("failed to fetch country");
                        }
                    });
            }
            else {
                console.log("Geolocation is not supported by this browser.")
            }
        }
        GetUserLocation();
    }, []);

    return (
        <AppContext.Provider value={{ country: country, setCountry }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider