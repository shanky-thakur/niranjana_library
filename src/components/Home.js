import React from 'react';
import BookSearch from "./BookSearch";
import AllBooks from './AllBooks';

const Home = () => {

  return (
    <>
      <div className="text-center">
        <img
          className="text-center"
          src="favicon.png"
          alt="error"
          style={{
            width: "20%",
            marginBottom: "1%",
            border: "2px solid black",
            borderRadius: "12px",
            marginTop: "8%",
          }}
        ></img>
        <h5 className="card-title" style={{ fontSize: "250%" , color: "white"}}>
          <b>
            <u>Niranjana Libraries</u>
          </b>
        </h5>
        <p className="card-text" style={{color: "white"}}>Read Learn Grow</p>
      </div>
      <BookSearch />
      <AllBooks />
    </>
  );
}

export default Home