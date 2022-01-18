import { FormEvent } from "react";
import "../styles/styles.css";
import {useForm} from "../hooks/useForm";


export const RegisterPage = () => {
  const {
    formData,
    name,
    email,
    password1,
    password2,
    onChangeData,
    resetForm,
    isValidEmail
  }=useForm({
    name:"",
    email:"",
    password1:"",
    password2:"",
  });
  const genericError = <span>This field is mandatory</span>;
  const errorEmail = <span>Enter a valid email</span>;
  const errPassLength = <span>The password must be 6 characteres</span>;
  const errPassSame = <span>The password must be the same</span>;
  const onSubmitData =(evt:FormEvent<HTMLFormElement>)=>{
    evt.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <h1>Register page</h1>
      <form noValidate onSubmit={onSubmitData}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          className={`${name.trim().length<=0 && "has-error"}`}
          onChange={(e)=>onChangeData(e)}
        />
        {name.trim().length<=0 && genericError}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          className={`${(email.trim().length<=0 || !isValidEmail(email)) && "has-error"}`}
          onChange={(e)=>onChangeData(e)}
        />
        {email.trim().length<=0 && genericError}
        {!isValidEmail(email) && errorEmail}
        <input
          type="password"
          placeholder="Pasword"
          name="password1"
          value={password1}
          onChange={(e)=>onChangeData(e)}
        />
        {password1.trim().length<=0 && genericError}
        {(password1.trim().length < 6 && password1.trim().length > 0) && errPassLength}
        <input
          type="password"
          placeholder="Retype password"
          name="password2"
          value={password2}
          onChange={(e)=>onChangeData(e)}
        />
        {password2.trim().length<=0 && genericError}
        {(password2.trim().length < 6 && password1.trim().length > 0) && errPassLength}
        {password1.trim() !== password2.trim() && errPassSame}
        <button type="submit">Submit</button>
         <button type="button" onClick={resetForm}>Reset Information</button>
      </form>
    </div>
  )
}
