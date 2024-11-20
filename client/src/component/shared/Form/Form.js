import React, { useState } from "react";
import InputType from "./InputType";
import { NavLink } from "react-router-dom";
import {
  handleLoginController,
  handleRegistrationController,
} from "../../../services/authServices";

function Form({ submitText, formTitle, formType }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [role, setRole] = useState("doner");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [hospitalName, setHospitalName] = useState("");
  let [originazationName, setOriginazationName] = useState("");
  //this is for form submit Handler
  function formSubmitHandler(e) {
    if (formType == "login")
      return handleLoginController(e, email, password, role);
    else if (formType == "register")
      return handleRegistrationController(
        e,
        email,
        password,
        name,
        role,
        phone,
        address,
        hospitalName,
        originazationName
      );
  }
  return (
    <form>
      <h3> {formTitle}</h3>
      <hr />
      {/* {JSON.stringify(role,null,4)} */}
      <div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="role"
            id="doner"
            value="doner"
            defaultChecked
            onChange={(e) => setRole(e.target.value)}
          />
          <label class="form-check-label" for="doner">
            Doner
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="role"
            id="admin"
            value="admin"
            onChange={(e) => setRole(e.target.value)}
          />
          <label class="form-check-label" for="admin">
            Admin
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="role"
            id="hospital"
            value="hospital"
            onChange={(e) => setRole(e.target.value)}
          />
          <label class="form-check-label" for="hospital">
            Hospital
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="role"
            id="originazation"
            value="originazation"
            onChange={(e) => setRole(e.target.value)}
          />
          <label class="form-check-label" for="originazation">
            Originazation
          </label>
        </div>
      </div>
      {(() => {
        //eslint-disable-next-line
        switch (true) {
          case formType === "login": {
            return (
              <>
                {/* email */}
                <InputType
                  inputType="text"
                  labelText="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  labelFor="email"
                />
                {/* password */}
                <InputType
                  inputType="password"
                  labelText="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  labelFor="password"
                />
              </>
            );
          }
          case formType === "register": {
            return (
              <>
                {/* name */}
                {(role === "doner" || role === "admin") && (
                  <InputType
                    inputType="text"
                    labelText="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    labelFor="name"
                  />
                )}
                {/* //hospitalname */}
                {role === "hospital" && (
                  <InputType
                    inputType="text"
                    labelText="Hospital Name"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    name="hospitalName"
                    labelFor="hospitalName"
                  />
                )}
                {/* {originazationName} */}
                {role === "originazation" && (
                  <InputType
                    inputType="text"
                    labelText="Originazation Name"
                    value={originazationName}
                    onChange={(e) => setOriginazationName(e.target.value)}
                    name="originazation"
                    labelFor="originazation"
                  />
                )}
                {/* email */}
                <InputType
                  inputType="text"
                  labelText="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  labelFor="email"
                />
                {/* password */}
                <InputType
                  inputType="password"
                  labelText="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  labelFor="password"
                />
                {/* {phone} */}
                <InputType
                  inputType="text"
                  labelText="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                  labelFor="phone"
                />
                {/* //address */}
                <InputType
                  inputType="text"
                  labelText="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  labelFor="address"
                />
              </>
            );
          }
        }
      })()}
      {formType === "login" && (
        <>
          {" "}
          Not registered yet ? Register <NavLink to="/register">Here !</NavLink>
        </>
      )}
      {formType === "register" && (
        <>
          {" "}
          Already Register ? Login <NavLink to="/login">Here !</NavLink>
        </>
      )}
      <br />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={formSubmitHandler}
      >
        {submitText}
      </button>
    </form>
  );
}

export default Form;
