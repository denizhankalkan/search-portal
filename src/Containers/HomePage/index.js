import React, { useEffect, useState } from "react";
import ResultTable from "../../Components/ResultTable/index";
import {clientsData} from "../../MockData/index";
import "../../Styles/search.scss";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isDisplayResult, setIsDisplayResult] = useState(false);
  const [clientList, setClientList] = useState(clientsData);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    if (event.target.value === "") {
        setIsDisplayResult(false);
    } else {
        setIsDisplayResult(true);
    }
  };

  const filteredClients = clientsData.filter((client) => {
    const input = searchInput.toLowerCase();
    return client.name.toLowerCase().includes(input) 
      || client.policyNumber.includes(input)
      || client.phone.includes(input) 
      || client.email.toLowerCase().includes(input) 
    ;
  });

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

   
  