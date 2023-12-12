import React from 'react'
import classes from "./Referral.module.css";
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { useState } from 'react';
const Referral = () => {

  const [copy, setCopy] = useState(false);
  const handleCopy = () =>{
    navigator.clipboard.writeText("https://staflate.pro/home.php?refer=UEstP3z1yQ")
    return copy ? setCopy(false) : setCopy(true);
  }
  return (
    <Layout>
      <Header header="Referral" text="Referral"/>
    <div className={`div`}>
    <div className={` ${classes.bg}`}>
    <div className={`container`} >
      <p>Share your referral link or code to your friends and family to earn 65% commission when they sign up.</p>
      <h6>https://staflate.pro/home.php?refer=UEstP3z1yQ</h6>
      <button onClick={handleCopy}>{copy ? "Copied" : "Copy text"}</button>
        <hr/>
        <div className={`${classes.referralFooter}`}>
            <h5>Referral Bonus</h5>
            <p>You have not referred anyone</p>
        </div>
        </div>
    </div>
    </div>
    <Footer />
    </Layout>
  )
}

export default Referral
