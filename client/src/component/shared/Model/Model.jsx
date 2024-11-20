import React, { useState, useEffect } from "react";
import InputType from "../Form/InputType";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import API from "../../../services/API";

function Model() {
  let { user } = useSelector((item) => item.auth);
  let [inventoryType, setInventoryType] = useState("in");
  let [email, setEmail] = useState("");
  let [quantity, setQuantity] = useState(0);
  let [bloodType, setBLoodType] = useState("");
  let [hospitalAndDonarData, setHospitalAndDonarData] = useState([]);
  //this is for handling model form
  async function createModelHandler() {
    try {
      if (!bloodType || !quantity || !email) {
        return toast.error("All Field are Requried*");
      } else {
        let { data } = await API.post("/inventory/v1/create-inventory", {
          email,
          inventoryType,
          organization: user?._id,
          quantity,
          bloodGroup: bloodType,
        });
        if (data.success) {
          toast.success(data.message);
          window.location.reload();
        }
      }
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
      //window.location.reload()
    }
  }

  //this is for the getting hospital and donar name for checkbox
  useEffect(() => {
    async function getData() {
      try {
        let url =
          inventoryType == "in"
            ? "/inventory/v1/get-donar-name"
            : "/inventory/v1/get-hospital-name";
        let { data } = await API.get(url);
        setHospitalAndDonarData(data.list);
      } catch (err) {
        console.log(err);
        return;
      }
    }
    getData();
  }, [inventoryType]);
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Create Inventory
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* //inventory-type */}
            <div className="inventory-type d-flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                  value="in"
                  onChange={(e) => {
                    setInventoryType(e.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  IN
                </label>
              </div>
              {/* &nbsp;   */}
              <div className="form-check ms-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  value="out"
                  onChange={(e) => {
                    setInventoryType(e.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Out
                </label>
              </div>
            </div>
            <br />
            {/* //this is for the email */}
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            >
              <option>
                Select
                {inventoryType == "in" ? " Donar Email" : " Hospital Name"}
              </option>
              {hospitalAndDonarData.length > 0 &&
                hospitalAndDonarData?.map((item) => {
                  return (
                    <option value={item.email}>
                      {item.hospitalName || item.name}
                    </option>
                  );
                })}
            </select>

            {/* <InputType
              labelFor="email"
              labelText="Email"
              inputType="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
            /> */}
            {/* this is for quantity */}
            <br />
            {/* //selecting blood group */}
            {/* ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"] */}
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setBLoodType(e.target.value);
              }}
            >
              <option>Select Blood Type</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
            </select>
            {/* //this is for the email */}
            <br />
            <InputType
              labelFor="quantity"
              labelText="Quantity"
              inputType="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              name="quantity"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={createModelHandler}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
