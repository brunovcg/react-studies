import { useTheming } from "../ThemingExemple/";

const Box = () => {
  const { primary, secondary } = useTheming();

  return (
    <>
      <div style={{ backgroundColor: primary.main, color: primary.text }}>
        Theme context Primary
      </div>
      <div style={{ backgroundColor: secondary.main, color: secondary.text }}>
        Theme context Secondary
      </div>
    </>
  );
};

export default Box;
