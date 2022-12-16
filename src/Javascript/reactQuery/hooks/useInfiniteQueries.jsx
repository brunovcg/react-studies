import { useInfiniteQuery } from "react-query"
import ColorsServices from "../services/colorsServices"

function useInfiniteQueries() {



    const { getColors } = ColorsServices




    return useInfiniteQuery(['colors'], getColors, {
        getNextPageParam: (lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1
            } return undefined
        }
    })
}


export default useInfiniteQueries