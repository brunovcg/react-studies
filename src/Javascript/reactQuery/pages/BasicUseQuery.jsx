/* eslint-disable react/jsx-no-comment-textnodes */
import useSuperHeroData from "../hooks/useSuperHeroData"
import useSuperHeroMutation from "../hooks/useSuperHeroMutation"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
//? TO TEST RUN -> yarn serve-json on terminal (FAKE API)
//! change url to chyeck error state
//! goto app.tsx to check React-Query configs

function BasicUseQuery() {


    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')

    const navigate = useNavigate()

    const onSuccess = () => console.log('DEU BOM!')
    const onError = () => console.log('DEU BEM RUIM!!!')

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroData(onSuccess, onError)

    const { mutate: addHero } = useSuperHeroMutation(refetch)

    const handleAddHero = () => {
        const hero = { name, alterEgo }
        addHero(hero)
    }

    const toHeroPage = (id) => navigate(`${id}`)

    if (isLoading || isFetching) {
        return <h2>LOADING...</h2>
    }

    //! isFetching does a background refresh, only update UI if data changes
    // console.log({ isLoading, isFetching })


    if (isError) {
        return <div>{error.message}</div>
    }
    return <>
        <h2>RQ Super Hero</h2>
        <div>
            <input placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Ego" type="text" value={alterEgo} onChange={e => setAlterEgo(e.target.value)} />
            <button onClick={handleAddHero}>Add Hero</button>
        </div>
        <br />
        <button onClick={refetch}>FETCH</button>
        {/* //? this uses the select option */}
        {data?.data.map(item => <div role="button" onClick={() => toHeroPage(item.id)} key={item.id}>{item.name} - {item.alterEgo}</div>)}
        {/* {data?.data.map(hero => <div key={hero.name}>{hero.name}</div>)} */}
    </>
}

export default BasicUseQuery


