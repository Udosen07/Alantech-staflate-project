import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header';
import Footer from '../components/Footer'
import classes from "./Profile.module.css"

const Profile = () => {
  return (
    <Layout>
      <Header header="Profile" text="Profile"/>
      <div className="div">
    <div className={`${classes.profileGrid}`}>
        <div className={`container ${classes.gridItem}`}>
            <form className='container'>
                <h4 className={classes.editText}>Edit Profile</h4>
                <div class="mb-3">
                <label for="bankInput" class="form-label">
                  First name
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
                <label for="bankInput" class="form-label">
                Last name
                </label>
                <input
                  name="lastName"
                  type="text"
                  class="form-control"
                  id="lastNameInput"
                  autocomplete="off"
                  aria-describedby="lastNameHelp"
                  required=""
                />
              </div>
              <div class="mb-3">
                <label for="bankInput" class="form-label">
                Email address
                </label>
                <input
                  name="emailAddress"
                  type="email"
                  class="form-control"
                  id="emailAddressInput"
                  autocomplete="off"
                  aria-describedby="emailAddressHelp"
                  required=""
                />
              </div>

               <div>
              <input type='checkbox'/>
              <label for="changes" className={classes.changes}>Confirm changes</label>
              </div>

              <button className={classes.submitBtn} type='submit'>Submit</button>
            </form>
        </div>

        <div className={` ${classes.gridItem2}`} >
        <form className='container'>
                <h4 className={classes.editText}>Change Password</h4>
                <div class="mb-3">
                <label for="bankInput" class="form-label">
                  Old Password
                </label>
                <input
                  name="oldPassword"
                  type="text"
                  class="form-control"
                  id="OldPasswordInput"
                  autocomplete="off"
                  aria-describedby="oldPasswordHelp"
                  required=""
                />
              </div>
              <div class="mb-3">
                <label for="bankInput" class="form-label">
                New Password
                </label>
                <input
                  name="newPassword"
                  type="text"
                  class="form-control"
                  id="newPasswordInput"
                  autocomplete="off"
                  aria-describedby="newPasswordHelp"
                  required=""
                />
              </div>

               <div>
              <input type='checkbox'/>
              <label for="changes" className={classes.changes}>Confirm changes</label>
              </div>

              <button className={classes.submitBtn} type='submit'>Submit</button>
            </form>
        </div>
      
    </div>
    </div>
    <Footer />
    </Layout>
  )
}

export default Profile
