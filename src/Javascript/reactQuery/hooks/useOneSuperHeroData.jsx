import { useQuery } from 'react-query'
import { fetchSuperHeroeById } from "../services/superheroService"

function useOneSuperHeroData(heroId) {

    // return useQuery(['super-hero', heroId], ()=>fetchSuperHeroeById(heroId))

    //? We can use queryKey provided by react-query and destructure the position os the id (see the service)

    return useQuery(['super-hero', heroId], fetchSuperHeroeById)


}

export default useOneSuperHeroData
