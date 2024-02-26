import React from 'react'

const BookComponent = (props) => {
  return (
    <>
      <div style={{ marginLeft: "12%", border: "none" }}>
        <div
          className="card bg-transparent text-centre mx-20 my-3"
          style={{ border: "none" }}
        >
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.tag}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img
            src={props.imgLink}
            alt="background.avif"
            className="card-img-top"
            style={{ border: "none" }}
          />
          <div
            className="card-body bg-transparent text-center"
            style={{ border: "none" }}
          >
            <h5 className="card-title text-center" style={{ color: "white" }}>
              <u>{props.title}</u>
            </h5>
            <h6 class="text-center" style={{ color: "white" }}>
              {props.description}
            </h6>
            <a
              href={props.link}
              target="_blanck"
              className="btn btn-sm btn-primary text-center"
            >
              open
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookComponent