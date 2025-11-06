"use client"
import { AppContext } from "@/context/AppContext";
import axios from "axios";
import { useContext } from "react";

interface ProductInterfce {
    _id: string,
    title: string,
    description: string,
    price: number,
    discountPrice: number,
    quantity: number,
    inStock: boolean,
    category: string,
    brand: string,
    images: string[]
}

interface RenderProductsProps {
    item: ProductInterfce
}

const CurrencyFormat = (price: number, country: string) => {
    const usaRate = 88.73;
    const gbpRate = 115.78;
    if (country == "usa") {
        const amount = price / usaRate;
        const { format } = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD',
        });
        return format(amount)
    }
    else if (country == "uk") {
        const amount = price / gbpRate;
        const { format } = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'GBP',
        });
        return format(amount)
    }
    else {
        const { format } = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        });
        return format(price)
    }
}

const RenderProducts: React.FC<RenderProductsProps> = ({ item }) => {


    const { country } = useContext(AppContext);
    return (
        <div className='max-w-[320px] drop-shadow border  border-white rounded-md overflow-hidden'>
            <img alt={item.title} src={"https://geoshop-backend.vercel.app" + item.images[0]} style={{ width: "auto", height: "auto" }} width={300} height={300} className='object-contain' />
            <div className='flex flex-col p-4 bg-white h-full'>
                <p className='line-clamp-2'>{item.title}</p>
                <div className='flex gap-3 py-2 items-center'>

                    <p className="text-2xl flex items-start">{CurrencyFormat(item?.discountPrice, country)}</p>
                </div>
                <div className="pt-2 pb-3">
                    <p className="line-clamp-3 text-zinc-500 text-sm font-regular">
                        {item.description}
                    </p>
                </div>
                <form action={`https://geoshop-backend.vercel.app/api/create-checkout-session`} method="POST">
                    <input type="number" name="price" id="price" value={item.discountPrice} className="hidden" onChange={() => { }} />
                    <input type="text" name="name" id="name" value={item.title} className="hidden" onChange={() => { }} />
                    <input type="text" name="currency" id="currency" value={country} className="hidden" onChange={() => { }} />
                    <button type="submit" className='bg-[#ffce12] hover:bg-[#ffce12]/85 hover:drop-shadow-none active:scale-90 transition-all duration-175 py-1.5 px-8 w-fit rounded-2xl text-sm drop-shadow'>
                        Buy Now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RenderProducts