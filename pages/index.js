import React from "react";
// import "./Home.css";
import Banner from "../component/Banner";
import Header from "../component/Header";
import Card from "../component/Card";
 
// import {listUploads} from "../database/put-files";
function Index() {

   
  return (
    <div className="home">
      <Header></Header>
      <Banner />

      <div className="home__section">
        <Card
          src="yoga.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="hobbit.jpg"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="modernhouse.jpg"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="living.jpg"
          title="3 Bedroom Flat in Berlin"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="1.2 Eth/night"
        />
        <Card
          src="penthouse.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="2 Eth/night"
        />
        <Card
          src="bedroom3.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="1 Eth/night"
        />
      </div>
    </div>
  );
}

export default Index;
