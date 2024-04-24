import React, { useState } from "react";
import Header from "./Header";
import Contact from "./Contact";
import Create from "./Create";
import EditContact from "./EditContact";

function Home(){
    const [na ,setNa]=useState("");
    return(
        <div>
            <Header></Header>
            <Contact></Contact>
            <Create></Create>
            <EditContact></EditContact>
            <input type="text" value={na} onChange={(e)=>setNa(e.target.value)}></input>
        </div>
    );
}
export default Home;