"use client"
import { MapPin, Search } from "@deemlol/next-icons";
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '@/context/AppContext';

export default function Header() {
    const [ShowOption, setShowOption] = useState<boolean>(false);
    const [ShowMobileViewOption, setShowMobileViewOption] = useState<boolean>(false);
    const { country, setCountry } = useContext(AppContext);

    const OptionRef = useRef<any>(null);
    const MobileViewOptionRef = useRef<any>(null);

    useEffect(() => {
        if (!ShowOption) return;
        const handler = (e: any) => {
            if (OptionRef.current && !OptionRef.current.contains(e.target)) {
                setShowOption(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [ShowOption]);

    useEffect(() => {
        if (!ShowMobileViewOption) return;
        const handler = (e: any) => {
            if (MobileViewOptionRef.current && !MobileViewOptionRef.current.contains(e.target)) {
                setShowMobileViewOption(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [ShowMobileViewOption]);

    function ChangeCountry(country: string) {
        setCountry(country);
        setShowOption(false);
        setShowMobileViewOption(false);
    }

    return (
        <div className='w-full flex flex-col bg-blue-100 gap-3'>
            <div className='w-full h-full p-2 flex gap-2   flex-row items-center justify-between'>
                <img
                    src="/logo.png"
                    alt='GeoShop_nav_logo'
                    className='w-[100px] h-10 object-contain' />
                <div className='flex gap-2 items-center  sm:gap-12 px-2 py-1 w-[80%] sm:w-[60%]'>
                    <div className='flex items-center w-full '>
                        <input type='text' placeholder='Search something...' className='py-2 px-2 rounded-l-lg bg-zinc-50 w-full outline-none' />
                        <button className='bg-orange-500 py-2.5 px-3 text-white rounded-r-lg'><Search size={21} /></button>
                    </div>
                </div>
                <div className='items-center gap-1 mr-5 hidden sm:flex relative'>
                    <button onClick={() => setShowOption(!ShowOption)} className='drop-shadow bg-white border border-[#2c60f1] px-3 py-2 capitalize rounded-md flex items-center gap-3 text-[15px] w-[110px]'>
                        <img alt='Indian_flag' src={`/${country}.png`} width={15} height={9} />
                        {country}
                        {
                            ShowOption ?
                                <img src="/caretup.jpg" alt='caret_up_icon' width={9} height={7} />
                                :
                                <img src="/caretdown.jpg" alt='caret_up_icon' width={15} height={9} />
                        }
                    </button>
                    {
                        ShowOption &&
                        <div ref={OptionRef} className='absolute top-11 bg-white rounded-md drop-shadow flex flex-col gap-1 px-2 py-2 z-9999'>
                            <button onClick={() => ChangeCountry("India")} className='hover:bg-zinc-100 px-5 py-1 rounded-md text-sm flex items-center gap-2'>
                                <img alt='Indian_flag' src="/India.png" width={15} height={9} />India</button>
                            <button onClick={() => ChangeCountry("usa")} className='hover:bg-zinc-100 px-5 py-1 rounded-md text-sm flex items-center gap-2'>
                                <img alt='Indian_flag' src="/usa.png" width={15} height={9} />
                                USA</button>
                            <button onClick={() => ChangeCountry("uk")} className='hover:bg-zinc-100 px-5 py-1 rounded-md text-sm flex items-center gap-2'>
                                <img alt='Indian_flag' src="/uk.png" width={15} height={9} />
                                UK</button>
                        </div>
                    }
                </div>
            </div>
            <div className='flex sm:hidden gap-1 pt-2 pb-3 px-5 items-center text-zinc-500 relative w-fit'>
                <MapPin size={15} color="#757680" />
                <p>Delivering Country</p>
                <button onClick={() => setShowMobileViewOption(!ShowMobileViewOption)} className='text-md capitalize px-1 flex items-center gap-1'>{country}                {
                    ShowMobileViewOption ?
                        <img src="/caretup.jpg" alt='caret_up_icon' width={8} height={8} />
                        :
                        <img src="/caretdown.jpg" alt='caret_up_icon' width={8} height={8} />
                }</button>
                {
                    ShowMobileViewOption &&
                    <div ref={MobileViewOptionRef} className='absolute top-9 bg-white rounded-md drop-shadow flex flex-col gap-1 px-2 py-2 z-9999 right-0'>
                        <button onClick={() => ChangeCountry("India")} className='hover:bg-zinc-100 px-5 py-1 rounded-md text-sm flex items-center gap-2'>
                            <img alt='Indian_flag' src="/India.png" width={15} height={9} />India</button>
                        <button onClick={() => ChangeCountry("usa")} className='hover:bg-zinc-100 px-5 py-1 rounded-md text-sm flex items-center gap-2'>
                            <img alt='Indian_flag' src="/usa.png" width={15} height={9} />
                            USA</button>
                        <button onClick={() => ChangeCountry("uk")} className='hover:bg-zinc-100 px-5 py-1 rounded-md text-sm flex items-center gap-2'>
                            <img alt='Indian_flag' src="/uk.png" width={15} height={9} />
                            UK</button>
                    </div>
                }
            </div>
        </div>
    )
}
