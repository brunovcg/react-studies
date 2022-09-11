import sorvete from "../../assets/icecream.png";
import { Styled } from "./styles";


const Cp1 = ({x}) => {return <div>{x}</div>}

const Cp2 = ({Comp}) => {return <div><Comp x={111}/></div>}

export function SandBox() {
  return (
    <Styled>
      <Cp2 Comp = {Cp1}/>
      {/* <section id="one">
        <img src={sorvete} />
        <p>Soft Ice</p>
      </section>

      <section id="two">
        <img src={sorvete} />
        <p>Soft Ice</p>
      </section> */}
    </Styled>
  );
}
