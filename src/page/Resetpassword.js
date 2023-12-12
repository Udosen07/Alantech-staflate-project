import React from 'react'
import classes from "./Resetpassword.module.css"
import { Link } from 'react-router-dom'
const Resetpassword = () => {
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
              <h3>Reset password using your email</h3>
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
             
              <button type="submit" className={classes.formBtn}>Submit</button>
              <p className={classes.footer}>
                    New on our platform?{" "}
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

export default Resetpassword
