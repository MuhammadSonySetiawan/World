import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { searchItem } from "../reduser/searchSlice";



function Navbar() {
   const dispatch = useDispatch();
   const navigation = useNavigate();
   const [keyword, setKeyword] = React.useState();
   
   const handleSearch =()=>{
      dispatch(searchItem(keyword));
      navigation("/Search");
    }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            World
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginBottom: "10px" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <input
                  className="form-control form-control-lg"
                  style={{
                    fontSize: "18px",
                    width: "100%",
                  }}
                  placeholder="Search"
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      handleSearch();
                    }
                  }}
                />
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Content">
                  List Countries
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Start Navbar Image */}
      <img
        src="/images/bg2.jpg"
        style={{ height: "50vh", width: "100%" }}
      ></img>
      {/* End Navbar Image */}
     
    </div>
  );
}

export default Navbar