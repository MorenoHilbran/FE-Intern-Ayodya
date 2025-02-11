import Category from "../../organisms/Category";
import Hero from "../../organisms/Hero";
import Navbar from "../../organisms/Navbar";
import PopularCourse from "../../organisms/PopularCourse";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Hero />
      <Category />
      <PopularCourse />
    </div>
  );
}