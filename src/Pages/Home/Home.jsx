import Categories from "../../Components/Categories/Categories";
import PopularClasses from "../../Components/PopularClasses/PopularClasses";
import PopularInstructors from "../../Components/PopularInstructors/PopularInstructors";
import Slider from "./HomeComponents/Slider";
import Testimonials from "./HomeComponents/Testimonials";
import ContactForm from "./HomeComponents/ContactForm";
import Offer from "./HomeComponents/Offer";
import BlogSection from "./HomeComponents/BlogSection";
import Category from "../../Components/Category/Category";
import Companies from "./HomeComponents/Companies";
import BeInstructor from "./HomeComponents/BeInstructor";

const Home = () => {
  return (
    <div>
      <Slider />
      <Category />
      <PopularClasses />
      <Offer />
      <PopularInstructors />
      <Testimonials />
      <BlogSection />
      <ContactForm />
      <BeInstructor />
      <Categories />
      <Companies />
    </div>
  );
};

export default Home;
