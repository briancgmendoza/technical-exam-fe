import { useEffect } from "react";
import { useParams } from "react-router-dom";

// Importing necessary files for API request
import useHttp from "../../Hooks/use-http";
import { getSelectedData, editEmployee } from "../../Lib/api";

// Importing Re-useable Components
import Form from "../../Components/Form";
import Spinner from "../../Components/Spinner";

type Params = {
  id: string;
};

const DetailsPage = () => {
  let { id } = useParams<Params>();

  let { sendRequest, status, data, error } = useHttp(getSelectedData, true);

  // Getting the data from db
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

  console.log(data);

  return (
    <section>
      <h3 className="d-flex justify-content-center m-3 fw-bold">
        {`Details Page for Employee with ID No. ${id}`}
      </h3>

      <Form
        btnText="Update"
        onSubmit={(props: any) => {
          console.log(props);
        }}
      />
    </section>
  );
};

export default DetailsPage;
