import React from "react";

function StarVote() {
  const [array, setArray] = React.useState(indexes);

  const indexes = [
    { index: "0", active: false },
    { index: "1", active: false },
    { index: "2", active: false },
    { index: "3", active: false },
    { index: "4", active: false },
  ];

  const handleClick = (item) => {
    let newArray = [];

    array.forEach((x) =>
      Number(x.index) <= Number(item.index)
        ? newArray.push({ index: x.index, active: true })
        : newArray.push({ index: x.index, active: false })
    );

    return setArray(newArray);
  };

  return (
    <div id="rating" style={{ backgroundColor: "red", margin: "0 5px" }}>
      {array.map((item) =>
        item.active ? (
          <span
            id={item.index}
            key={item.index}
            className="active"
            onClick={() => handleClick(item)}
            style={{ color: "yellow" }}
          >
            *
          </span>
        ) : (
          <span
            id={item.index}
            key={item.index}
            onClick={() => handleClick(item)}
          >
            *
          </span>
        )
      )}
    </div>
  );
}

export default StarVote;
