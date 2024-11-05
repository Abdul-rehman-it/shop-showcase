import React from "react";
import Banner from "./Banner/Banner";
import NewArrivals from "./NewArrivals/NewArrivals";
import Categories from "./Categories/Categories";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Testimonials from "./Testimonials/Testimonials";
import BlogSection from "./BlogSection/BlogSection";
import Footer from "./Footer/Footer";
import SeasonSection from "./SeasonCard/CardWithImage";
import ThreeImagesShow from "./AutumShow/ThreeImagesShow";
import ShippingWorldwide from "./Shipping/ShippingWorldwide";

export default function HomeLayout() {
  return (
    <div>
      <Banner id="banner" />
      <SeasonSection id="season-section" />
      <NewArrivals id="new-arrivals" />
      <ThreeImagesShow id="three-images-show" />
      <Categories id="categories" />
      <FeaturedProducts id="featured-products" />
      <Testimonials id="testimonials" />
      <BlogSection id="blog-section" />
      <ShippingWorldwide id="shipping-worldwide" />
      <Footer id="footer" />
    </div>
  );
}
