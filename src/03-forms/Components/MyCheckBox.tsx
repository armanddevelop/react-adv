import { ErrorMessage, useField} from 'formik';
interface MyTextInputProps{
  name:string,
  label?:string,
  [x:string]:any
}
const styles = {
  cursor:"pointer"
}
export const MyCheckBox = (props:MyTextInputProps) => {
  const{label,id,...args}=props;
  const [field] = useField({...args,type:"checkbox"});
  //console.log("this is the value of field ", field);
  //console.log("this is the value of args ", args);
  return (
    <>
      <label style={styles}>
        <input type="checkbox"{...field}{...args} style={styles}></input>
        {label}
      </label>
      <ErrorMessage name={args.name} component="span"/>
    </>
  )
}
