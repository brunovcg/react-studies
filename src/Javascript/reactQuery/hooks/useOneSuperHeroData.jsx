import { useQuery, useQueryClient } from 'react-query'
import { fetchSuperHeroeById } from "../services/superheroService"

function useOneSuperHeroData(heroId) {

    //* return useQuery(['super-hero', heroId], ()=>fetchSuperHeroeById(heroId))

    //! We can use queryKey provided by react-query and destructure the position os the id (see the service)
    //* return useQuery(['super-hero', heroId], fetchSuperHeroeById)

    const queryClient = useQueryClient()

    //! Here we use useQueryClient to have access of queries and this way set an initial data
    //! that will be replaced after que specific query gets the info, used for low internet bandwidth
    return useQuery(['super-hero', heroId], fetchSuperHeroeById, {
        initialData: () => {
            const hero = queryClient.getQueryData('super-hero')?.data?.find(hero => hero.id === parseInt(heroId))

            if (hero) {
                return { data: hero }
            } return undefined
        }
    })

}

export default useOneSuperHeroData
