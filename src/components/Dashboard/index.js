import React from "react";
import "./styles.scss";
import {Link} from 'react-router-dom'
import NavBar from "../NavBar";
import ProfilePic from "../ProfilePic/index";
import Arrow from "../Arrow/index";
import {useState} from 'react'
import DownArrow from './down-arrow.svg'


const Dashboard = () => {

  const [listShown, setListShown] = useState(false)

  const listToggle = () => {
    listShown ? setListShown(false) : setListShown(true)
    console.log("hey")
  }

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
          You’ve been consistent for <span>80 days</span>
        </h2>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>

        <h2>20 days until next reward</h2>

      <h2>Upcoming Benefits</h2>
      <img src={DownArrow} onClick={listToggle} style={{transform: listShown ? 'rotate(0deg)' : 'rotate(180deg)'}}/>
        <ul className="upcoming-benefits" style={{display: listShown ? 'block' : 'none'}}>
          <li>Free Delivery</li>
          <li>1 free sample monthly</li>
          <li>10% off orders over £25</li>
        </ul>

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
