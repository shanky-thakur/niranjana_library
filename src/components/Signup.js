import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [allow, setallow] = useState("false");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function sendMAil() {
    window.Email.send({
      SecureToken: "3337f5ed-3718-4e04-99cd-1b393efaa7cb",
      To: email,
      From: "semsyboy420@gmail.com",
      Subject: "signup successfull to niranjana libraries",
      Body: `hi your username is "${email}" and password is "${password}" ,welcome to niranjana libraries, have a great time learning. Thank You. <br/> <br/>
      from <br/> 
      Deepanshu Thakur <br/> 
      Founder <br/> 
      Niranjana Libraries`,
    });
    alert(`confirmation mail was sent to ${email}`);
  }

  async function updateallow(e) {
    if (allow === "false") {
      setallow("true");
    } else {
      setallow("false");
    }
  }

  async function updatemail(e) {
    setemail(e.target.value);
  }

  async function updatepassword(e) {
    setpassword(e.target.value);
  }

  async function signup() {
    let item = { email, password };
    if (allow === "true") {
      let result = await fetch(
        "https://backend-niranjana.vercel.app/user/signup",
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
    }
    if (allow === "false") {
      alert("please tick 'i am not a bot' ");
    }
    try {
      if (resp.success) {
        alert("successfully created your profile");
        sendMAil();
        window.location.href = "./Home";
      } else {
        alert(
          "either format of email/password is incorrect or the email is already registered"
        );
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <div
        className="logger"
        style={{
          width: "52%",
          backgroundColor: "transparent",
          marginLeft: "25%",
          marginTop: "8%",
          borderRadius: "17px",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg"
          style={{ width: "19%", marginLeft: "40%", marginTop: "2%" }}
          alt="error"
        ></img>
        <form>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              style={{ color: "white", fontSize: "222%", marginLeft: "3%" }}
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={updatemail}
              style={{
                border: "1px solid black",
                borderRadius: "12px",
                marginLeft: "2%",
                width: "95%",
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              style={{ color: "white", fontSize: "222%", marginLeft: "3%" }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={updatepassword}
              style={{
                border: "1px solid black",
                borderRadius: "12px",
                marginLeft: "2%",
                width: "95%",
              }}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              style={{ marginLeft: "38%", border: "1px solid black" }}
              onChange={updateallow}
            />
            <label
              className="form-check-label"
              style={{ marginLeft: "1%", color: "white" }}
              htmlFor="exampleCheck1"
            >
              i am not a bot
            </label>
          </div>
          <button
            onClick={signup}
            type="button"
            className="btn btn-primary"
            style={{
              marginBlock: "2%",
              marginLeft: "42%",
              border: "1px solid black",
            }}
          >
            Signup
          </button>
        </form>
      </div>

      <div style={{ marginTop: "3.5%", marginLeft: "25%" }}>
        <div
          className="card text-center bg-transparent"
          style={{
            width: "65%",
            backgroundColor: "transparent",
            color: "#808000",
            border: "none",
            borderBlockColor: "transparent",
            borderBottomColor: "transparent",
          }}
        >
          <div className="card-body">
            <img
              src="favicon.png"
              alt="error"
              style={{
                width: "20%",
                marginBottom: "1%",
                border: "2px solid black",
                borderRadius: "12px",
              }}
            ></img>
            <h5 className="card-title">Niranjana Libraries</h5>
            <p className="card-text">
              for any query regarding any issue or complaint, kindly contact
              here
              <br />
              <a
                href="https://www.linkedin.com/in/deepanshu-thakur-92a17a262"
                target="_blanck"
                alt="error"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="mailto:thakurdeepanshu420@gmail.com"
                target="_blanck"
                alt="error"
              >
                <i
                  className="fa-solid fa-envelope"
                  style={{ marginLeft: "2%" }}
                ></i>
              </a>
            </p>
            <Link
              to="/Contact"
              className="btn btn-primary"
              style={{ border: "2px solid black" }}
            >
              Contact
            </Link>
            <p style={{ marginTop: "2%" }}>
              made with &hearts; by ~deepanshu thakur
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
