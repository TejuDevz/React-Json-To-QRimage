//These are Extra Imports
import { Button } from "@material-ui/core";

import "./Form.css";

const Form = () => {
  return (
    <div className="Form">
      <div className="Form__nameField">
        <h2>Name:</h2>
        <input type="text"></input>
      </div>
      <br />
      <hr />
      <div className="Form__ageField">
        <h2>Age:</h2>
        <input type="number"></input>
      </div>
      <br />
      <hr />
      <div className="Form__countryField">
        <h2>Country:</h2>
        <input type="text"></input>
      </div>
      <br />
      <hr />
      <br />
      <Button className="Form__submitForm">Click!</Button>
    </div>
  );
};

export default Form;
