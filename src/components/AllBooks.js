import React from "react";
import { useState } from "react";
import BookComponent from "./BookComponent";
import { Link } from 'react-router-dom';

const AllBooks = () => {
  const [articles, setArticles] = useState([]);
  const [found, setFound] = useState("false");

  function updateFound() {
    if (found === "true") {
      setFound("false");
    } else {
      setFound("true");
    }
  }

  async function showBooks(e) {
    e.preventDefault();
    let result = await fetch(
      "https://backend-niranjana.vercel.app/book/showBooks",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    try {
      var resp = await result.json();
      updateFound();
      resp.forEach((element) => {
        articles.push(element);
      });
      setArticles(articles);
    } catch {
      alert("some error occurred");
    }
  }

  return found === "false" ? (
    <>
      <div className="text-center" style={{ marginTop: "8%" }}>
        <h1 className="text-center" style={{ color: "white" }}>
          Get Started.....
        </h1>
        <button
          type="submit"
          onClick={showBooks}
          className="btn mb-3 text-center"
          style={{
            backgroundColor: "red",
            color: "white",
            border: "1px solid white",
          }}
        >
          get started
        </button>
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
  ) : (
    <>
      <div>
        <h1
          className="text-center"
          style={{ color: "white", marginBottom: "3%" }}
        >
          <b>
            <u>Collection</u>
          </b>
        </h1>
        <div className="container mx-1 my-1">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <BookComponent
                    title={element.title ? element.title : "anonymous"}
                    link={!element.link ? "unknown" : element.link}
                    tag={"collections"}
                    imgLink={
                      element.image
                        ? element.image
                        : "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
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

export default AllBooks;
