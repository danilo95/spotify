import React from "react";
import { useState, useEffect } from 'react';
import "./search.css";
import useDebounce from './UseDebounce';

const Search=({searchHandler})=>{
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearchTerm = useDebounce(searchTerm, 500);
useEffect(
    () => {
      if (debouncedSearchTerm) {
      searchHandler(debouncedSearchTerm,'20')
      } 
    },[debouncedSearchTerm, searchHandler]
  );
    return (
      <>
          <input
            type="text"
            placeholder="search"
            className="search-Button"
            onChange={e => e.target.value===""?setSearchTerm("*a"):setSearchTerm(e.target.value)}
          />
      
      </>
    );
  
}

export default Search;
