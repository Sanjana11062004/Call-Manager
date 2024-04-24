import React, { useState } from "react";
import Header from "./Header";

function EditContact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
 const API_URL="http://localhost:3002/user";
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit=(event)=>{
    event.preventDefault();

    const x=Math.floor((Math.random() * 100) + 1);
    const detail={
      id: x.toString(),
      firstname: firstname,
      lastname:lastname,
      phone:phone,
      email: email
    };

    console.log(JSON.stringify(detail));
    
    handlePost(detail);
    
  }
  const handlePost= async (detail) => {
    try{
      const response= await fetch(API_URL,
      {
        method:'POST',
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(detail)
      })
    }catch{
      console.log("error");
    }
  }
  return (
    <center>
      <Header></Header>
      {/* <label>Mobile Number</label>
        <div className="phone">
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <label>Email</label>
        <div className="email">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div> */}
      <div className="picture">
        <img src="/images/add-image.png" alt="add image" width={80}></img>
        <p>Add picture</p>
      </div>
      <form onSubmit={handleSubmit}>
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
              id="firstname"
              placeholder="Firstname"
              value={firstname}
              onChange={handleFirstnameChange}
              required
            />
            <input
              type="text"
              id="lastname"
              placeholder="Lastname"
              value={lastname}
              onChange={handleLastnameChange}
            />
          </div>
        </div>
        <div className="contact-name-cont" style={{ marginTop: "10px" }}>
          <div>
            <img
              src="/images/call.png"
              alt="User"
              style={{ marginTop: "10px" }}
              width={30}
            />
          </div>
          <div className="contact-name">
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
        </div>
        <div className="contact-name-cont" style={{ marginTop: "10px" }}>
          <div>
            <img
              src="/images/email.png"
              alt="User"
              style={{ marginTop: "10px" }}
              width={30}
            />
          </div>
          <div className="contact-name">
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            marginTop: "10px",
            width: "90%",
            borderRadius: "10px",
            backgroundColor: "green",
          }}
        >
          Save
        </button>
      </form>
    </center>
  );
}

export default EditContact;
