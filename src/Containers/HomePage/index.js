import React, { useEffect, useState } from "react";
import ResultTable from "../../Components/ResultTable/index";
import {clientsData} from "../../MockData/index";
import "../../Styles/search.scss";
import SearchIcon from '@mui/icons-material/Search';
import HelpersGeneral from "../../Helpers/HelpersGeneral";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isDisplayResult, setIsDisplayResult] = useState(false);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    if (event.target.value === "") {
        setIsDisplayResult(false);
    } else {
        setIsDisplayResult(true);
    }
  };

  const filteredClients = HelpersGeneral.filterMethod(searchInput, clientsData);

  return (
    <>
      <nav className="nav-search">
        <div className="container">
          <header className="search-header-bar ">
            <SearchIcon className="search-icon"/>
                <input
                data-testid="search-input"
                type="search-input"
                className="search-input"
                placeholder="SEARCH ( Client Name / Policy Number )"
                onChange={handleChange}
                />
          </header>
        </div>
      </nav>
      {isDisplayResult && filteredClients !== undefined ? 

     filteredClients?.map((client) => ( 
        <ResultTable key={client.id} client={client} /> 
     )) 
     
     : ""}
    </>
  );
}

export default Search;

   
  