import React from 'react'
import classes from "./Signin.module.css"
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <>
    <div className={classes.bg}>
      <img
        src="https://staflate.pro/img/logo.png"
        alt="Logo"
        className={classes.bgLogo}
      />
      <div className={`${classes.bgBox} flex alignItems-center`}>
        <div className={classes.form}>
          <div className="container">
            <form className={classes.actualForm}>
              <h3>Sign In</h3>
              <hr />
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
             <Link to="/Resetpassword" className={classes.forgot}>Forgot password?</Link>
              <button type="submit" className={classes.formBtn}>Sign In</button>
              <p className={classes.footer}>
                Don't have an account?{" "}
                <Link className={classes.footerLink} to="/Signup">
                  sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.bgFooter}>
     <h4>Copyright &copy; 2023 Staflate</h4>
    </div>
    </>
  )
}

export default Signin;
