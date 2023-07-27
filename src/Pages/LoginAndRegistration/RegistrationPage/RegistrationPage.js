import React from "react";
import "./RegistrationPage.scss";
import RegisterUserForm from "../../../Components/RegisterUserForm/RegisterUserForm";

function RegistrationPage() {
  return (
    <div className="mainpage">
      <div className="image-container">
          <img
            src="https://www.neoito.com/blog/wp-content/uploads/2023/03/MVP-Outsourcing-900x553.png.webp"
            alt=""
           
          />
        </div>
      <div className="container">
        <div className="loginpage">
          <RegisterUserForm />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
