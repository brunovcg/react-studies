import { useQueries } from 'react-query'
import { fetchSuperHeroeById } from "../services/superheroService"

function useDynamicQueries(heroIds) {


    const queryResults = useQueries(
        heroIds.map(id => ({ queryKey: ['super-heroes', id], queryFn: fetchSuperHeroeById }))
    )

    return {queryResults}
}

export default useDynamicQueries
