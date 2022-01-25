import { connect } from "react-redux";
import { buyCake } from "../provider/cake/cakeActions";
import { buyIceCream } from "../provider/iceCream/iceCreamActions";

// Se quiser usar como um component só (não está sendo renderizado):

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCrems;

  return { item: itemState };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return { buyItem: dispatchFunction };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
