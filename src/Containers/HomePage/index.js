import React, { useEffect, useState } from "react";
import ResultTable from "../../Components/ResultTable/index";
import {clientsData} from "../../MockData/index";
import "../../Styles/search.scss";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isDisplayResult, setIsDisplayResult] = useState(false);
  const [clientList, setClientList] = useState(clientsData);


  const filteredClients = clientsData.filter((client) => {
    const input = searchInput.toLowerCase();

    return client.name.toLowerCase().includes(input) 
      || client.policyNumber.includes(input)
      || client.phone.includes(input) 
      || client.email.toLowerCase().includes(input) 
    ;
  });

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
        setIsDisplayResult(false);
    } else {
        setIsDisplayResult(true);
    }
  };

  return (
    <>
      <nav className="nav-search">
        <div className="container">
          <header className="search-header-bar ">
            <i className="fa fa-search" data-testid="search-icon"></i>
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
      {isDisplayResult ? 

     filteredClients.map((client) => ( 
        <ResultTable key={client.id} client={client} /> 
     )) 
     
     : ""}
    </>
  );
}

export default Search;

   
  