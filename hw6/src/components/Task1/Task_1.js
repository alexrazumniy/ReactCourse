import Form from "./customForm";
import FormikForm from "./formikForm";
import YupForm from "./yupForm";
import ReactHookForm from "./reactHookForm";

const Task1 = () => {
  return (
    <div className="task_container">
      <h2>TASK #1 Working with forms. State Manager Redux</h2>
      <h4>Usual custom form</h4>
      <Form />
      <h4>Form created with Formik</h4>
      <FormikForm />
      <h4>Form created with Yup</h4>
      <YupForm />
      <h4>Form created with ReactHookForm</h4>
      <ReactHookForm />
    </div>
  );
};

export default Task1;
