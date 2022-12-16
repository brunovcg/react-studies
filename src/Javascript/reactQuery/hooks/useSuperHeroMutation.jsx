import { useMutation, useQueryClient } from 'react-query'
import { addSuperHero } from "../services/superheroService"

function useSuperHeroMutation(successCallBack) {

    const queryClient = useQueryClient()

    return useMutation(addSuperHero, {

        // onSuccess: () => {
        //     queryClient.invalidateQueries('super-heroes')
        //     successCallBack()
        // }
        //! If we do this way, we will call GET method again, the way bellow, change the cash directly

        // onSuccess: (data) => {
        //     queryClient.setQueryData('super-heroes', (oldData) => {
        //         return { ...oldData, data: [...oldData.data, data.data] }
        //     })
        // }

        //! Using OPTIMISTIC update, we guess the request will succeed, so we change the data before the response

        //? called before the mutation function is fired, pass same variables mutation will receive
        onMutate: async (newHero) => {
            await queryClient.cancelQueries('super-heroes')
            const previouHeroData = queryClient.getQueryData('super-heroes')
            queryClient.setQueryData('super-heroes', (oldData) => {
                //! it is a good idea using UUID lib here
                return { ...oldData, data: [...oldData.data, { id: oldData?.data?.length + 1, ...newHero }] }
            })
            return { previouHeroData }
        },

        // ? If we get an error, this method is called
        onError: (error, hero, context) => {
            queryClient.setQueryData('super-heroes', context.previouHeroData)
        },

        //? This will unsure client and server as synched
        onSettled: () => { 
            queryClient.invalidateQueries('super-heroes')
        }
    })


}

export default useSuperHeroMutation
