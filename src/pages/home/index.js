import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import Layout from "../../components/layout";
import style from "../../styles/home.module.css";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout noFooter={true}>
      <h2 className={style.header}>Home page</h2>
      <button
        className={style.btn}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click me
      </button>
      <Card name={"Roshan"} phone={6578787} count={count} setCount={setCount} />
      {count}
      <Card name={"Natasha"} phone={878778787} />
      <Link to={"/contact"}>Go to contact page</Link>
    </Layout>
  );
};

export default Home;
