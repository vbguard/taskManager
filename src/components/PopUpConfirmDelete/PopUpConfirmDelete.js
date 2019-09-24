import React, { Component } from "react";
import styles from "./PopUpConfirmDelete.module.css";

const {
  container,
  title,
  btnsContainer,
  button,
  btnDelete,
  btnCancel
} = styles;
const btnDeleteStyle = [button, btnDelete];
const btnCancelStyle = [button, btnCancel];

class PopUpConfirmDelete extends Component {
  state = {};

  render() {
    return (
      <div className={container}>
        <h1 className={title}>Подтвердите удаление задачи</h1>
        <div className={btnsContainer}>
          <button className={btnDeleteStyle.join(" ")}>Удалить</button>
          <button className={btnCancelStyle.join(" ")}>Отмена</button>
        </div>
      </div>
    );
  }
}

export default PopUpConfirmDelete;
