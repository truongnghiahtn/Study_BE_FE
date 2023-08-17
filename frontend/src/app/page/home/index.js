import React from "react";
import Header from "./../../layout/header";
import Hero from "./hero.js";
import Categories from "./categories";
import Footer from "./../../layout/footer";
import BestDeals from"./bestDeals";
import Events from "./../../components/events/events";
import FeaturedProduct from "./featuredProduct";
import Sponsored from "./sponsored";

export default function Home() {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
}
