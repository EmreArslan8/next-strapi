import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState<Error| null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.data);
      } catch (error) {
        setError(error as any);
      }

      setIsloading(false);
    };

    fetchData();
  }, []);

  return { isLoading, error, data };
}