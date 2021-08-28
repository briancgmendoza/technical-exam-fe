import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Importing necessary files for API Request
import useHttp from "../../Hooks/use-http";
import { getData, addData, deleteEmployee } from "../../Lib/api";

// Importing Re-usesable Components
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Spinner from "../../Components/Spinner";

// Importing Bootstrap Icons .svg file
import Pencil from "../../Asset/pencil-icon.svg";
import Delete from "../../Asset/delete-icon.svg";

const ViewList = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let { sendRequest, status, data, error } = useHttp(getData, true);

  // Getting the data from db
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <p className="d-flex justify-content-center m-3">{error}</p>;
  }

  // Add Request
  const handleAdd = ({
    lastName,
    firstName,
    middleName,
    age,
    address,
    phoneNumber,
  }: any) => {
    addData({ lastName, firstName, middleName, age, address, phoneNumber });
  };

  // Once Delete icon is clicked, delete the user in the db depending on its EmployeeMasterID
  const handleDelete = (id: any) => {
    if (window.confirm("Are you sure?")) {
      deleteEmployee(id);
    }

    /* In C++, return 0 means it was successful and it did what it was intended to do. 
               Not sure if its the same in JS, but I prefer returning 0 or putting return after if(){}    
    */
    return 0;
  };

  return (
    <section>
      <button
        type="button"
        className="btn btn-primary m-2 float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Employee
      </button>
      <h3 className="d-flex justify-content-center m-3 fw-bold">
        View List Page
      </h3>

      <table className="table table-stripped">
        <thead>
          <tr>
            <th>EmployeeID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {/* If data is empty, return EmployeeDB is empty */}
          {data.length > 0 ? (
            data.map((emp: any) => (
              <tr key={emp.EmployeeMasterID}>
                <td>{emp.EmployeeMasterID}</td>
                <td>{emp.LastName}</td>
                <td>{emp.FirstName}</td>
                <td>{emp.MiddleName}</td>
                <td>{emp.Age}</td>
                <td>{emp.Address}</td>
                <td>{emp.PhoneNumber}</td>
                <td>
                  <Link
                    to={`/detailspage/${emp.EmployeeMasterID}`}
                    className="btn btn-light mr-1"
                  >
                    <img src={Pencil} alt="Edit" />
                  </Link>

                  <Button
                    type="button"
                    onClick={() => handleDelete(emp.EmployeeMasterID)}
                    className="btn btn-light mr-1"
                  >
                    <img src={Delete} alt="Delete" />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <p className="d-flex justify-content-center m-3">
              Employee Database is Empty.
            </p>
          )}
        </tbody>
      </table>

      <section
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Employee</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 w-100 bd-highlight">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Last Name</span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Ex: Dela Cruz"
                      value={lastName}
                      onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setLastName(e.currentTarget.value)
                      }
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">First Name</span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Ex: Juan"
                      value={firstName}
                      onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setFirstName(e.currentTarget.value)
                      }
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">Middle Name</span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Ex: Gervasio"
                      value={middleName}
                      onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setMiddleName(e.currentTarget.value)
                      }
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">Age</span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Ex: 20"
                      value={age}
                      onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setAge(e.currentTarget.value)
                      }
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">Address</span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Ex: Metro Manila, Philippines"
                      value={address}
                      onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setAddress(e.currentTarget.value)
                      }
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">Phone Number</span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Ex: 09123456789"
                      value={phoneNumber}
                      onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setPhoneNumber(e.currentTarget.value)
                      }
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary float-end"
                    onClick={() =>
                      handleAdd({
                        lastName,
                        firstName,
                        middleName,
                        age,
                        address,
                        phoneNumber,
                      })
                    }
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ViewList;
