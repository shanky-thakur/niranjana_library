import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <>
      <div
        className="bg-transparent"
        style={{ marginTop: "7%", marginLeft: "25%" }}
      >
        <div
          className="card text-center bg-transparent"
          style={{ width: "65%", border: "none" }}
        >
          <div
            className="card-body"
            style={{
              backgroundColor: "transparent",
              color: "#808000",
              borderBottomColor: "transparent",
              borderBlockColor: "transparent",
            }}
          >
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
            <h5 className="card-title" style={{ fontSize: "200%" }}>
              <b>
                <u>Niranjana Libraries</u>
              </b>
            </h5>
            <p className="card-text">Read Learn Grow</p>
            <Link
              to="/Login"
              className="btn btn-primary"
              style={{ border: "2px solid black" }}
            >
              Login
            </Link>
            <Link
              to="Signup"
              className="btn btn-primary mx-3"
              style={{ border: "2px solid black" }}
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p
          className="text-center"
          style={{ fontSize: "220%", marginTop: "3%", color: "#FCDFFF" }}
        >
          <b>
            <u>Read Learn Grow</u>
          </b>
        </p>

        <p
          className="text-center"
          style={{ fontSize: "180%", marginTop: "1%", color: "#FCDFFF" }}
        >
          Niranjana - the word that depicts the godess of knowledge and music
          'the saraswati' stands the direction of our motto to provide an
          environment for all the scholars where they can organise their peer
          group as per their choice and also we provide a huge collection of
          books to read online absolutely free.
          <br />
          Group study meets and discussions along with global comments prove to
          be a social platform to clear doubts and also share tips, notes in any
          case.
          <br />
          Come and join us in the revolution and be the witness of changing
          standards of life and knowlegde.
          <br />
          Our main slogan says 'Read, Learn and Grow' which in itself gives
          every single justification that is needed by the user.
        </p>
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

export default Headers;
