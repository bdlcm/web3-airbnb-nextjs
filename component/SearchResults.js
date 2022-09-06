import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

const SearchResult = (props) => {
  return props.results.map((data) => (
    <Link href={`/results/${data.id}`}>
      <div className="searchResult" key={data.id}>
        <img src={data.img} alt="" />
        <FavoriteBorderIcon className="searchResult__heart" />

        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <p>{data.location}</p>
            <h3>{data.title}</h3>
            <p>____</p>
            <p>{data.description}</p>
          </div>

          <div className="searchResult__infoBottom">
            <div className="searchResult__stars">
              <StarIcon className="searchResult__star" />
              <p>
                <strong>{data.star}</strong>
              </p>
            </div>
            <div className="searchResults__price">
              <h2>{data.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default SearchResult;
