import React, { useState } from "react";
import Link from 'next/link'

// import "./Banner.css";
  

const  Banner= ()=> {
   const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
 
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>

        <Link href="/search">
          <a>          Explore Nearby</a>
        </Link>
   
      </div>
    </div>
  );
}

export default Banner;
