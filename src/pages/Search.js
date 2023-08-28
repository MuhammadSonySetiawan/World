import React from "react";
import "../style/Home.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

import { dispatch, useSelector } from "react-redux/es/hooks/useSelector";
import { searchItem, clearData, reset } from "../reduser/searchSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { clear } from "@testing-library/user-event/dist/clear";

function Search() {
const navigation = useNavigate()
const state = useSelector((state) => state)
const [results, setResults] = React.useState();


React.useEffect(()=>{
  console.log(state?.searchSlice?.keyword);
  const key = state?.searchSlice?.keyword;
  axios
    .get(`https://restcountries.com/v3.1/name/${key}`)
    .then((res) => {
      console.log("hasil :", res?.data);
      setResults(res?.data);
      console.log(state);
      // console.log(state?.searchSlice?.keyword?.clear());
    })
    .catch((err) => {
      console.log("gagal :", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "enter the correct name or be more specific",
      });
      // dispatch(clearData());
      navigation("/Content");
        console.log(state);
      clear(state?.searchSlice?.keyword);
    });
},[])

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
            <h2>Search</h2>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Flag</th>
                  <th scope="col">Country Name</th>
                  <th scope="col">Region</th>
                  {/* <th scope="col">Handle</th> */}
                </tr>
              </thead>
              <tbody>
                {results ? (
                  <>
                    {results?.map((item, key) => (
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
                            to={`/Content/Detail/${item?.capital}`}
                            style={{ textDecoration: "none" }}
                          >
                            {item?.name?.common ??
                              "Country name does not exist"}
                          </Link>
                        </td>
                        <td>{item?.region}</td>
                        {/* <td>@mdo</td> */}
                      </tr>
                    ))}
                  </>
                ) : (
                  <div className="text-center bg-primary">"not found"</div>
                )}
              </tbody>
            </table>
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

export default Search;
