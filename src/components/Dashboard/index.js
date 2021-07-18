import React from "react";
import "./styles.scss";
import {Link} from 'react-router-dom'
import NavBar from "../NavBar";
import ProfilePic from "../ProfilePic/index";
import Arrow from "../Arrow/index";


const Dashboard = () => {
  return (
    <main>
      <header className="dashboard-header">
        <div className='user-info'>
        <ProfilePic />
        <h1>Good Morning Mary!</h1>
        <h2>
          Current Level: <span>Skincare Enthusiast ⭐ ⭐ ⭐</span>
        </h2>
        </div>

        <NavBar/>
      </header>

      <div className="progress-container">
        <h2>
          You’ve been consistent for <span>80 days</span>{" "}
        </h2>
        <h2>20 days until next reward</h2>
      </div>

      <Link to="/routine">
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            marginRight: "10%",
          }}
        >
          <Arrow />
        </div>
      </Link>
    </main>
  );
};

export default Dashboard;
