import formJson from "../data/customForm.json";
import * as Yup from "yup";
const buildInitialFields:{ [key:string]: any } = {};
const validationsFields: { [key:string]: any } = {};
export const buildFields = ()=>{
    for (const input of formJson) {
      const { name,value, validations } = input;
      buildInitialFields[name] = value;
      //Object.defineProperty(buildInitialValues,name,{value});
      //console.log(buildInitialValues);
      if (!validations) continue;
      let buildSchema = Yup.string();
      let boolField  =Yup.boolean();
      for (const rule of validations) {
        if (rule.type === "required") {
            buildSchema = buildSchema.required(rule.description);
        }
        if (rule.type === "email"){
          const {description} = rule;
          buildSchema = buildSchema.email(description);
        }
        if (rule.type === "minLength"){
          buildSchema = buildSchema.min((rule as any).min | 3, rule.description);
        }
        if (rule.type === "maxLength"){
          buildSchema = buildSchema.max((rule as any).max | 10, rule.description);
        }
        if (rule.type === "terms"){
          boolField = boolField.oneOf([true],rule.description);
        }
      }
      validationsFields[name]= buildSchema;
      if (name === "terms") {
         validationsFields[name]= boolField;
      }
    }
    return { buildInitialFields,validationsFields };
}