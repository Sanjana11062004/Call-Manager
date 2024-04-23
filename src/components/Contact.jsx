import React from "react";

function Contact() {
  var count = 1;
  const displays = () => {
    {
      if (count === 1) {
        var d = document.getElementById("display-onhover");
        d.style.display = "block";
        count = 0;
      }
      if (count === 0) {
        var d = document.getElementById("display-onhover");
        d.style.display = "block";
        count = 1;
      }
    }
  };

  const displayContacts = () => {
    fetch(Contact);
  };
  return (
    <div className="contact-main">
      <div>
        <p>Today</p>
      </div>
      <div className="contact-container" onClick={displays}>
        <div className="contact-item-1">
          <div>
            <img src="/images/user.png" alt="call" width={60}></img>
          </div>
          <div>
            <h2>Name</h2>
            <p>7995928461</p>
          </div>
        </div>
        <div className="display-onhover" id="display-onhover">
          <hr></hr>
          <div className="container-item-2">
            <img src="/images/call.png" alt="call" width={22.5}></img>
            <img src="/images/editing.png" alt="call" width={28}></img>
            <img src="/images/bin.png" alt="call" width={28}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
