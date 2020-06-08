import React from "react";

export default function ModalDelete(props) {
  const { isOpenModalDelete, cancelDelete, deleteItemInModal } = props;
  return (
    <>
      {isOpenModalDelete ? (
        <div className={isOpenModalDelete ? "modal active" : "modal"}>
          <div className="modal-delete">
            <h3 className="text-center my-3">Do you want to delete?</h3>
            <button className="btn btn-info mr-2" onClick={deleteItemInModal}>
              Accept
            </button>
            <button className="btn btn-secondary ml-2" onClick={cancelDelete}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
