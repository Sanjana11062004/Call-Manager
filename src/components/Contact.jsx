import React from "react";

function Contact(props) {
  var flag = 1;

  const handleDELETEmethod=(id)=>{
    try{
      fetch(`http://localhost:3002/user/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      
    })
    }catch(error){
      console.log("error");
      flag=0;
    }
    if(flag===1){
      console.log("Success");
      const x=document.getElementById(props.id);
      x.style.display='none';
    }
    
  }
  
  return (
    <div className="contact-main" id={props.id}>
      <div className="contact-container" >
        <div className="contact-item-1">
          <div>
            <img src="/images/user.png" alt="call" width={60}></img>
          </div>
          <div>
            <h2>{props.names}</h2>
            <p>{props.phone}</p>
          </div>
        </div>
        <div >
          <hr></hr>
          <div className="container-item-2">
            <img src="/images/call.png" alt="call" width={22.5} ></img>
            <img src="/images/editing.png" alt="call" width={28}></img>
            <img src="/images/bin.png" alt="call" width={28} onClick={()=>handleDELETEmethod(props.id)}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
