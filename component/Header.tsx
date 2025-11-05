"use client"
import Image from 'next/image'
import { MapPin, Search, ChevronUp, ChevronDown } from "@deemlol/next-icons";
import { useEffect, useRef, useState } from 'react';

export default function Header() {
    const [ShowOption, setShowOption] = useState<boolean>(false);
    const [Country, setCountry] = useState<string>("India");

    const OptionRef = useRef<any>(null);

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

    function ChangeCountry(country: string) {
        setCountry(country);
        setShowOption(false);
    }

    return (
        <div className='w-full flex flex-col bg-blue-100 gap-3'>
            <div className='w-full h-full p-2 flex gap-2   flex-row items-center justify-between'>
                <Image
                    src="/logo.png"
                    alt='GeoShop_nav_logo'
                    className='w-[100px] h-10 object-contain'
                    width={100}
                    height={40} />
                <div className='flex gap-2 items-center  sm:gap-12 px-2 py-1 w-[80%] sm:w-[60%]'>
                    <div className='flex items-center w-full '>
                        <input type='text' placeholder='Search something...' className='py-2 px-2 rounded-l-lg bg-zinc-50 w-full outline-none' />
                        <button className='bg-orange-500 py-2.5 px-3 text-white rounded-r-lg'><Search size={21} /></button>
                    </div>
                </div>
                <div className='items-center gap-1 mr-5 hidden sm:flex relative'>
                    <button onClick={() => setShowOption(!ShowOption)} className='drop-shadow bg-white border border-[#2c60f1] px-3 py-2 capitalize rounded-md flex items-center gap-3 text-[15px] w-[110px]'>
                        <Image alt='Indian_flag' src={`/${Country}.png`} width={15} height={9} />
                        {Country}
                        {
                            ShowOption ?
                                <Image src="/caretup.jpg" alt='caret_up_icon' width={9} height={7} />
                                :
                                <Image src="/caretdown.jpg" alt='caret_up_icon' width={15} height={9} />
                        }
                    </button>
                    {
                        ShowOption &&
                        <div ref={OptionRef} className='absolute top-11 bg-white rounded-md drop-shadow flex flex-col gap-1 px-2 py-2'>
                            <button onClick={() => ChangeCountry("India")} className='hover:bg-zinc-100 px-5 py-1 rounded-md text-sm flex items-center gap-2'>
                                <Image alt='Indian_flag' src="/India.png" width={15} height={9} />India</button>
                            <button onClick={() => ChangeCountry("usa")} className='hover:bg-zinc-100 px-5 py-1 rounded-md text-sm flex items-center gap-2'>
                                <Image alt='Indian_flag' src="/usa.png" width={15} height={9} />
                                USA</button>
                            <button onClick={() => ChangeCountry("uk")} className='hover:bg-zinc-100 px-5 py-1 rounded-md text-sm flex items-center gap-2'>
                                <Image alt='Indian_flag' src="/uk.png" width={15} height={9} />
                                UK</button>
                        </div>
                    }
                </div>
            </div>
            <div className='flex sm:hidden gap-1 py-2 px-3 items-center text-zinc-500'>
                <MapPin size={15} color="#757680" />
                <p>Delivering Country</p>
                <button className='text-md capitalize px-1'>india</button>
            </div>
        </div>
    )
}
