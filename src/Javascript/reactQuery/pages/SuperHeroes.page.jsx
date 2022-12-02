import { useState, useEffect } from 'react'
import axios from 'axios'

// ! To be easy for compare, here is a regular data fetching

function SuperHeoresPage() {

    const [isLoading, setIsloading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes').then(res => {
            setData(res.data)
            setIsloading(false)
        })
    }, [])

    if (isLoading) {
        return <h2>Loading</h2>
    }

    return <>
        <h2>SuperHero</h2>

        {data.map(hero => <div key={hero.name}>{hero.name}</div>)}
    </>
}

export default SuperHeoresPage