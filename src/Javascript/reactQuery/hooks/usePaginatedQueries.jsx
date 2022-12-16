import { useQuery } from "react-query"
import ColorsServices from "../services/colorsServices"
import { useState } from 'react';

function usePaginatedQueries() {

    const [page, setPage] = useState(1)

    const { getColorsPaginated } = ColorsServices

    const nextPage = () => setPage(state => state + 1)
    const previousPage = () => setPage(state => state - 1)

    // ! keepPreviousData will keep the previous data until the new fetch is done, avoiding loading state.

    return { query: useQuery(['colors', page], () => getColorsPaginated(page), { keepPreviousData: true }), nextPage, previousPage }
}


export default usePaginatedQueries