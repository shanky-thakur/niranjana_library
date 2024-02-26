import React from "react";

const Contactus = () => {
  return (
    <>
      <div className="grid-container">
        <div
          className="float-child card bg-transparent col-md-3"
          style={{
            width: "80%",
            border: "none",
            marginTop: "15%",
            marginLeft: "5%",
          }}
        >
          <img
            style={{ border: "2px solid white", borderRadius: "8%" }}
            src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "white" }}>
              Email
            </h5>
            <p className="card-text" style={{ color: "white" }}>
              for any query or complaint feel free to reach us out via e-mail by
              clicking the link provided below
            </p>
            <a
              href="mailto:thakurdeepanshu420@gmail.com"
              target="_blanck"
              alt="error"
              className="btn btn-primary"
              style={{ border: "1px solid white" }}
            >
              compose mail
            </a>
          </div>
        </div>
        <div
          className="float-child card bg-transparent col-md-3"
          style={{
            width: "80%",
            border: "none",
            marginTop: "15%",
            marginLeft: "5%",
          }}
        >
          <img
            style={{ border: "2px solid white", borderRadius: "8%" }}
            src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "white" }}>
              Linkedin
            </h5>
            <p className="card-text" style={{ color: "white" }}>
              we are also available on linkedin just follow the link below to
              connect and reach us via linkedin
            </p>
            <a
              href="https://www.linkedin.com/in/deepanshu-thakur-92a17a262"
              target="_blanck"
              alt="error"
              className="btn btn-primary"
              style={{ border: "1px solid white" }}
            >
              connect
            </a>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div
          className="float-child card bg-transparent col-md-3"
          style={{
            width: "80%",
            border: "none",
            marginTop: "15%",
            marginLeft: "5%",
          }}
        >
          <img
            style={{ border: "2px solid white", borderRadius: "8%" }}
            src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "white" }}>
              Reach us
            </h5>
            <p className="card-text" style={{ color: "white" }}>
              during office timings to have a in person meet, reach us at the
              given link and address.
            </p>
            <a
              href="https://www.google.com/maps/dir/28.498265,77.2290188/P4X9%2BQ8X+Delhi+Technological+University,+Bawana+Rd,+Shahbad+Daulatpur+Village,+Rohini,+New+Delhi,+Delhi+110042/@28.7502921,77.1147339,17z/data=!4m15!4m14!1m6!3m4!1m2!1d77.1405425!2d28.7451728!3s0x390d0105ad3f483b:0x5ab11c50bb1f1994!4e1!1m5!1m1!1s0x390d0138a74f7da7:0xf09fad683c23bd5d!2m2!1d77.1183612!2d28.7494933!3e9?entry=ttu"
              target="_blanck"
              alt="error"
              className="btn btn-primary"
              style={{ border: "1px solid white" }}
            >
              location
            </a>
          </div>
        </div>
        <div
          className="float-child card bg-transparent col-md-3"
          style={{
            width: "80%",
            border: "none",
            marginTop: "15%",
            marginLeft: "5%",
          }}
        >
          <img
            style={{ border: "2px solid white", borderRadius: "8%" }}
            src="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=819&q=80"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "white" }}>
              Call us
            </h5>
            <p className="card-text" style={{ color: "white" }}>
              we are open for any sort of collab, so just dial us now for any
              such query or complaint
            </p>
            <a
              href="https://www.linkedin.com/in/deepanshu-thakur-92a17a262"
              target="_blanck"
              alt="error"
              className="btn btn-primary"
              style={{ border: "1px solid white" }}
            >
              dial now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
