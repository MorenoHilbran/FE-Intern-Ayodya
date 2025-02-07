import Category from "../../organisms/Category";
import Hero from "../../organisms/Hero";
import Navbar from "../../organisms/Navbar";
import PopularCourse from "../../organisms/PopularCourse";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar buttonText="Masuk" />
      <Hero />
      <Category />
      <PopularCourse />
    </div>
  );
}