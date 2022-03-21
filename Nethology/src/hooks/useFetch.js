import {useEffect, useState} from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(body => {
                setData(body)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })

        return () => setData([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    return {
        data,
        loading
    }

};

