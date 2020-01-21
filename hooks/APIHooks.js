import { useState, useEffect } from 'react'

const axios = require('axios')
const apiUrl = 'http://media.mw.metropolia.fi/wbma/'

const getAllMedia = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUrl = async () => {
        axios.get(apiUrl + 'media/all')
            .then(async res => {
                await Promise.all(res.data.files.map(async item => 
                    axios.get(apiUrl + 'media/' + item.file_id).then(res => { return res.data })
                )).then((values) => {
                    console.log(values)
                    setData(values)
                    setLoading(false)
                })
            })
    }

    useEffect(() => {
        fetchUrl()
    }, [])

    return [data, loading]
}

export { getAllMedia }