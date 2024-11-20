import React from "react";
import { BeatLoader } from "react-spinners";
function Spinner() {
  return (
    <div
      className="container"
      style={{ height: "100vh", width: "100%", border: "1px solid black" }}
    >
      <div className="row ">
        <div className="col d-flex justify-content-center align-items-center">
          <div>
            <BeatLoader />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
