import React, { useContext } from "react";
import { DataContextFunc } from "./Task2/ContextFunc";

export const InputForm = () => {
  const { handlechange } = useContext(DataContextFunc);

  return (
    <div>
      <div>
        <form className="form" onSubmit={handlechange}>
          <input
            className="input"
            placeholder="Введите значение от 1 до 100"
            onChange={handlechange}
          />
          <button className="button" onClick={handlechange}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// export function InputForm(props) {
//   const ref = useRef();
//   console.log(props);

//   const onSubmit = (event) => {
//     event.preventDefault();
//   };

//   const dataInput = () => {
//     if (props.onDataUpdate) {
//       const result = ref.current.value;
//       props.onDataUpdate({
//         albums: props.albums.slice(0, result),
//         n: result
//       });
//     }
//   };

//   return (
//     <div>
//       <form className="form" onSubmit={onSubmit}>
//       <input
//         className="input"
//         placeholder="Введите значение от 1 до 100"
//         ref={ref}
//         onChange={dataInput}
//       />
//       <button className="button" onClick={dataInput}>
//         Submit
//       </button>
//       </form>
//     </div>
//   );
// }
