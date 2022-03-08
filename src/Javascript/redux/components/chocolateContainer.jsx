import { useSelector, useDispatch } from "react-redux";
import { buyChocolate } from "../provider/chocolate/chocolateActions";
import { useState } from "react";

const ChocolateContainer = () => {
  const [number, setNumber] = useState(1);

  const numOfChocolate = useSelector((state) => state.chocolate.numOfChocolate);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>4 - Passando um payload</h1>
      <input
        type="number"
        value={number}
        onChange={(evt) => setNumber(evt.target.value)}
      />
      <h2>Number of chocolate: {numOfChocolate}</h2>
      <button onClick={() => dispatch(buyChocolate(number))}>
        Buy {number} Chocolate
      </button>
    </div>
  );
};

export default ChocolateContainer;
