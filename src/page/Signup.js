import React from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className={"bg"}>
    <div>
      <img
        src="https://staflate.pro/img/logo.png"
        alt="Logo"
        className={classes.bgLogo}
      />
      <div className={`${classes.bgBox} flex alignItems-center`}>
        <div className={classes.form}>
          <div className="container">
            <form className={classes.actualForm}>
              <h3>Sign Up</h3>
              <hr />
              <div class="mb-3">
                <label for="firstNameInput" class="form-label">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  class="form-control"
                  id="firstNameInput"
                  autocomplete="off"
                  aria-describedby="firstNameHelp"
                  required=""
                />
              </div>
              <div class="mb-3">
                <label for="lastNameInput" class="form-label">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  class="form-control"
                  id="firstNameInput"
                  autocomplete="off"
                  aria-describedby="lastNameHelp"
                  required=""
                />
              </div>
              <div class="mb-3">
                <label for="emailInput" class="form-label">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="emailInput"
                  autocomplete="off"
                  aria-describedby="emailInputHelp"
                  required=""
                />
              </div>
              <div class="mb-3">
                <label for="passwordInput" class="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="passwordInput"
                  autocomplete="off"
                  aria-describedby="passwordInputHelp"
                  required=""
                />
              </div>
              <div className={`flex`}>
                <div>
                  <input type="checkbox" id="Terms" name="Terms" />
                </div>
                <div>
                  <label for="Terms" className={classes.terms}>
                    {" "}
                    I agree to all statements in Terms of service
                  </label>
                </div>
              </div>
              <button type="submit" className={classes.formBtn}>Sign Up</button>
              <p className={classes.footer}>
                Already have an account?{" "}
                <Link className={classes.footerLink} to="/Signin">
                  sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className={"hDiv"}></div>
    <div className={"bgFooter"}>
      <h4>Copyright &copy; 2023 Staflate</h4>
    </div>
    </div>
  );
};

export default Signup;
