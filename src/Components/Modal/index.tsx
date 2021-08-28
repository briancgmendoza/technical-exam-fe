// Importing Re-useable Components
import Button from "../Button";
import Input from "../Input";

type Props = {
  show: boolean;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Modal = ({ value, onChange }: Props) => {
  return (
    <div className="modal fade" id="myModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Employee</h5>
            <Button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text">Last Name:</span>
              <Input
                type="text"
                placeholder="Last Name"
                required
                value={value}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="modal-footer">
            <Button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </Button>
            <Button type="button" className="btn btn-primary">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
