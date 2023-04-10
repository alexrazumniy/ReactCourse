import { useContext } from "react";
import { DataContextFunc } from "./Task2/ContextFunc";

const InputForm = () => {
  const { handleChange } = useContext(DataContextFunc);

  return (
    <div>
      <form className="form" onSubmit={handleChange}>
        <input className="input" placeholder="Введите значение от 1 до 100" />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
