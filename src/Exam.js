import React from "react";

export default function Exam() {
  const [value, setValue] = React.useState(0);
  const changeWithUseCallback = React.useCallback(() => {
    console.log("onChangeChild");
  }, []);
  const changeWithoutUseCallback = () => {
    console.log("onChangeChild");
  };

  return (
    <div className="App">
      <button type="button" onClick={() => setValue(value + 1)}>
        Change value
      </button>
      <h1>{value}</h1>
      <Child1 onChange={changeWithUseCallback} />
      <Child2 onChange={changeWithoutUseCallback} />
    </div>
  );
}

const Child1 = React.memo(({ onChange }) => {
  console.log("Child1 render!!!");
  return null;
});

const Child2 = React.memo(({ onChange }) => {
  console.log("Child2 render!!!");
  return null;
});
