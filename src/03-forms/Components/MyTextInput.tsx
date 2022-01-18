import { ErrorMessage, useField} from 'formik';
interface MyTextInputProps{
  label?:string,
  name:string,
  type?:'text'| 'password'|'email',
  placeholder?:string,
  [x:string]:any
}
export const MyTextInput = (props:MyTextInputProps) => {
  const{label,id,...args}=props;
  const [field] = useField(args);
  //console.log("this is the value of field ", field);
  //console.log("this is the value of args ", args);
  return (
    <>
      <label htmlFor={id||args.name}>{label}</label>
      <input className='text-input'{...field}{...args}></input>
      <ErrorMessage name={args.name} component="span"/>
    </>
  )
}
