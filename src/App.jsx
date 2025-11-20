import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import FeaturedCourses from "./components/FeaturedCourses";
import TrustedCompanies from "./components/TrustedCompanies";
import AICareerBanner from "./components/AICareerBanner";
function App() {
  return (
      <>
        <Header />
        <HeroSection />
        <Categories />
          <AICareerBanner />
        <FeaturedCourses />
        <TrustedCompanies />
      </>
  );
}

export default App;
