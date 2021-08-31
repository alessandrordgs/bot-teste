import React from "react";
import "./modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Obrigada por testar o meu Bot!</h1>
        </div>
        <form className="plhdl">

          <p>Você tem algum feedback? Me mande um e-mail</p>

          <input type="text" name="yourName" placeholder="NOME"/>

          <input type="email" name="yourEmail" placeholder="E-MAIL"/>

          <label>Mensagem</label>
          <textarea name="message" rows='4'/>
          <input type="submit" value="Send"/>

        </form>




        <div className="footer">

          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;