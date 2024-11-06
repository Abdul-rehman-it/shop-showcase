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
      <section id="new-arrivals">
        <NewArrivals />
      </section>
      <ThreeImagesShow id="three-images-show" />
      <section id="categories">
      <Categories/>
      </section>

      <section id="FeaturedProducts">
        <FeaturedProducts />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <BlogSection id="blog-section" />
      <ShippingWorldwide id="shipping-worldwide" />
      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
}
