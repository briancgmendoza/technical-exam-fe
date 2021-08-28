// Importing Re-useable Components
import React from "react";
import Input from "../Input";

type Props = {
  lastName?: string;
  firstName?: string;
  middleName?: string;
  age?: string;
  address?: string;
  phoneNumber?: string;
  // FIXME: Look for alternatives, don't use any
  setLastName?: React.Dispatch<React.SetStateAction<string>> | any;
  setFirstName?: React.Dispatch<React.SetStateAction<string>> | any;
  setMiddleName?: React.Dispatch<React.SetStateAction<string>> | any;
  setAge?: React.Dispatch<React.SetStateAction<string>> | any;
  setAddress?: React.Dispatch<React.SetStateAction<string>> | any;
  setPhoneNumber?: React.Dispatch<React.SetStateAction<string>> | any;
  onSubmit: (e: React.SyntheticEvent) => void;
};

const Form = ({
  lastName,
  setLastName,
  firstName,
  setFirstName,
  middleName,
  setMiddleName,
  age,
  setAge,
  address,
  setAddress,
  phoneNumber,
  setPhoneNumber,
  onSubmit,
}: Props) => {
  return (
    <form className="p-2 w-100 bd-highlight" onSubmit={onSubmit}>
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
        />
      </div>

      <button type="submit" name="Submit" className="btn btn-primary float-end">
        Create
      </button>
    </form>
  );
};

export default Form;
