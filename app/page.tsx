import RenderProducts from "@/component/RenderProducts";

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

export default async function Home() {
  const url = process.env.BASE_URL;
  const res = await fetch(`${url}/products`, {
    cache: "no-store"
  });
  const data = await res.json();

  if (data.products.length <= 0) {
    return (
      <div className="w-full flex justify-center items-center p-5 h-dvh">
        <h1 className="font-medium text-2xl">No Product Available</h1>
      </div>
    )
  }
  else {
    return (
      <div className="flex gap-3 flex-wrap justify-center py-12 px-2">
        {
          data.products.map((item: ProductInterfce, index: number) => {
            return <RenderProducts key={index} item={item} />
          })
        }
      </div>
    );
  }
}
