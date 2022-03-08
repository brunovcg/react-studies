import React from "react";

const Product = (props) => {
  const plus = () => {
    let result = props.product.votes + 1;

    props.onVote(result, props.index);
  };
  const minus = () => {
    let result = props.product.votes - 1;

    props.onVote(result, props.index);
  };
  return (
    <li key={props.index} id={props.index}>
      <span>{props.product.name}</span> -{" "}
      <span>votes: {props.product.votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);

  const onVote = (dir, index) => {
    let newArray = [...products];
    newArray[index] = { name: products[index].name, votes: dir };

    setProducts(newArray);
  };

  return (
    <ul>
      {products &&
        products.map((item, index) => (
          <Product onVote={onVote} product={item} index={index} key={index} />
        ))}
    </ul>
  );
};

export default GroceryApp;
