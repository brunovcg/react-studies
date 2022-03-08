import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../provider/iceCream/iceCreamActions";

const IceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCream);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>3 - Usando um segundo reducer na mesma STORE</h1>
      <h2>Number of ice cream: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
};

export default IceCreamContainer;
