import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import './contact.css'
const Contact = () => {
  return (
    <Layout>
      <h2 className='title'>Contact page</h2>
      <Link to={"/"}>back home</Link>
    </Layout>
  );
};

export default Contact;
