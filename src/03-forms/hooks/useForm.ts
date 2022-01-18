import { ChangeEvent, useState } from "react";

export const useForm = <T>(initDataState:T)=>{
  const [formData, setFormData] = useState(initDataState);
  const onChangeData =(evt:ChangeEvent<HTMLInputElement>)=>{
    const{name,value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  const resetForm =()=>{
    setFormData({...initDataState});
  }
  const isValidEmail = (email:string)=>{
    // eslint-disable-next-line no-useless-escape
    const regExEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    return regExEmail.test(email);
  }
  return{
    ...formData,
    formData,
    onChangeData,
    resetForm,
    isValidEmail
  }
}