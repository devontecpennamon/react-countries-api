import { useState } from "react";
import "../Header.css";

function Header({ countries, setCountries }) {
  const [search, setSearch] = useState('');

  const inputHandler = (e) => {
    setSearch(e.target.value)
    const newCountryArray = countries.filter((item) => item.name.toUpperCase().includes(e.target.value.toUpperCase()));
    return setCountries({countries, filteredCountries: newCountryArray});
  }

  return (
    <>
      <nav>
        <h2 className='logo'>Earth Finder</h2>
        <input type='text' placeholder='Find your country...' onChange={inputHandler}/>
      </nav>
    </>
  );
}

export default Header;