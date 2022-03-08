import styled, { ThemeProvider } from "styled-components";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },

  light: {
    primary: "#fff",
    text: "#000",
  },
};

const Button = styled.button`
  background: ${(props) => props.theme.dark.primary};
  border: ${(props) => props.theme.dark.primary} 2px solid;
  color: ${(props) => props.theme.dark.text};
`;

const Button2 = styled.button`
  background: ${(props) => props.theme.light.primary};
  border: ${(props) => props.theme.light.primary} 2px solid;
  color: ${(props) => props.theme.light.text};
`;

const Theming = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Usando o theme...</p>

        <Button>Dark</Button>
        <Button2>Light</Button2>
      </div>
    </ThemeProvider>
  );
};

export default Theming;
