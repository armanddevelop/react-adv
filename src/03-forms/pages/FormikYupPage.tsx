import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
const yupSchemaValidation = Yup.object({
  firstName: Yup.string().max(15,"Must be 15 characteres or less").required("required"),
  lastName: Yup.string().max(10,"must be 10 characteres").required("required"),
  email: Yup.string().email("invalid email").required("required")
});
interface FieldsForm{
  firstName?:string,
  lastName?:string,
  email?:string
}
const fieldsForm:FieldsForm = {
  firstName:"",
  lastName:"",
  email:"",
};
export const FormikYupPage = () => {
  const {
    touched,
    errors,
    handleSubmit,
    handleReset,
    getFieldProps
  } = useFormik({
    initialValues:fieldsForm,
    onSubmit: values =>{
      console.log("This is the value of values ", values)
    },
    validationSchema: yupSchemaValidation
  });
  return (
    <div>
      <h1>Fomik Yup Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...getFieldProps("firstName")}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...getFieldProps("lastName")}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="lastName">Email</label>
        <input
          type="email"
          {...getFieldProps("email")}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Update Information</button>
        <button onClick={handleReset}>Clear Information</button>
      </form>
    </div>
  )
}
