import { useEffect } from "react";
import { Link } from "react-router-dom";

// Importing necessary files for API Request
import useHttp from "../../Hooks/use-http";
import { getData, addData, deleteEmployee } from "../../Lib/api";

// Importing Re-usesable Components
import Button from "../../Components/Button";
import Spinner from "../../Components/Spinner";

// Importing Bootstrap Icons .svg file
import Pencil from "../../Asset/pencil-icon.svg";
import Delete from "../../Asset/delete-icon.svg";
import Modal from "../../Components/Modal";
import Form from "../../Components/Form";

const ViewList = () => {
  let { sendRequest, status, data, error } = useHttp(getData, true);

  // Getting the data from db
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="d-flex justify-content-center m-3">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <p className="d-flex justify-content-center m-3">{error}</p>;
  }

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
                    onClick={() => {
                      if (window.confirm("Are you sure?")) {
                        deleteEmployee(emp.EmployeeMasterID);
                      }
                      /* In C++, return 0 means it was successful and it did what it was intended to do. Not sure if its the same in JS, but I prefer returning 0 or putting return after if(){} */
                      return 0;
                    }}
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

      <Modal modalName="Add Employee">
        <Form
          btnText="Create"
          onSubmit={(props: any) => {
            addData(props);
          }}
        />
      </Modal>
    </section>
  );
};

export default ViewList;
