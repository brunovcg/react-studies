import { buyCake } from "../provider/cake/cakeActions";
import { connect } from "react-redux";
const ConnectCakeContainer = (props) => {
  return (
    <div>
      <h1>1 - Usando CONNECT</h1>
      <h2>Number of cake: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ConnectCakeContainer);
