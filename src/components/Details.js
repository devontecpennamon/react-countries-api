import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Details.css";

const url = "https://restcountries.com/v2/name/";

function Details() {
  const [state, setState] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const getCountry = async () => {
    const response = await fetch(url + location.pathname);
    const country = await response.json();
    setState(country[0]);
    console.log(country[0]);
    console.log(state);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      <section className="information-container">
        <div className="information-wrapper">
          <img src={state.flag} />
          <h1>{state.name}</h1>
          <h3>Region: {state.region}</h3>
          <h3>Population: {state.population}</h3>
          <h3>Time Zone(s): {state.timezones}</h3>
          <h3>Subregion: {state.subregion}</h3>
          <button onClick={() => navigate("/")} className='back-button'>Back</button>
        </div>
      </section>
    </>
  );
}

export default Details;
