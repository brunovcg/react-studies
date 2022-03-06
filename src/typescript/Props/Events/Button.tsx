type EventProps = {
  handleClick: () => void;
  handleClickEvent: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ handleClick, handleClickEvent }: EventProps) => {
  return (
    <div>
        <button onClick={handleClick}>Clique (console)</button>
      <button onClick={(evt)=>handleClickEvent(evt,2)}>Clique Event (console)</button>
    </div>
  );
};

export default Button;
