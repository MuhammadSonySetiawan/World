import React from "react";
import "../style/Home.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
function About() {
  
  return (
    <div id className="container-fluid" style={{ backgroundColor: "#F4F4F4" }}>
      <div className="container">
        {/* Start Navbar */}
        <Navbar />
        {/* End Navbar */}

        {/* Start content */}
        <div>
          <div
            style={{
              backgroundColor: "whitesmoke",
              height: "100%",
              width: "whitesmoke",
              marginTop: "10px",
            }}
          >
            <h2>About Us</h2>
            <p className="text-justify">
              At "World", we are passionate about providing comprehensive and
              enriching information about countries from all corners of the
              globe. Our mission is to be your go-to source for in-depth
              insights into the rich tapestry of cultures, histories,
              geographies, and traditions that define each nation. Our dedicated
              team of researchers and enthusiasts work tirelessly to curate
              accurate and engaging content, ensuring that you have access to a
              wealth of knowledge that transcends borders. Whether you're a
              student eager to learn, a traveler seeking inspiration, or simply
              someone intrigued by the world, we are here to satiate your
              curiosity and broaden your perspectives. Join us on this exciting
              journey as we unravel the stories that make each country unique,
              fostering a deeper appreciation for the global community we all
              share. Explore, learn, and connect with the world through "World".
            </p>
          </div>
        </div>
        {/* end content */}
        <hr />
        {/* start Futer */}
        <Footer />
        {/* and Futer */}
      </div>
    </div>
  );
}

export default About;
