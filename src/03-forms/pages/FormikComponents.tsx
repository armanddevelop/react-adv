import {Formik,Field,ErrorMessage,Form} from "formik";
//import { FomikTest } from "./FomikTest";
import * as Yup from "yup";
import "../styles/styles.css";
const yupSchemaValidation = Yup.object({
  firstName: Yup.string().max(15,"Must be 15 characteres or less").required("Required First Name"),
  lastName: Yup.string().max(10,"Must be 10 characteres").required("Required Last Name"),
  email: Yup.string().email("Invalid email").required("Required email"),
  jobType: Yup.string().required("Select Job type option"),
  terms: Yup.boolean().oneOf([true],"Required Terms and conditions")
});
interface FieldsForm{
  firstName?:string,
  lastName?:string,
  email?:string,
  jobType?:string,
  terms?:boolean
}
const fieldsForm:FieldsForm = {
  firstName:"",
  lastName:"",
  email:"",
  jobType:"",
  terms:false
};
export const FormikComponents = () => {
  return (
    <div>
      <h1>Fomik Components Tutorial</h1>
      <Formik
        initialValues={fieldsForm}
        onSubmit={(values)=>console.log(values)}
        validationSchema={yupSchemaValidation}
      >
        {
          ({handleReset}) =>(
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text"/>
              <ErrorMessage name="firstName" component="span"/>
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text"/>
              <ErrorMessage name="lastName" component="span"/>
              <label htmlFor="lastName">Email</label>
              <Field name="email" type="email"/>
              <ErrorMessage  name="email" component="span"/>
              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                <option value="">Select type job</option>
                <option value="developer">Developer</option>
                <option value="serviceDsk">Service Desk</option>
                <option value="designer">Designer</option>
                <option value="it-senior">it Senior</option>
                <option value="it-junior">it Junior</option>
              </Field>
              <ErrorMessage  name="jobType" component="span"/>
              <label>
                <Field name="terms" type="checkbox"/>
                Terms and conditions
              </label>
              <ErrorMessage  name="terms" component="span"/>
              <button type="submit">Update Information</button>
              <button onClick={handleReset}>Clear Information</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
