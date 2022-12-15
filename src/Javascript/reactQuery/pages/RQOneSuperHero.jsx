import { useParams } from 'react-router-dom'
import useOneSuperHeroData from './../hooks/useOneSuperHeroData'

function RQOneSuperHero() {

    const { heroId } = useParams()

    const { data } = useOneSuperHeroData(heroId)


    return <div> This is {data?.data.name} home page, she is {data?.data.alterEgo}</div>
}

export default RQOneSuperHero