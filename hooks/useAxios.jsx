import axios from 'axios';
import { useState } from 'react';

const useAxsios = () => {

    const [loading, setLoading] = useState();
    const [data, setData] = useState();
    const [error, setErrer] = useState();

    const fetch = (url) => {
        setLoading(true)
        axios
            .get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => setErrer(err))
            .finally (() => setLoading(false))
    }
    const res = { data, loading, error }
    
    return [res, fetch]
}

export default useAxsios;