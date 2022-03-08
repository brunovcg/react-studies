import ExtendingStyles from "./extending-styles";
import StyledAnime from "./animations";
import Theming from "./theming";
import { Post, PostCSSTag } from "./CSS";
import { useState } from "react";

const StyledComponents = () => {
  const [fontSize, setFontSize] = useState(16);
  return (
    <div>
      <div>
        <h3 style={{ background: "lightgrey", paddingLeft: "15px" }}>
          Extending Styles
        </h3>
        <ExtendingStyles />
        <h3 style={{ background: "lightgrey", paddingLeft: "15px" }}>
          Animation
        </h3>
        <StyledAnime />
        <h3 style={{ background: "lightgrey", paddingLeft: "15px" }}>
          Theming
        </h3>
        <Theming />

        <h3 style={{ background: "lightgrey", paddingLeft: "15px" }}>CSS</h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <label style={{ marginRight: "20px" }} htmlFor="cssTag">
            Aumente a fonte da letra
          </label>
          <input
            value={fontSize}
            id="cssTag"
            type="number"
            onChange={(evt) => setFontSize(evt.target.value)}
          />
        </div>

        <Post color="blue" fontSize={fontSize}>
          Não utilizando a variável CSS
        </Post>
        <div style={{ margin: "20px 0" }}></div>
        <PostCSSTag color="red" fontSize={fontSize}>
          Usando a variável CSS no styled components
        </PostCSSTag>
      </div>
    </div>
  );
};

export default StyledComponents;
