import React from 'react'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <div style={{ backgroundColor: "#293752" }}>
      <div className="ms-3">
        <h2 className="text-light pt-4" style={{ textAlign: "center" }}>
          World
        </h2>
        <p className="text-light mt-5" style={{ textAlign: "center" }}>
          Information about country knowledge from all corners of the world
        </p>
        <div className="d-flex justify-content-center ">
          <a
            href="https://github.com/MuhammadSonySetiawan"
            className="text-decoration-none text-light me-2"
          >
            <BsGithub style={{ height: "50px", width: "50px" }} />
          </a>
          <a
            href="https://github.com/MuhammadSonySetiawan"
            className="text-decoration-none text-light"
          >
            <BsLinkedin style={{ height: "50px", width: "50px" }} />
          </a>
        </div>
      </div>

      <div
        style={{ width: "100%", height: "200px" }}
        className="d-flex flex-column justify-content-end "
      >
        <p style={{ textAlign: "center", color: "#F4F4F4" }}>
          {" "}
          © built by{" "}
          <a
            className="text-decoration-none text-light"
            href="https://github.com/MuhammadSonySetiawan"
          >
            {" "}
            Muhammad Sony Setiawan
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer