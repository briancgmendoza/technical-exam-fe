import { useParams } from "react-router-dom";

// Importing necessary files for API request
import useHttp from "../../Hooks/use-http";
import { getSelectedData, editEmployee } from "../../Lib/api";

// Importing Re-useable Components
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Spinner from "../../Components/Spinner";

const DetailsPage = () => {
  return (
    <div>
      <h1>Hello from Details Page</h1>
    </div>
  );
};

export default DetailsPage;
