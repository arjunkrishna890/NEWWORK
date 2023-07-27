import React from "react";
import "./LoginPage.scss";
import LoginForm from "../../../Components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className="mainpage">
      <div className="image-container">
          <img
            src="https://www.neoito.com/blog/wp-content/uploads/2022/12/project-management-software-development.png"
            alt=""
           
          />
        </div>
      <div className="container">
        
        <div className="loginpage-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

