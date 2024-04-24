import React, { useEffect, useState } from "react";
import Header from "./Header";
import Contact from "./Contact";
import Create from "./Create";
import { Link } from "react-router-dom";

function Home() {
  const API_URL = "http://localhost:3002/user";
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    handleGETmethod();
  }, []);
  const handleGETmethod = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <Header />
      {userData.map((el) => (
        <Contact
          key={el.id}
          names={`${el.firstname} ${el.lastname}`}
          phone={el.phone}
          email={el.email}
          id={el.id}
        />
      ))}
      <button onClick={handleGETmethod}>Fetch Data</button>

      <Link to="/edit">
        <Create />
      </Link>
    </div>
  );
}

export default Home;
