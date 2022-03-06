import Input from "./Input";
import Button from "./Button";

const Events = () => {
  return (
    <>
    <h4>onClick Events</h4>
      <Button 
      handleClick={() => {
        console.log("Cliquei");
      }}
      handleClickEvent={(event, id) => console.log(event, id)}
      
      />
      <h4>input Events</h4>
      <Input/>
    </>
  );
};

export default Events;
