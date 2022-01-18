import {Field,ErrorMessage,Form} from "formik";

export const FomikTest = ({handleReset}:any) => {
  return (
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
