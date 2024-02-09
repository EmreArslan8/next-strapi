"use client"

import useFetch from "@/app/lib/hooks/useFetch";
import Review from "@/components/Review";
import { useParams } from "next/navigation";

const Page = ({ params }: { params: { product: string } }) => {
  const { id } = useParams();
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/products/" + id
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  return (
    <div className="container mx-auto p-12">
      <h2 className="text-xl">{data.attributes.name}</h2>
      <code className="text-blue-500 mt-2 block">
        {data.attributes.price.toLocaleString("tr-TR", {
          style: "currency",
          currency: "TRY",
        })}
      </code>
      <p className="mt-4 text-gray-700">{data.attributes.details}</p>
      <Review productId={id[0]} />
    </div>
  );
}
export default Page