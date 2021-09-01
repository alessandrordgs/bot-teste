/* eslint-disable no-undef */
import React from 'react';
import { useState } from 'react';
import './style.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import Modal from '../Modal';


const schema = Yup.object().shape({
  yourName: Yup.string().required(),
  yourLocal: Yup.string().required(),
  yourAge: Yup.date(),
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

    await api.post('/user', formData)

    const isValid = await schema.isValid(formData);
    console.log(isValid);
  }

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="body">
      <p id="p2">Oi! Seja bem vindo ao meu "Bot"! 
      <br/> 
      Preciso que você preencha os campos abaixo com: nome completo,<br/>  cidade e estado,<br/> sua data de nascimento, <br/> seu e-mail,
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
        <Field name="yourName" type="text" placeholder="*Seu Nome" required/>
        {errors.yourName && (
          <div>{errors.yourName}</div>
        )}
        </div>

        <div>
        <Field name="yourLocal" type="text" placeholder="*Cidade e Estado" required/>
        </div>

        <div>
        <Field name="yourAge" type="date" placeholder="Data de Nascimento"/>
        </div>

        <div>
        <Field name="yourEmail" type="email" placeholder="*E-mail" required/>
        </div>

       </div>

        <div className="botao">
        <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}> E N V I A R </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
  </div>

    </Form>
        )}
      </Formik>

    </div>
  )
}
export default Body;