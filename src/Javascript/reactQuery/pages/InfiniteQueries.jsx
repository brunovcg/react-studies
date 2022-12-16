import useInfiniteQueries from "../hooks/useInfiniteQueries"

function InfiniteQueries() {


    const { isLoading, isError, error, data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQueries()

    if (isLoading) {
        return <h2>Loading....</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return <>
        <div>
            {data?.pages?.map((group, id) => {
                return (
                    <div key={id}>
                        {group.data.map(color => <h2 key={color.id}>{color.id} - {color.label}</h2>)}

                    </div>
                )
            })}
        </div>

        <button onClick={fetchNextPage} disabled={!hasNextPage}>Load more</button>

        <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
}

export default InfiniteQueries