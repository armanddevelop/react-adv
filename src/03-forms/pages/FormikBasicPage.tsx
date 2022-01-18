import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";
interface ValuesForm {
  firstName:string,
  lastName:string,
  email:string
}
export const FormikBasicPage = () => {
  const validate =(values:ValuesForm)=>{
    const{firstName,lastName,email} = values;
    const firstNameInput = firstName.replace(/ /g,"");
    const lastNameInput = lastName.replace(/ /g,"");
    const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors:FormikErrors<ValuesForm> = {};
    if (!firstNameInput) {
      errors.firstName = "Required"
    }else if (firstNameInput.length >= 15) {
      errors.firstName  ="Must be 15 characteres or less"
    }
    if (!lastNameInput) {
      errors.lastName = "Required"
    }else if (lastNameInput.length >= 10) {
      errors.lastName="Must be 10 characteres or less"
    }
    if (!email) {
      errors.email = "Required"
    }else if (!regExEmail.test(email)){
      errors.email = "Invalid Email address"
    }
    return errors;
  }
  const {handleChange,handleSubmit,values,errors,handleReset, touched, handleBlur} = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      email:""
    },
    onSubmit: values =>{
      console.log("This is the value of values ", values)
    },
    validate: validate
  });
  return (
    <div>
      <h1>Fomik Basic Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="lastName">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Update Information</button>
        <button onClick={handleReset}>Clear Information</button>
      </form>
    </div>
  )
}
