import React from "react";
import "../assets/style.css"

function Header() {
  return (
    <div>
      <div className="header-main">
        <div>
            <img src="/images/people.png" alt="search" width={24}/>
        </div>
        <div>
            <img src="/images/microphone.png" alt="voice search" width={24}></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
