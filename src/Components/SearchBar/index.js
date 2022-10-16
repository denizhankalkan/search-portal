import React from 'react';

const SearchInputComponent = () => {

    return(
        <>
         <input
              data-testid="search-input"
              type="search-input"
              className="search-input"
              placeholder="SEARCH ( Client Name / Policy Number )"
              onChange={handleChange}
            />
        </>
    )
}

export default SearchInputComponent;