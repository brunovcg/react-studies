import usePaginatedQueries from "../hooks/usePaginatedQueries"

function PaginationQuery() {


    const { query, nextPage, previousPage } = usePaginatedQueries()


    const { isLoading, isError, error, data, isFetching } = query


    if (isLoading) {
        return <h2>Loading....</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return <>
        <div>
            {data?.data.map(color => {
                return (
                    <div key={color.id}>
                        <h2>{color.id} - {color.label}</h2>
                    </div>
                )
            })}
            <div>
                <button onClick={previousPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
        {/* If we want to use fetching anyway with keep previous data */}
        {isFetching && <div>Loading next</div>}
    </>
}

export default PaginationQuery