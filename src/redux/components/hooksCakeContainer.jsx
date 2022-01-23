import {useSelector, useDispatch} from "react-redux"
import { buyCake } from "../provider/cake/cakeActions";

const HookCakeContainer = () => {

    const numOfCakes = useSelector(state=> state.cake.numOfCakes)

    const dispatch = useDispatch()

    return (
      <div>
        <h1>2 - Usando HOOKS</h1>
        <h2>Number of cake: {numOfCakes}</h2>
        <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
      </div>
    );
  };

  export default HookCakeContainer