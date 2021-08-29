import { useEffect } from "react";
import { useParams } from "react-router-dom";

/* Importing Formik and Yup */
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";

/* Importing necessary files for API request */
import useHttp from "../../Hooks/use-http";
import { getSelectedData, editEmployee } from "../../Lib/api";

/* Importing Re-useable Components */
import Button from "../../Components/Button";
import Spinner from "../../Components/Spinner";

/* Here's my validation. Didn't get a chance to use if statements for my validation since Yup is already doing it for me under the hood,
  If needed, I can try and re-do the code.
*/
const formSchema = Yup.object().shape({
  lastName: Yup.string()
    .min(
      1,
      "Too Short!"
    ) /* Making it 1 because there's 2 letter last names like "Yu" */
    .max(20, "Too Long!")
    .required("Last Name is required!"),
  firstName: Yup.string()
    .min(1, "Too Short!")
    .max(20, "Too Long!")
    .required("First Name is required!"),
  middleName: Yup.string()
    .min(1, "Too Short!")
    .max(20, "Too Long!")
    .required("Middle Name is required!"),
  age: Yup.number() /* Please note that this is only a validation, it'll only accept number in UI, but in backend it accepts it as string */
    .moreThan(0)
    .max(99, "Too Long!")
    .required("Age is required!")
    .typeError("Age must be a number!"),
  address: Yup.string()
    .min(5, "Too Short!")
    .max(500, "Too Long!")
    .required("Address is required!"),
  phoneNumber: Yup.string() /* Making it string because of + and - */
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Phone Number is required!"),
});

type Params = {
  id: string;
};

const DetailsPage = () => {
  /* Didn't get the chance to use useState since formik is already doing 
  the value and onChange automatically under the hood */
  let { id } = useParams<Params>();

  const myInitialValues = {
    id /* I'm getting the id from params */,
    lastName: "",
    firstName: "",
    middleName: "",
    age: "",
    address: "",
    phoneNumber: "",
  };

  let { sendRequest, status, data, error } = useHttp(getSelectedData, true);

  /* Getting the data of specific ID from db */
  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

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
      <h3 className="d-flex justify-content-center m-3 fw-bold">
        {`Details Page for Employee with ID No. ${id}`}
      </h3>

      {data.map((emp: any) => (
        <Formik
          key={emp.EmployeeMasterID}
          initialValues={myInitialValues}
          validationSchema={formSchema}
          onSubmit={(values) => editEmployee(values)}
        >
          {({ errors, touched }) => (
            <FormikForm className="p-2 w-100 bd-highlight">
              {/* Decided to just use inline style for every error message, 
                got lazy looking up for bootstrap css styles */}

              {/* Last Name Field */}
              <div className="input-group mb-3">
                <span className="input-group-text">Last Name</span>
                <Field
                  name="lastName"
                  className="form-control"
                  placeholder={emp.LastName}
                />

                {errors.lastName && touched.lastName && (
                  <p style={{ color: "salmon", marginLeft: "10px" }}>
                    {errors.lastName}
                  </p>
                )}
              </div>

              {/* First Name Field */}
              <div className="input-group mb-3">
                <span className="input-group-text">First Name</span>
                <Field
                  name="firstName"
                  className="form-control"
                  placeholder={emp.FirstName}
                />
                {errors.firstName && touched.firstName && (
                  <p style={{ color: "salmon", marginLeft: "10px" }}>
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Middle Name Field */}
              <div className="input-group mb-3">
                <span className="input-group-text">Middle Name</span>
                <Field
                  name="middleName"
                  className="form-control"
                  placeholder={emp.MiddleName}
                />
                {errors.middleName && touched.middleName && (
                  <p style={{ color: "salmon", marginLeft: "10px" }}>
                    {errors.middleName}
                  </p>
                )}
              </div>

              {/* Age Field */}
              <div className="input-group mb-3">
                <span className="input-group-text">Age</span>
                <Field
                  name="age"
                  className="form-control"
                  placeholder={emp.Age}
                />
                {errors.age && touched.age && (
                  <p style={{ color: "salmon", marginLeft: "10px" }}>
                    {errors.age}
                  </p>
                )}
              </div>

              {/* Address Field */}
              <div className="input-group mb-3">
                <span className="input-group-text">Address</span>
                <Field
                  name="address"
                  className="form-control"
                  placeholder={emp.Address}
                />
                {errors.address && touched.address && (
                  <p style={{ color: "salmon", marginLeft: "10px" }}>
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Phone Number Field */}
              <div className="input-group mb-3">
                <span className="input-group-text">Phone Number</span>
                <Field
                  name="phoneNumber"
                  className="form-control"
                  placeholder={emp.PhoneNumber}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <p style={{ color: "salmon", marginLeft: "10px" }}>
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Button */}
              <Button
                type="submit"
                name="Submit"
                className="btn btn-primary float-end"
              >
                Update
              </Button>
            </FormikForm>
          )}
        </Formik>
      ))}
    </section>
  );
};

export default DetailsPage;
