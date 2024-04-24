import React from "react";
import { useState } from "react";

function EditContact() {
  const [firstname, setFirstname] = useState("name");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleChange= event=>{
    setFirstname(event.target.value)
  }
  return (
    <div>
      <center>
        <div className="picture">
          <img src="/images/add-image.png" alt="add image" width={80}></img>
          <p>Add picture</p>
        </div>
        <div className="contact-name-cont">
          <div>
            <img
              src="/images/user.png"
              alt="User"
              style={{ marginTop: "10px" }}
              width={40}
            />
          </div>
          <div className="contact-name">
            <input
              type="text"
              value="sanjana"
              //onChange={handleChange}
              
            />
            <input type="text" id="lastname" placeholder="Lastname" value={lastname} onChange={(e)=> setLastname(e.target.value)}></input>
          </div>
        </div>
        <div className="phone">
          <input
            type="number"
            id="phone"
            placeholder="Phone"
            value={phone} onChange={(e)=> setPhone(e.target.value)}
            required
          ></input>
        </div>
        <div className="email">
          <input type="email" id="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        </div>
      </center>
    </div>
  );
}

export default EditContact;

