import ExtendingStyles from "./extending-styles";
import StyledAnime from "./animations";
import Theming from "./theming"

const StyledComponents = () => {
  return (
    <div>
      <div>
        <h3 style={{background: 'lightgrey', paddingLeft: "15px"}}>Extending Styles</h3>
        <ExtendingStyles />
        <h3 style={{background: 'lightgrey', paddingLeft: "15px"}}>Animation</h3>
        <StyledAnime />
        <h3 style={{background: 'lightgrey', paddingLeft: "15px"}}>Theming</h3>
        <Theming />
      </div>
    </div>
  );
};

export default StyledComponents;
