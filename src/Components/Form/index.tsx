// Importing Formik and Yup
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";

// Importing Re-useable Components
import Button from "../Button";

const formSchema = Yup.object().shape({
  lastName: Yup.string()
    .min(1, "Too Short!") // Making it 1 because there's 2 letter last names like "Yu"
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
  age: Yup.number() // Please note that this is only a validation, it'll only accept number in UI, but in backend it accepts it as string
    .moreThan(0)
    .max(99, "Too Long!")
    .required("Age is required!")
    .typeError("Age must be a number!"),
  address: Yup.string()
    .min(5, "Too Short!")
    .max(500, "Too Long!")
    .required("Address is required!"),
  phoneNumber: Yup.string() // Making it string because of + and -
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Phone Number is required!"),
});

// FIXME: Can't figure out a way to define props
// type Props = {
//   lastName: string;
//   firstName: string;
//   middleName: string;
//   age: string;
//   address: string;
//   phoneNumber: string;
//   onSubmit: () => any;
// };

const Form = ({ btnText, onSubmit }: any) => {
  const myInitialValues = {
    lastName: "",
    firstName: "",
    middleName: "",
    age: "",
    address: "",
    phoneNumber: "",
  };

  return (
    <>
      <Formik
        initialValues={myInitialValues}
        validationSchema={formSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <FormikForm className="p-2 w-100 bd-highlight">
            {/* Last Name Field */}
            <div className="input-group mb-3">
              <span className="input-group-text">Last Name</span>
              <Field name="lastName" className="form-control"></Field>
              {errors.lastName && touched.lastName && (
                <p style={{ color: "salmon", marginLeft: "10px" }}>
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* First Name Field */}
            <div className="input-group mb-3">
              <span className="input-group-text">First Name</span>
              <Field name="firstName" className="form-control" />
              {errors.firstName && touched.firstName && (
                <p style={{ color: "salmon", marginLeft: "10px" }}>
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Middle Name Field */}
            <div className="input-group mb-3">
              <span className="input-group-text">Middle Name</span>
              <Field name="middleName" className="form-control" />
              {errors.middleName && touched.middleName && (
                <p style={{ color: "salmon", marginLeft: "10px" }}>
                  {errors.middleName}
                </p>
              )}
            </div>

            {/* Age Field */}
            <div className="input-group mb-3">
              <span className="input-group-text">Age</span>
              <Field name="age" className="form-control" />
              {errors.age && touched.age && (
                <p style={{ color: "salmon", marginLeft: "10px" }}>
                  {errors.age}
                </p>
              )}
            </div>

            {/* Address Field */}
            <div className="input-group mb-3">
              <span className="input-group-text">Address</span>
              <Field name="address" className="form-control" />
              {errors.address && touched.address && (
                <p style={{ color: "salmon", marginLeft: "10px" }}>
                  {errors.address}
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="input-group mb-3">
              <span className="input-group-text">Phone Number</span>
              <Field name="phoneNumber" className="form-control" />
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
              {btnText}
            </Button>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default Form;
