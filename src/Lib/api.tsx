const URL = "http://localhost:5000/api/";

// Get Request for All
export const getData = async () => {
  const response = await fetch(URL + "Employee");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch data.");
  }

  const transformedData = [];

  for (const key in data) {
    const dataObj = { id: key, ...data[key] };

    transformedData.push(dataObj);
  }

  return transformedData;
};

// Get Request for specific ID
export const getSelectedData = async (id: any) => {
  const response = await fetch(`${URL}Employee/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch data.");
  }

  const transformedCountryData = [];

  for (const key in data) {
    const dataObj = { id: key, ...data[key] };

    transformedCountryData.push(dataObj);
  }

  return transformedCountryData;
};

// Add Request
export const addData = async (props: any) => {
  const response = await fetch(URL + "Employee", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      LastName: props.lastName,
      FirstName: props.firstName,
      MiddleName: props.middleName,
      Age: props.age,
      Address: props.address,
      PhoneNumber: props.phoneNumber,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch data.");
  }

  const transformedData = [];

  for (const key in data) {
    const dataObj = { id: key, ...data[key] };

    transformedData.push(dataObj);
  }
  alert("Added Successfully!");
  window.location.reload();

  return transformedData;
};

// Edit Request -- Decided to use an old / different approach here
export const editEmployee = (props: any) => {
  fetch(URL + "Employee", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      EmployeeMasterID: props.id,
      LastName: props.lastName,
      FirstName: props.firstName,
      MiddleName: props.middleName,
      Age: props.age,
      Address: props.address,
      PhoneNumber: props.phoneNumber,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((data) => {
          let errorMessage = "Updating Employee Details fail!";

          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }

          throw new Error(errorMessage);
        });
      }
    })
    .then((result) => {
      alert(result);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

// Delete Request -- Same here
export const deleteEmployee = (id: any) => {
  fetch(URL + "Employee/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((data) => {
          let errorMessage = `Deleting Employee with ID#:${id} failed!`;

          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }

          throw new Error(errorMessage);
        });
      }
    })
    .then((result) => {
      alert(result);
      window.location.reload();
    })
    .catch((error) => {
      console.log("Delete Request", error);
    });
};
