import {Formik,Form} from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import {MyTextInput} from "../Components";


const yupSchemaValidation = Yup.object({
  firstName: Yup.string()
    .min(2,"The name field has a minumin 2 characters")
    .max(15,"The name field is more than 15 characters")
    .required("First name required"),
  lastName: Yup.string().max(10,"the last name is too long").required("Last name required"),
  email: Yup.string().email("invalid email").required("The email is required"),
  password: Yup.string().min(6,"The minimum characteres in password is 6 characteres")
  .max(8,"the password is too long").required("the password is required"),
  passwordConfirmation: Yup.string().oneOf([Yup.ref("password"),null],"Password must be match")
    .required("Confirm password is required")
});
interface FieldsForm{
  firstName:string,
  lastName:string,
  email:string,
  password:string,
  passwordConfirmation:string
}
const fieldForms:FieldsForm={
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  passwordConfirmation:"",
}
export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register formik page</h1>
      <Formik
        initialValues={fieldForms}
        onSubmit={(values)=>console.log("This are the values of the form ", values)}
        validationSchema={yupSchemaValidation}
      >
        {
          ({handleReset})=>(
            <Form>
              <MyTextInput
                name="firstName"
                placeholder="First name"
                type="text"
              />
              <MyTextInput
                name="lastName"
                placeholder="Last name"
                type="text"
              />
              <MyTextInput
                name="email"
                placeholder="example@mail.com"
                type="email"
              />
              <MyTextInput
                name="password"
                placeholder="*****"
                type="password"
              />
              <MyTextInput
                name="passwordConfirmation"
                placeholder="*****"
                type="password"
              />
              <button type="submit">Update Information</button>
              <button onClick={handleReset}>Clear info</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
