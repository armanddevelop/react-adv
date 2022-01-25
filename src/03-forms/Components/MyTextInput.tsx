import { ErrorMessage, useField} from 'formik';
interface MyTextInputProps{
  label?:string,
  name:string,
  type?:'text'| 'password'|'email',
  placeholder?:string,
  [x:string]:any
}
export const MyTextInput = (props:MyTextInputProps) => {
  const{label,id}=props;
  const [field] = useField(props);
  //console.log("this is the value of field ", field);
  //console.log("this is the value of args ", args);
  return (
    <>
      <label htmlFor={id||props.name}>{label}</label>
      <input className='text-input'{...field}{...props}></input>
      <ErrorMessage name={props.name} component="span"/>
    </>
  )
}
