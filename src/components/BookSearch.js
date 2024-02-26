import { useState } from "react";
import BookComponent from "./BookComponent";
import React from "react";

const BookSearch = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("find book");
  const [found, setFound] = useState("false");

  function updateName(e) {
    setTitle(e.target.value);
  }

  function updateFound() {
    if (found === "true") {
      setFound("false");
    } else {
      setFound("true");
    }
  }

  async function searchBook(e) {
    e.preventDefault();
    let item = { title };
    let result = await fetch(
      "https://backend-niranjana.vercel.app/book/searchBook",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    try {
      var resp = await result.json();
      updateFound();
      articles.push(resp);
      setArticles(articles);
    } catch {
      alert("some error occurred");
    }
  }

  return found ? (
    <>
      <form className="row g-3" style={{ marginTop: "4%" }}>
        <div className="col-auto" style={{ marginLeft: "17%", width: "55%" }}>
          <label htmlFor="inputPassword2" className="visually-hidden">
            Search Book
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id="inputPassword2"
            placeholder={title}
            onChange={updateName}
            style={{ width: "100%", color: "white", border: "3px solid white" }}
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            onClick={searchBook}
            className="btn mb-3"
            style={{
              backgroundColor: "red",
              color: "white",
              border: "1px solid white",
            }}
          >
            Search
          </button>
        </div>
      </form>
      <div>
        <div className="container mx-1 my-1">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <BookComponent
                    title={element.title ? element.title : "anonymous"}
                    link={!element.link ? "unknown" : element.link}
                    tag={"recents"}
                    imgLink={
                      element.imgLink
                        ? element.imgLink
                        : "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
                    }
                    description={element.description ? element.description : "no description given"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <form className="row g-3" style={{ marginTop: "4%" }}>
        <div className="col-auto" style={{ marginLeft: "17%", width: "55%" }}>
          <label htmlFor="inputPassword2" className="visually-hidden">
            Search Book
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id="inputPassword2"
            placeholder={title}
            onChange={updateName}
            style={{ width: "100%", color: "white" }}
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            onClick={searchBook}
            className="btn mb-3"
            style={{
              backgroundColor: "red",
              color: "white",
              border: "1px solid white",
            }}
          >
            Search
          </button>
        </div>
      </form>
      <h1 className="text-center" style={{ color: "white" }}>
        Recents
      </h1>
      <br />
      <h4 className="text-center" style={{ color: "white" }}>
        no recent searches
      </h4>
    </>
  );
};

export default BookSearch;
