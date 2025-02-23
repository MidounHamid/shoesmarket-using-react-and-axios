import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Fouter from "./components/Fouter";
import Carousel1 from "./components/Carousel1";
import Header1 from "./components/Header1";

import { useState, useEffect } from "react";
import axios from "axios";


function App() {

  const url = "http://localhost:3030/shoes"; // Replace with your API endpoint
  const [shoes, setShoes] = useState([]);
  const [error, setError] = useState(null); // Error state

  // Fetch data from the API
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (response.data && response.data.nike) {
          setShoes(response.data.nike);
          console.log(response.data);
        } else {
          setError("Invalid data structure from API");
        }
      })
      .catch((error) => setError("Error fetching data: " + error.message));
  }, []);


  if (error) {
    return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;
  }

  return (
    <>

      {/* <Header /> */}
      <Header1 shoes={shoes}/>
      <Home shoes={shoes}/>
      <Fouter/>
      <Carousel1 shoesList={shoes} />

    </>
  );
}

export default App;
