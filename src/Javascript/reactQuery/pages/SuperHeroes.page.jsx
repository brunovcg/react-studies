import { useState, useEffect } from 'react'
import axios from 'axios'

// ! To be easy for compare, here is a regular data fetching
function SuperHeoresPage() {
    const [isLoading, setIsloading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes').then(res => {
            setData(res.data)
        }).catch(() => setError('Request error!')).finally(() => setIsloading(false))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes1').then(res => {
            setData(res.data)
        }).catch((err) => setError(err.message)).finally(() => setIsloading(false))
    }, [])

    if (isLoading) {
        return <h2>Loading</h2>
    }


    return <>
        <h2>SuperHero</h2>
        <h3>Success Exemple</h3>
        {data.map(hero => <div key={hero.name}>{hero.name}</div>)}
        <br />
        <h3>Error Exmeple</h3>
        {error}
    </>
}

export default SuperHeoresPage