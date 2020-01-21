import { useState, useEffect } from 'react'

const axios = require('axios')

const useFetch = url => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUrl = async () => {
        axios.get(url)
            .then(res => { 
                setData(res.data)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchUrl()
    }, [])

    return [data, loading]
}

export { useFetch }