import { useFormik } from "formik";
import * as Yup from "yup";

const YupForm = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },

    validationSchema: Yup.object({
      login: Yup.string()
        .max(15, "Login must have 15 characters maximum")
        .required(),
      password: Yup.string()
        .min(6, "Password must have 6 characters at least")
        .required(),
    }),
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
        onBlur={handleBlur}
      />
      {touched.login && errors.login ? <div>{errors.login}</div> : null}
      <input
        className="input"
        name="password"
        placeholder="Your password"
        value={values.password}
        onChange={handleChange}
        type="password"
        onBlur={handleBlur}
      />
      {touched.password && errors.password ? (
        <div>{errors.password}</div>
      ) : null}
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default YupForm;
