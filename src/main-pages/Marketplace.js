import React from 'react'
import classes from "./Marketplace.module.css"
import Layout from '../components/Layout'
import Header from '../components/Header';
import Footer from '../components/Footer'

const Marketplace = () => {
  return (
    <Layout>
      <Header header="Marketplace" text="Marketplace"/>
    <div className={`container ${classes.mkt}`}>
      <h6>Coming Soon..............</h6>
    </div>
    <Footer />
    </Layout>
  )
}

export default Marketplace
