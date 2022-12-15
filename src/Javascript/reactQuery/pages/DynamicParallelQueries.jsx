import useDynamicQueries from "./../hooks/useDynamicQueries"

function DynamicParallelQueries({ heroIds }) {

    const { queryResults } = useDynamicQueries(heroIds)
  console.log(queryResults)

    return <div>

        <h2>Dynamic Parallel</h2>

        {queryResults?.map((item, index) => <div key={item?.data?.data?.id || index}>{item?.data?.data?.name}</div>)}

    </div>
}

export default DynamicParallelQueries