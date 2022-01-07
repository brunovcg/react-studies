import {useProvider} from "./provider"

const Consumer = () => {

    const {count} = useProvider()

    return(
        <div style={{fontWeight: 'bold', color: "black", fontSize:"20px", marginLeft:"50px"}}>
            {count}
        </div>
    )

}

export default Consumer