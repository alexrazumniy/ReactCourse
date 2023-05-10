import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  login: Yup.string().required("Login field needs to be filled!"),
  password: Yup.string().required("Password field needs to be filled!"),
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ login, password }) => {
    alert(`Ваш логин ${login}, пароль ${password}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input"
        type="text"
        placeholder="Your login"
        {...register("login", { required: true, maxLength: 20 })}
      />
      {errors.login && <div>{errors.login?.message}</div>}
      <input
        className="input"
        type="password"
        placeholder="Your password"
        {...register("password", { required: true, minLength: 6 })}
      />
      {errors.password && <div>{errors.password?.message}</div>}
      <button className="button" type="submit">
        Log in
      </button>
    </form>
  );
};

export default ReactHookForm;
