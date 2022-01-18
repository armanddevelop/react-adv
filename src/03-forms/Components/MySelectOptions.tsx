import { ErrorMessage, useField} from 'formik';
interface MyTextInputProps{
  label:string,
  name:string,
  placeholder?:string,
  [x:string]:any,
  typesJobs?:Array<string>
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
          typesJobs?.map((job:any,idx:number)=>{
            if (job === "") {
              return <option key={idx} value={job}>Select a Option</option>
              }
              else {
                return <option key={idx} value={job}>{job}</option>
              }
          })
        }
      </select>
     <ErrorMessage name={args.name} component="span"/>
    </>
  )
}
