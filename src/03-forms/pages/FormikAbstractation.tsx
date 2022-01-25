import {Formik,Form} from "formik";
import {MyTextInput,MySelectOptions,MyCheckBox} from "../Components";
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
const jobsNames = ["","developer","serviceDsk","designer","it-senior","it-junior"];
export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Fomik Abstractation Tutorial</h1>
      <Formik
        initialValues={fieldsForm}
        onSubmit={(values)=>console.log(values)}
        validationSchema={yupSchemaValidation}
      >
        {
          ({handleReset}) =>(
            <Form>
              <MyTextInput
                placeholder="First Name"
                name="firstName"
                type="text"
              />
              <MyTextInput
                placeholder="Last Name"
                name="lastName"
                type="text"
              />
              <MyTextInput
                placeholder="exmaple@mail.com"
                name="email"
                type="email"
              />
              <MySelectOptions label="Job Type" name="jobType" typesJobs={jobsNames}/>
              <MyCheckBox name="terms" label="Terms & conditions"/>
              <button type="submit">Update Information</button>
              <button onClick={handleReset}>Clear Information</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
