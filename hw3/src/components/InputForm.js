import React, { useRef } from "react";

export function InputForm(props) {
  const ref = useRef();
  console.log(props);
  
  const onSubmit = (event) => {
    event.preventDefault();
  };
  
  const dataInput = () => {
    if (props.onDataUpdate) {
      const result = ref.current.value;
      props.onDataUpdate({
        albums: props.albums.slice(0, result),
        n: result
      });
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
      <input
        className="input"
        placeholder="Введите значение от 1 до 100"
        ref={ref}
        onChange={dataInput}
      />
      <button className="button" onClick={dataInput}>
        Submit
      </button>
      </form>
    </div>
  );
}
