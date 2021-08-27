/* eslint-disable no-undef */
import React from 'react';
import './style.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
/*import { useForm } from "react-hook-form";*/

const schema = Yup.object().shape({
  yourName: Yup.string().required(),
  yourLocal: Yup.string().required(),
  yourAge: Yup.number(),
  yourEmail: Yup.string().email().required(),

})

function Body (){
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      yourName: event.target[0].value,
      yourLocal: event.target[1].value,
      yourAge: event.target[2].value,
      yourEmail: event.target[3].value,
     
    };
    const isValid = await schema.isValid(formData);
    console.log(isValid);
  }

  return (
    <div className="body">
      <p id="p2">Oi! Seja bem vindo ao meu ChatBot! 
      <br/> 
      Preciso que você preencha os campos abaixo, com: nome completo,<br/>  cidade e estado,<br/> sua idade, <br/> seu e-mail,
      <br/> respectivamente.
      Muito obrigada!
      </p>

      <Formik
        ValidationSchema={schema}
        initialValues={{
          yourName: '',
          yourLocal: '',
          yourAge: '',
          yourEmail: '',
        }}
>
        {( {errors} ) => (
          <Form onSubmit={createUser}>
        <div className="plhdl">

      <div>
        <Field name="yourName" type="text" placeholder="*Seu Nome"/>
        {errors.yourName && (
          <div>{errors.yourName}</div>
        )}
        </div>

        <div>
        <Field name="yourLocal" type="text" placeholder="*Cidade e Estado"/>
        </div>

        <div>
        <Field name="yourAge" type="number" placeholder="Data de Nascimento"/>
        </div>

        <div>
        <Field name="yourEmail" type="email" placeholder="*E-mail"/>
        </div>

       </div>

       <div className="botao">
        <button className="btn">E N V I A R</button>
        </div>

    </Form>
        )}
      </Formik>
        
     


    </div>
  )
}
export default Body;