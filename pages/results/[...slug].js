import React from "react";
 import Button from '@mui/material/Button';
 import StarRoundedIcon from '@mui/icons-material/StarRounded';
 import { useRouter } from 'next/router'
 import {DUMMY_LISTINGS} from '../../data/data';

function ResultDetailPage() {
    const router = useRouter();
     const listing = DUMMY_LISTINGS.find((list) => list.id == router.query.slug[0]);
 
  return (
    <div className="result">
      <div className="result__info">
        <h2>{listing.title}</h2>
        <div className="result__stars">
            <StarRoundedIcon className="result__star" />
            <p>
              <strong>{listing.star}</strong>
            </p>
          </div>

        <img src={listing.img} alt="" />


        <div>
          
        </div>

        <div className="result__body">


        <div className="result__infoTop">
          <h3>{listing.location}</h3>
          <p>{listing.description}</p>
        </div>
    

      <div className="result__infoBottom">
        <div className="result__price">
          <h2>{listing.price}</h2>
          <div className="result__stars">
            <StarRoundedIcon className="result__star" />
            <p>
              <strong>{listing.star}</strong>
            </p>
          </div>
          </div>
          <div className="result__total"  >
            <p>Total</p>
          <p>{listing.total}</p>
       
    
        </div>
        <Button variant="outlined">Reserve</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDetailPage;
