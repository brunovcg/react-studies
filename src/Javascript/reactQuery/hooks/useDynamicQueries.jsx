import { useQueries } from 'react-query'
import { fetchSuperHeroeById } from "../services/superheroService"

function useDynamicQueries(heroIds) {


    const queryResults = useQueries(
        heroIds.map(id => ({ queryKey: ['super-hero', id], queryFn: fetchSuperHeroeById }))
    )

    return {queryResults}
}

export default useDynamicQueries
