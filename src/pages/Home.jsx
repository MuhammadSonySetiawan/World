import React from 'react';
import "../style/Home.css";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
function Home() {
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
              backgroundColor: "white",
              height: "100%",
              width: "whitesmoke",
              marginTop: "10px",
              padding: "10px",
            }}
          >
            <h2>Home</h2>
            <p className="text-justify">
              Welcome to "World" — the place where knowledge converges to unveil
              the richness and intricacy of various countries across the globe.
            </p>
            <p className="text-justify">
              With pride, we present this platform as a broad window that opens
              the doors to delve into deep and detailed information about each
              country. From the stories of history shaping identities to the
              mesmerizing wonders of nature, "World" aims to deliver an
              unparalleled learning experience, taking you across continents and
              cultures.
            </p>
            <p className="text-justify">
              We understand that this world is a place of complexity and allure,
              brimming with nuances and endless variations. With this spirit in
              mind, our team endeavors to gather intriguing facts, inspiring
              narratives, and profound insights into life across different
              corners of the world.
            </p>
            <p className="text-justify">
              Whether you are a knowledge-thirsty student, a wanderer at heart
              always eager for more, or even just a curious enthusiast, "World"
              is poised to embark you on an unforgettable journey. Let's
              together explore, comprehend, and appreciate the diversity that
              makes this world so astonishing. Welcome to the adventure of
              knowledge at "World"!
            </p>
          </div>
          <div style={{ backgroundColor: "#F4F4F4", margin: "20px" }}></div>
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

export default Home