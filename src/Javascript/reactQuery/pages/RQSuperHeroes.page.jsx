/* eslint-disable react/jsx-no-comment-textnodes */
import useSuperHeroData from "../hooks/useSuperHeroData"
import { useNavigate } from 'react-router-dom';
//? TO TEST RUN -> yarn serve-json on terminal (FAKE API)
//! change url to chyeck error state
//! goto app.tsx to check React-Query configs

function RQSuperHeoresPage() {

    const navigate = useNavigate()

    const onSuccess = () => console.log('DEU BOM!')
    const onError = () => console.log('DEU BEM RUIM!!!')

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroData(onSuccess, onError)

  

    const toHeroPage = (id) => navigate(`${id}`)

    if (isLoading || isFetching) {
        return <h2>LOADING...</h2>
    }

    //! isFetching does a background refresh, only update UI if data changes
    console.log({ isLoading, isFetching })


    if (isError) {
        return <div>{error.message}</div>
    }


    return <>
        <h2>RQ Super Hero</h2> <button onClick={refetch}>FETCH</button>
        <br />
        {/* //? this uses the select option */}
        {data?.data.map(item => <div role="button" onClick={()=>toHeroPage(item.id)} key={item.id}>{item.name}</div>)}
        {/* {data?.data.map(hero => <div key={hero.name}>{hero.name}</div>)} */}
    </>
}

export default RQSuperHeoresPage


