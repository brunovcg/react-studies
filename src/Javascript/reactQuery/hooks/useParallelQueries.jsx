import { useQuery } from 'react-query'
import { fetchSuperHeroes } from "../services/superheroService"
import { fetchFriends } from "../services/friendsService"

function useParallelQueries() {


    const { data: superheroes } = useQuery('super-heroes', fetchSuperHeroes)
    const { data: friends } = useQuery('friends', fetchFriends)

    return { superheroes, friends }
}

export default useParallelQueries
