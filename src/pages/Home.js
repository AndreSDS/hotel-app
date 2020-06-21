import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
<<<<<<< HEAD
=======
import StyledHero from "../components/StyledHero";
>>>>>>> 5e4bd2625be605e3260e2790c57f4ebed864c687

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
<<<<<<< HEAD
=======
      <StyledHero />
>>>>>>> 5e4bd2625be605e3260e2790c57f4ebed864c687
    </>
  );
}
