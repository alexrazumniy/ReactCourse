import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      film: "",
    },

    validationSchema: Yup.object({
      film: Yup.string().required("Поле не может быть пустым!"),
    }),

    onSubmit: ({ film }) => {

      const newTitle = {film, id: Date.now().toString()}
      console.log(newTitle);
    },
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form-header">Название фильма</h3>
      <input
        className="input"
        type="text"
        name="film"
        placeholder="Введите название фильма"
        value={values.film}
        onChange={handleChange}        
      />
      {errors.film ? <p className="errormsg">{errors.film}</p> : null}

      <button className="submit-btn" type="submit">
        Добавить фильм
      </button>
    </form>
  );
};

export default Form;
