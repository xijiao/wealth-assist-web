
import { useEffect, useState } from 'react';

export default function useFetch(url : string) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        setData(null);
        setError(null);
        setLoading(true);
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setData(res);
            setLoading(false);
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
    }, [url])
  
    return { data, error, loading }
}