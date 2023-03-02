import React from 'react'
import "../css/Navbar.css"
import bell from "../images/bell.png"
import user from "../images/user.png"
function Navbar() {
  return (
    <div className='navbar'>
      <img className='git-logo' src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png" alt="logo" />
      <input type="text" placeholder="Search or jump to..."/>
      
        <p>Pull requests</p>
        <p>Issues</p>
        <p>Codespaces</p>
        <p>Marketplace</p>
        <p>Explore</p>
      
      {/* <div className="user-profile"> */}
        <p className='user-profile one'><img src={bell} alt=''/></p>
        
        <p className='user-profile'>+</p>
        <p className='user-profile last'><img src={user} alt=''/></p>
      {/* </div> */}
    </div>
  )
}

export default Navbar
