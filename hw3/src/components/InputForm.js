import React, { useRef } from 'react';

export function InputForm (props) {
  const ref = useRef();

  const handleInput = () => {
    const res = ref.current.value;
    return res;
  }

  const dataInput = (n) => {
    if (props.onDataUpdate) {
      const res = ref.current.value;
      props.onDataUpdate(res);
    }
  }

    return(
      <div>
        <input className="input" id="input" placeholder="Введите значение от 1 до 100" ref={ref}/>
        <button className="button" onClick={dataInput}>Submit</button>
      </div>
    )
}