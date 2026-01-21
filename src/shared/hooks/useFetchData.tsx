/*
import { useEffect, useState } from "react"

const useFetchData = <TData>(url: string) : {data: TData[]; isLoading: boolean } => {
    const [data, setData] = useState<TData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        const getData = async () => {
            try {
                const dataResponse = await fetch(url);
    const data = await dataResponse.json();
    if (!ignore) {
        setData(data as TData[]);
                }
            } catch (error) {
        console.error('Ошибка при получении данных:', error);
            } finally {
        setIsLoading(false);
            }
        }

    getData();
        return () => {
        ignore = true;
        }
    }, [url]);

    return {data, isLoading}
}

    export default useFetchData
*/