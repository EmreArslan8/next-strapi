"use client"


import Link from "next/link";

import useFetch from "./lib/hooks/useFetch";
const Products = () => {
    const { isLoading, error, data } = useFetch(
        "http://localhost:1337/api/products"
    );

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
        <div className="container mx-auto p-12">
            <ul className="grid grid-cols-4 gap-4">
                {data?.map((product: any) => (
                    <li
                        key={product.id}
                        className="bg-gray-100 p-4 rounded-md flex flex-col"
                    >
                        <h2 className="text-xl">{product.attributes.name}</h2>
                        <code className="text-blue-500">
                            {product.attributes.price.toLocaleString("tr-TR", {
                                style: "currency",
                                currency: "TRY",
                            })}
                        </code>
                        <Link
                            href={`/products/${product.id}`}
                            className="ml-auto bg-gray-500 text-white px-2 rounded-full"
                        >
                            Details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Products


