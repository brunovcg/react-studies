import Basics from "../../Props/Basics";

// aqui ele pega os tipos de outra funcão
  
  export const ExtractProps = (props: React.ComponentProps<typeof Basics>) => {
    return (
      <div>
      {props.myName}
      </div>
    );
  };
  
