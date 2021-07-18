import picture from "./profile-pic.png";
import tick from "./tick.svg";

import './style.scss';

const ProfilePic = () => {
    return(
        <div className='profile-pic-container'>
         <img src={picture} className='profile-pic'/>
         <img src={tick} className='tick'/>
        </div>
    )
}

export default ProfilePic;