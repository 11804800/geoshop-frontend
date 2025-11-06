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

const RenderProducts: React.FC<RenderProductsProps> = ({ item }) => {
    return (
        <div className='max-w-[320px] drop-shadow border  border-white rounded-md overflow-hidden'>
            <img alt={item.title} src={process.env.MEDIA_URL + item.images[0]} style={{ width: "auto", height: "auto" }} width={300} height={300} className='object-contain' />
            <div className='flex flex-col p-4 bg-white h-full'>
                <p className='line-clamp-2'>{item.title}</p>
                <div className='flex gap-3 py-2 items-center'>

                    <p className="text-3xl flex items-start">
                        <span className="text-[15px] mt-1.5 pr-[1px]">
                            &#8377;</span>{item?.discountPrice}</p>
                </div>
                <div className="pt-2 pb-3">
                    <p className="line-clamp-3 text-zinc-500 text-sm font-regular">
                        {item.description}
                    </p>
                </div>
                <button className='bg-[#ffce12] hover:bg-[#ffce12]/85 hover:drop-shadow-none active:scale-90 transition-all duration-175 py-1.5 px-8 w-fit rounded-2xl text-sm drop-shadow'>
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default RenderProducts