import React, { useEffect } from "react"
import { inject, observer } from "mobx-react";
import { useForm } from 'react-hook-form'


const Form = observer((props) => {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm()


  const onSubmit = (data) => {
    neeet.items = {...neeet.items, data}
    console.log(data)
    alert(data)

  }

  return(
    <form className="form_add" onSubmit={handleSubmit((onSubmit))}>
      <input className="input"  placeholder="Name" {...register("name")}></input>
      <input className="input" type="text"  placeholder="SuperPower" required="required"></input>
      <input className="input" type="number"  placeholder="Age" required="required" ></input>
      <button className="btn_add" onClick={(e) => neeet.add(e)}>ADD</button>
    </form>

  );
})

export default Form;