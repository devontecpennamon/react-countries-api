import { useState, useEffect } from "react";
import "../App.css";
import Details from './Details';
import Header from './Header';
import { NavLink } from 'react-router-dom';

const url = "https://restcountries.com/v2/all";

function App() {
  const [countriesObject, setCountriesObject] = useState({countries: [], filteredCountries: []});
  

  const getCountries = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountriesObject({countries, filteredCountries: countries});
    console.log(countries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
    <Header countries={countriesObject.countries} setCountries={setCountriesObject} countriesObject={countriesObject}/>
    <h1 className='countriesLength'>{countriesObject.filteredCountries.length} results</h1>
    <section className='flag-grid'>
      {countriesObject.filteredCountries.map((country) => {
        const { flags, name } = country;
        return (
          <NavLink className='flag-container' key={country.name} to={country.name}>
            <img src={flags.svg} data-bs-toggle="modal" data-bs-target=".countryModal"/>
            <h3 className='flag-name'>{name}</h3>
          </NavLink>
        );
      })}
      </section>
    </>
  );
}

export default App;
