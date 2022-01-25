import {Formik,Form} from "formik";
import * as Yup from "yup";
import formJson from "../data/customForm.json";
import {buildFields} from "../utils/utilsDinamicForm";
import { MyTextInput,MySelectOptions,MyCheckBox } from '../Components';
export const DynamicFormPage = () => {
  const validations= Yup.object({...buildFields().validationsFields});
  console.log(validations);
  return (
      <div>
        <h1>Dynamic Forms</h1>
        <Formik
          initialValues={buildFields().buildInitialFields}
          onSubmit={(values)=>console.log(values)}
          validationSchema={validations}
        >
          {
            ({handleReset})=>(
              <Form noValidate>
                {
                  formJson.map(({name,placeholder,type,label,options})=>{
                    if (type === "input" || type === "email" || type === "password"){
                      return <MyTextInput
                              key={name}
                              name={name}
                              placeholder={placeholder}
                              type={(type as any)}
                          />
                    }else if(type === "select"){
                      return <MySelectOptions
                                key={name}
                                name={name}
                                label={label}
                                typesJobs={options}
                              />
                    }else if(type === "checkbox"){
                      return <MyCheckBox
                                key={name}
                                name={name}
                                label={label}
                              />
                    }
                    throw new Error(`Field not found type: ${type}`);
                  })
                }
                <button type="submit">Update Data</button>
                <button onClick={handleReset}>Clear Data</button>
              </Form>
            )
          }
        </Formik>
      </div>
    )
}
