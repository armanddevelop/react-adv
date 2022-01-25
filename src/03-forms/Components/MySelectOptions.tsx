import { ErrorMessage, useField} from 'formik';
interface MyTextInputProps{
  label:string,
  name:string,
  placeholder?:string,
  [x:string]:any,
  typesJobs?:Array<Object> | Array<string>
}
export const MySelectOptions = (props:MyTextInputProps) => {
  const{label,id,typesJobs,...args}=props;
  const [field] = useField(args);
  //console.log("this is the value of field ", field);
  //console.log("this is the value of args ", args);
  //console.log("this is the value of jobs ", typesJobs);
  return (
    <>
      <label htmlFor={id||args.name}>{label}</label>
      <select {...field}{...args}>
        {
          typesJobs?.map(({label,id}:any)=>{
            if (label === "") {
              return <option key={id} value={id}>Select a Option</option>
              }
              else {
                return <option key={id} value={id}>{label}</option>
              }
          })
        }
      </select>
     <ErrorMessage name={props.name} component="span"/>
    </>
  )
}
