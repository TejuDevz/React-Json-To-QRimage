//These are Extra Imports
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { QRCode } from "react-qr-svg";

import "./Form.css";

const Form = () => {
  //States or Variables
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [country, setCountry] = useState("");
  const [render, setRender] = useState(false);

  const [form_data, setForm_data] = useState({
    name: "name",
    age: "age",
    country: "country",
  });

  const submitForm = () => {
    setForm_data({
      name: name,
      age: age,
      country: country,
    });
    setRender(true);
  };

  return (
    <div className="Form">
      {/* Form Side */}
      <div className="Form__left">
        {/*Form Name Field*/}
        <div className="Form__nameField">
          <h2>Name:</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <br />
        <hr />
        {/*Form Age Field*/}
        <div className="Form__ageField">
          <h2>Age:</h2>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <br />
        <hr />
        {/*Form Country Field*/}
        <div className="Form__countryField">
          <h2>Country:</h2>
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></input>
        </div>
        <br />
        <hr />
        <br />
        <Button className="Form__submitForm" onClick={submitForm}>
          Click!
        </Button>
      </div>
      {/* QR-Code side */}
      <div className="Form__right">
        {render ? <QRCode value={JSON.stringify(form_data)} /> : null}
      </div>
    </div>
  );
};

export default Form;
