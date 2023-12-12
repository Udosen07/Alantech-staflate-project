import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import classes from "./Dashboard.module.css";
import { PiCurrencyDollarBold } from "react-icons/pi";

const Dashboard = () => {
  return (
    <Layout>
      <Header header="Overview" text="Dashboard" />
      <div className={`div`}>
      <div className={`container ${classes.dashGrid}`}>
        <div className={classes.gridItem}>
          <PiCurrencyDollarBold className={classes.icon} />
          <h5>All Time Earning</h5>
          <h2>0.00 USD</h2>
        </div>
        <div className={classes.gridItem}>
          <PiCurrencyDollarBold className={classes.icon} />
          <h5>Account Balance</h5>
          <h2>0.00 USD</h2>
        </div>
        <div className={classes.gridItem}>
          <PiCurrencyDollarBold className={classes.icon} />
          <h5>Next Payout</h5>
          <h2>0.00 USD</h2>
        </div>
      </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Dashboard;
