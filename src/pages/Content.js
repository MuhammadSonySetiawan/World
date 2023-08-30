import React, { useState } from "react";
import "../style/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useDispatch } from "react-redux";
import { searchItem } from "../reduser/searchSlice";
import { useNavigate } from "react-router-dom";

function Home() {
     const dispatch = useDispatch();
     const navigation = useNavigate();
     const [keyword, setKeyword] = React.useState();
  const [country, setCountry] = useState();

  React.useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        setCountry(res?.data);
      })
      .catch((err) => console.log("gagal :", err));
  }, []);
 
    const handleSearch = () => {
      dispatch(searchItem(keyword));
      navigation("/Search");
    };
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
            <h2>List of Countries in the World</h2>
            <p>
              Welcome to our global knowledge platform! Here, you will discover
              opportunities to explore and gain deeper insights into various
              countries around the world. From history and culture to geography
              and unique traditions, we present information that will enrich
              your understanding of the incredible diversity present on this
              planet. Get ready for an unlimited journey of knowledge across
              continents. Happy exploring!
            </p>
          </div>
          <div style={{ backgroundColor: "#F4F4F4", margin: "20px" }}>
            <input
              className="form-control form-control-lg mb-3"
              style={{
                fontSize: "18px",
                width: "100%",
              }}
              placeholder="Search Country Name"
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleSearch();
                }
              }}
            />
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">No. </th>
                  <th scope="col">Country Name</th>
                  <th scope="col">Region</th>
                </tr>
              </thead>
              <tbody>
                {country?.map((item, key) => (
                  <tr key={key}>
                    <th scope="row">
                      <img
                        src={item?.flags?.png}
                        style={{ height: "25px", width: "40px" }}
                      />
                    </th>
                    <td>
                      <Link
                        key={key}
                        to={`/Content/Detail/${item?.name?.common}`}
                        style={{ textDecoration: "none" }}
                      >
                        {item?.name?.common ?? "Country name does not exist"}
                      </Link>
                    </td>
                    <td>{item?.region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default Home;
