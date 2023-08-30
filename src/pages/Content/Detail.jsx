import React from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

function DetailCountry() {

  const navigate = useNavigate();
  const Location = useLocation();
  const [region, setRegion] = React.useState();
  const [language, setLanguage] = React.useState();
  const [capital, setCapital] = React.useState();
  const [currencie, setCurrencie] = React.useState();
console.log(Location)
  React.useEffect(() => {
      const country = Location?.pathname
        ?.split("/")[3]
        ?.split("%20")
        ?.join(" ");
    console.log(Location?.pathname?.split("/")[3]?.split("%20")?.join(" "));
    
      axios
        .get(`https://restcountries.com/v3.1/name/${country}`)
        .then((res) => {
          console.log("berhasil :", res.data[0]);
          setRegion(res.data[0]);

          // currencies
          const valueCurrencies = res.data[0].currencies;
          const value = Object.values(valueCurrencies);
          setCurrencie(value[0]);

          // capital
          setCapital(res.data[0].capital);

          // languages
          const originalObject = res.data[0].languages;
          setLanguage(Object.values(originalObject));
        })
        .catch((err) => {
          console.log("error :", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err?.response?.data?.message,
          });
          navigate("/Content");
        });
  }, []);


  return (
    <div id className="container-fluid" style={{ backgroundColor: "#F4F4F4" }}>
      {/* Start Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Start content */}
      <div
        style={{
          backgroundColor: "#FDFDFD",
          width: "100%",
          height: "100%",
          marginTop: "10px",
        }}
      >
        <h2 className="text-center fw-bold">{region?.name?.common}</h2>

        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <figure class="figure">
              <img
                src={region?.flags?.png}
                class="figure-img img-fluid rounded"
              />
              <figcaption class="figure-caption">
                {region?.flags?.alt}
              </figcaption>
            </figure>
          </div>
          <div
            style={{
              width: "90%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={region?.coatOfArms?.png}
              style={{ width: "50%", height: "50%", marginTop: "1%" }}
            />
          </div>
        </div>
        <div>
          <table class="table">
            <thead>
                <tr>
                  <th scope="col">Country Name</th>
                  <th scope="col">:</th>
                  <th scope="col">{region?.name?.common}</th>
                </tr>
              </thead>
            <tbody>
              <tr>
                <td>Official Name</td>
                <td>:</td>
                <td>{region?.name?.official}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>:</td>
                <td>{region?.area} km²</td>
              </tr>
              <tr>
                <td>Population</td>
                <td>:</td>
                <td>{region?.population} </td>
              </tr>
              <tr>
                <td>Capital</td>
                <td>:</td>
                <td>
                  {capital?.map((item) => (
                    <>
                      {item}
                      {", "}
                    </>
                  ))}
                </td>
              </tr>
              <tr>
                <td>Continent/Region</td>
                <td>:</td>
                <td>
                  {region?.continents[0]}/{region?.region}
                </td>
              </tr>
              <tr>
                <td>Subregion</td>
                <td>:</td>
                <td>{region?.subregion}</td>
              </tr>
              <tr>
                <td>Currencies/Symbol</td>
                <td>:</td>
                <td>
                  {currencie?.name}/{currencie?.symbol}{" "}
                </td>
              </tr>
              <tr>
                <td>Languages</td>
                <td>:</td>
                <td>
                  {language?.map((item) => (
                    <>
                      {item}
                      {", "}
                    </>
                  ))}
                </td>
                <td></td>
              </tr>
              <tr>
                <td>Map</td>
                <td>:</td>
                <td>
                  <a
                    href={region?.maps?.googleMaps}
                    style={{ textDecoration: "none" }}
                  >
                    Google Maps
                  </a>
                  ,{" "}
                  <a
                    href={region?.maps?.openStreetMaps}
                    style={{ textDecoration: "none" }}
                  >
                    OpenStreetMap
                  </a>
                </td>
              </tr>
              <tr>
                <td>Time Zones</td>
                <td>:</td>
                <td>{region?.timezones[0]}</td>
              </tr>
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
  );
}

export default DetailCountry;
