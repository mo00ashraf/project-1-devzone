import React from "react";
import "../Home/Home.css";

const Home = () => {
  return (
    <div className="home d-flex justify-content-between align-items-center">
      <h2>Welcome MO Salah the Egyption King</h2>

      <img
        style={{ width: "500px", height: "500px" }}
        src="/mosalah.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
