import { useState, useRef } from "react";

const db = [
  {
    id: 1,
    name: "one",
    value: 1,
    effectiveValue: 1,
    isCompound: false,
    position: 1,
  },
  {
    id: 2,
    name: "two",
    value: 2,
    effectiveValue: 2,
    isCompound: false,
    position: 2,
  },
  {
    id: 3,
    name: "three",
    value: 3,
    effectiveValue: 3,
    isCompound: false,
    position: 3,
  },
  // {
  //   id: 4,
  //   name: "four",
  //   value: 4,
  //   effectiveValue: 4,
  //   isCompound: false,
  //   position: 4,
  // },
];

const compoundValue = (value, acumulator) => value + value * (acumulator / 100);

const updateEffectiveValues = (taxList) => {
  let accumulatedValue = 0;
 return[...taxList].map((item) => {
    const newTax = item;
    if (item.isCompound) {
      item.effectiveValue = compoundValue(item.value, accumulatedValue);
      accumulatedValue += item.effectiveValue;
    } else {
      item.effectiveValue = item.value;
    }

    return newTax;
  });


};

export const SandBox = () => {
  const [taxes, setTaxes] = useState(db);

  const nameRef = useRef(null);
  const valueRef = useRef(null);
  const updateRef = useRef(null);

  const toogleComposed = (id) => {
    const newTaxes = [...taxes];
    const clickedTaxIndex = newTaxes.findIndex((item) => item.id === id);
    const clickedTax = newTaxes[clickedTaxIndex];

    if (!clickedTax.isCompound) {
      const taxesToUpdate = newTaxes.slice(clickedTaxIndex, newTaxes.length);
      const notToUpdateTaxes = newTaxes.slice(0, clickedTaxIndex);

      let accumulatedValue = notToUpdateTaxes
        .map((item) => item.value)
        .reduce((acc, next) => acc + next, 0);

      const updatedTaxes = taxesToUpdate.map((item) => {
        const updatedEffectiveValue = compoundValue(
          item.value,
          accumulatedValue
        );
        accumulatedValue += updatedEffectiveValue;

        return {
          ...item,
          isCompound: true,
          effectiveValue: updatedEffectiveValue,
        };
      });

      return setTaxes([...notToUpdateTaxes, ...updatedTaxes]);
    }

    const firstCompoundIndex = newTaxes.findIndex((item) => item.isCompound);
    const notToUpdateTaxes = newTaxes.slice(0, firstCompoundIndex);
    const taxesToUpdate = newTaxes.slice(
      firstCompoundIndex,
      clickedTaxIndex + 1
    );
    const afterClickedTaxes = newTaxes.slice(
      clickedTaxIndex + 1,
      newTaxes.length
    );

    const updatedTaxes = taxesToUpdate.map((item) => {
      return {
        ...item,
        isCompound: false,
        effectiveValue: item.value,
      };
    });

    setTaxes([...notToUpdateTaxes, ...updatedTaxes, ...afterClickedTaxes]);
  };

  const handleAdd = () => {
    if (!valueRef.current.value || !nameRef.current.value) {
      return;
    }

    const lastTax = taxes.at(-1);

    const compoundValue =
      valueRef.current.value +
      valueRef.current.value *
        taxes.reduce((acc, next) => acc + next.effectiveValue, 0);

    const newTax = {
      id: lastTax.id + 1,
      position: lastTax.position + 1,
      value: Number(valueRef.current.value),
      name: nameRef.current.value,
      isCompound: !lastTax.isCompound ? false : true,
      effectiveValue: !lastTax.isCompound
        ? Number(valueRef.current.value)
        : compoundValue,
    };

    setTaxes([...taxes, newTax]);
  };

  const handleDelete = (id) => {
    if (taxes.length === 1) {
      return setTaxes([]);
    }

    const newTaxes = [...taxes];
    const taxToDeleteIndex = newTaxes.findIndex((item) => item.id === id);

    let accumulatedValue = 0;

    if (taxToDeleteIndex === 0) {
      newTaxes.splice(0, 1);
      newTaxes[0].isCompound = false;
      newTaxes[0].effectiveValue = newTaxes[0].value;

      accumulatedValue = 0;

      const updatedTaxes = newTaxes.map((item) => {
        if (item.position === 0) {
          accumulatedValue += item.value;

          return item;
        }

        const effectiveValue = !item.isCompound
          ? item.value
          : compoundValue(item.value, accumulatedValue);

        const newItem = {
          ...item,
          effectiveValue,
        };
        accumulatedValue += effectiveValue;

        return newItem;
      });

      return setTaxes(updatedTaxes);
    }
    newTaxes.splice(taxToDeleteIndex, 1);
    const updatedTaxes = newTaxes.map((item) => {
      if (item.position === 0 || !item.isCompound) {
        item.effectiveValue = item.value;
        accumulatedValue += item.value;
        return item;
      }

      item.effectiveValue = compoundValue(item.value, accumulatedValue);

      return item;
    });

    setTaxes(updatedTaxes);
  };

  const handleChange = (id, newValue) => {
    const newTaxes = [...taxes];

    const selectedTaxIndex = newTaxes.findIndex((item) => item.id === id);
    newTaxes[selectedTaxIndex].value = Number(newValue);

    setTaxes(updateEffectiveValues(newTaxes));
  };

  const total = taxes
    .reduce((acc, next) => acc + next.effectiveValue, 0)
    .toFixed(4);

  return (
    <div>
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <input ref={nameRef} placeholder="name" type="text" />
        <input ref={valueRef} placeholder="number" type="number" />
        <button onClick={handleAdd}>add</button>
      </div>

      <main style={{ marginLeft: "10px", marginTop: "10px" }}>
        {taxes?.map((item) => (
          <div
            style={{
              display: "flex",
              gap: "20px",
              border: "1px solid",
              width: "200px",
              padding: "2px 10px",
            }}
            key={item.id}
          >
            <button onClick={() => handleDelete(item.id)}>X</button>
            <p>{item.name}</p>
            {/* <p>{item.value}</p> */}
            <input
              style={{ width: "30px" }}
              type="number"
              value={item.value}
              onChange={(e) => handleChange(item.id, e.target.value)}
              ref={updateRef}
            />
            <input
              checked={item.isCompound}
              type="checkbox"
              disabled={item.position === 1}
              onChange={() => toogleComposed(item.id)}
            />
          </div>
        ))}
        total: &nbsp;
        {total}
        <span>%</span>
        <button onClick={() => console.log(taxes)}>xxx</button>
      </main>
    </div>
  );
};
