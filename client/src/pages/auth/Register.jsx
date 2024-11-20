import React from "react";
import Form from "../../component/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../component/Spinner";
import { toast } from "react-toastify";

function Register() {
  let { error, loading } = useSelector((item) => item.auth);
  return (
    <>
      {loading && <Spinner />}
      {!loading && error && toast.error(error.message)}
      {!loading && !error && (
        <>
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src="./assest/pexels-karolina-grabowska-4226923.jpg"
                alt="blood_bank_login"
                className="img-fluid login-image"
              />
            </div>
            <div className="col-md-6 form-container">
              <Form
                submitText="Register"
                formTitle="Register"
                formType="register"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Register;
