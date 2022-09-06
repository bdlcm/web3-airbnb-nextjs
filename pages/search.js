import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { DUMMY_LISTINGS } from "../data/data";
import SearchResult from "../component/SearchResults";
import Header from "../component/Header";

function Search() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult results={DUMMY_LISTINGS}></SearchResult>
    </div>
  );
}

export default Search;
