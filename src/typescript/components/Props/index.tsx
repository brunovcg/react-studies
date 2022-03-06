// interface GreetProps  {
//     myName: string;
// }

type GreetProps = {
  myName: string;
  messageCount: number;
  // ao colocar o "?", você deixa a prop como opcional 
  isLogged?: boolean;
};

// type => usado pata aplicações
// interfaces => usado para libs

export const Props = ({ myName, messageCount, isLogged }: GreetProps) => {
  return (
    <>
      {isLogged && (
        <div>
          Welcome user, {myName}, you have {messageCount}!
        </div>
      )}
    </>
  );
};

export default Props;
