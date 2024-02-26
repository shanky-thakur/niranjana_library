import React from "react";
import { useState } from "react";
import BookComponent from "./BookComponent";

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
    </>
  );
};

export default AllBooks;
