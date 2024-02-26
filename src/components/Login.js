import React from "react";
import { useState } from "react";

const Login = () => {

  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [allow,setallow] = useState("true");
  const [logged,setlogged] = useState("true");

  async function updatelogged(){
    if(logged==="true"){
      setlogged("false");
    }else{
      setlogged("true");
    }
  }

  async function updateemail(e){
    setemail(e.target.value);
  }

  async function updatepassword(e){
    setpassword(e.target.value);
  }

  async function updateallow(){
    if(allow==="true"){
      setallow("false");
    }else{
      setallow("true");
    }
  }

  async function login(){
    if(allow==="true"){
      return alert("please agree to terms and conditions");
    }else{
      let item = {email,password};
      let result = await fetch(
        "https://backend-niranjana.vercel.app/user/login",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      var resp = await result.json();
      try{
        if(resp.success){
          alert("successfully logged in");
          updatelogged();
          window.location.href = './Home';
        }else{
          alert("either email or password is incorrect");
        }
      }catch(error){
        alert(error.message);
      }
    }
  }

  return (
    <>
    <div className="logger" style={{width:"52%",backgroundColor:"transparent",marginLeft:"25%",marginTop:"8%",borderRadius:"17px"}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg" style={{width:"19%",marginLeft:"40%",marginTop:"2%"}} alt="error"></img>
    <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{color:"white",fontSize:"222%",marginLeft:"3%"}}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={updateemail}
            style={{border:"1px solid black",borderRadius:"12px",marginLeft:"2%",width:"95%"}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={{color:"white",fontSize:"222%",marginLeft:"3%"}}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={updatepassword}
            style={{border:"1px solid black",borderRadius:"12px",marginLeft:"2%",width:"95%"}}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" onChange={updateallow} className="form-check-input" id="exampleCheck1" style={{marginLeft:"29%",border:"1px solid black"}}/>
          <label className="form-check-label" style={{marginLeft:"1%", color:"white"}} htmlFor="exampleCheck1">
            i agree to terms and conditions
          </label>
        </div>
        <button type="button" onClick={login} className="btn btn-primary" style={{marginBlock:"2%",marginLeft:"42%",border:"1px solid black" , color:"white"}}>
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
