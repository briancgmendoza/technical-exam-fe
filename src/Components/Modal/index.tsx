type Props = {
  modalName: string;
  children: JSX.Element | string;
};

const Modal = ({ modalName, children }: Props) => {
  return (
    <section
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalName}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className="d-flex flex-row bd-highlight mb-3">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
