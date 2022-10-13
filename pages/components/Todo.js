import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

export default function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function closeHandler() {
    setShowModal(false);
  }

  function deleteHandler() {
    // console.log(props.text, 'Clicked!');
    setShowModal(true);
  }

  return (
    <>
      <div></div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>

        {showModal && (
          <Modal onCancel={closeHandler} onConfirm={closeHandler} />
        )}
        {showModal && <Backdrop onCancel={closeHandler} />}
      </div>
    </>
  );
}
