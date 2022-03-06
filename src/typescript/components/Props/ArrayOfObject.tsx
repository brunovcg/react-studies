type ArrayOfObjectsProps = {
  names: { first: string; last: string }[];
};

const ArrayOfObject = ({ names }: ArrayOfObjectsProps) => {
  return (
    <div>
      {names.map((item) => (
        <h2 key={item.first}>
          {" "}
          {item.first} {item.last}
        </h2>
      ))}
    </div>
  );
};

export default ArrayOfObject;
