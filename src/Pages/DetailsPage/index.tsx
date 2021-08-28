import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../../Components/Input";

// Importing necessary files for API Request
import useHttp from "../../Hooks/use-http";
import { getSelectedData } from "../../Lib/api";

// Importing Re-useable Components
import Spinner from "../../Components/Spinner";

const DetailsPage = () => {
  const params = useParams();
  console.log(params);
  // const { id } = params;
  const { sendRequest, status, data, error } = useHttp(getSelectedData, true);

  useEffect(() => {
    sendRequest(params);
  }, [sendRequest, params]);

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

  return (
    <section className="d-flex flex-row bd-highlight mb-3">
      <div className="p-2 w-50 bd-highlight">
        <div className="input-group mb-3">
          <span className="input-group-text">Last Name</span>
          <Input
            type="text"
            className="form-control"
            placeholder="Ex: Dela Cruz"
            onChange={() => console.log("change")}
          />
        </div>

        <div className="input-group mb-3">
          <Input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value="Last Name"
            onChange={() => console.log("change")}
          />
        </div>

        <div className="input-group mb-3">
          <Input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value="Last Name"
            onChange={() => console.log("change")}
          />
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
