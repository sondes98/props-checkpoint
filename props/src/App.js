import React from "react";
import './App.css';
import Profile from '../src/Profile/component';
import profilePic  from '../src/Profile/profilePic.png';
import PropTypes from "prop-types";


function handleName() {
  alert("The name of the profile user is : Sondes Ahmed");
}
function App() {
  return (
    <div className="App">
        <h1 style ={{color : "pink"}}>Welcome To My Profile</h1>
        <div>
          <Profile 
              Bio = {
                <p style ={{width:"50%", margin :"auto", fontWeight:"400", color:"black",fontFamily:"century gothic"}}>
                  Hey ! I'm Sondes and I'm a Full-Stack JavaScript Bootcamp student at Go My Code.
                </p>
              }
              Profession = "future developer">
            <img  className="photo" width="50%" src={profilePic} alt="profile "/>
          </Profile>
        </div>
        <button onClick={handleName}>Handle Name</button>
    </div>
  );
}
Profile.defaultProps = {
  FullName: "Sondes Ahmed",
  Profession: "future developer",
  bio: " Hey ! I'm Sondes and I'm a Full-Stack JavaScript Bootcamp student at Go My Code.",
}
Profile.propTypes = {
  FullName: PropTypes.string,
  Bio: PropTypes.string, //proptypes expected string
  Profession: PropTypes.string
}
export default App;
