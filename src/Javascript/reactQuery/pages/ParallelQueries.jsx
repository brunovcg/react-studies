import useParallelQueries from "../hooks/useParallelQueries"

function ParallelQueries() {

    const { superheroes, friends } = useParallelQueries()


    return <div>

        <h2>Friends</h2>
        {friends?.data.map(item => <div key={item.id}>{item.name}</div>)}

        <br />

        <h2>Superheroes</h2>
        {superheroes?.data.map(item => <div key={item.id}>{item.name}</div>)}


    </div>
}

export default ParallelQueries