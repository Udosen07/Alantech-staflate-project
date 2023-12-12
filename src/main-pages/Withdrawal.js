import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header';
import Footer from '../components/Footer'
import classes from "./Withdrawal.module.css"

const Withdrawal = () => {
  return (
    <Layout>
      <Header header="Withdrawal" text="Withdrawal"/>
    <div className={`div`}>
    <div className={`${classes.withdrawalGrid}`}>
        <div className={`container ${classes.gridItem}`}>
            <form className='container'>
                <h4 className={classes.requestText}>Request Withdrawal</h4>
                <div class="mb-3">
                <label for="bankInput" class="form-label">
                  Bank
                </label>
                <input
                  name="bank"
                  type="text"
                  class="form-control"
                  id="bankInput"
                  autocomplete="off"
                  aria-describedby="bankHelp"
                  required=""
                />
              </div>
              <div class="mb-3">
                <label for="bankInput" class="form-label">
                Account Number
                </label>
                <input
                  name="account number"
                  type="number"
                  class="form-control"
                  id="accountNumberInput"
                  autocomplete="off"
                  aria-describedby="accountNumberHelp"
                  required=""
                />
              </div>
              <div class="mb-3">
                <label for="bankInput" class="form-label">
                Amount (USD)
                </label>
                <input
                  name="amount"
                  type="number"
                  class="form-control"
                  id="amountInput"
                  autocomplete="off"
                  aria-describedby="amountHelp"
                  required=""
                />
              </div>

              <button className={classes.requestBtn} type='submit'>Request</button>
            </form>
        </div>

        <div className={` ${classes.gridItem2}`} >
            <div className={`container ${classes.withdrawalDiv}`}>
                <h6>Withdrawals</h6>
                <div className={`flex ${classes.Div}`}>
                    <h6>Amount</h6>
                    <h6>Time</h6>
                    <h6>Status</h6>
                </div>
            </div>
        </div>
      
    </div>
    </div>
    <Footer />
    </Layout>
  )
}

export default Withdrawal
