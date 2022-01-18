import { ErrorMessage, useField} from 'formik';
interface MyTextInputProps{
  name:string,
  label?:string,
  [x:string]:any
}
export const MyCheckBox = (props:MyTextInputProps) => {
  const{label,id,...args}=props;
  const [field] = useField({...args,type:"checkbox"});
  //console.log("this is the value of field ", field);
  //console.log("this is the value of args ", args);
  return (
    <>
      <label>
        <input type="checkbox"{...field}{...args}></input>
        {label}
      </label>
      <ErrorMessage name={args.name} component="span"/>
    </>
  )
}
