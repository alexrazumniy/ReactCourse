import { useContext } from "react";
import { DataContextFunc } from "./Task2/ContextFunc";

const InputForm = () => {
  const { handlechange } = useContext(DataContextFunc);

  return (
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
  );
};

export default InputForm;