import { useFormik } from "formik";

const FormikForm = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: ({ login, password }) => {
      alert(`Ваш логин ${login}, пароль ${password}`);
    },
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        name="login"
        placeholder="Your login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        className="input"
        name="password"
        placeholder="Your password"
        value={values.password}
        onChange={handleChange}
        type="password"
      />

      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormikForm;
