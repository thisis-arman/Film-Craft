


import Categories from '../../Components/Categories/Categories';
import PopularClasses from '../../Components/PopularClasses/PopularClasses';
import PopularInstructors from '../../Components/PopularInstructors/PopularInstructors';
import Slider from './HomeComponents/Slider';
import Testimonials from './HomeComponents/Testimonials';
import ContactForm from './HomeComponents/ContactForm';
import Offer from './HomeComponents/Offer';
import BlogSection from './HomeComponents/BlogSection';

const Home = () => {
    return (
        <div>

           <Slider/>
           <PopularClasses/>
           <Offer/>
           <PopularInstructors/>
           <Testimonials/>
           <BlogSection/>
           <ContactForm/>
           <Categories/>


        </div>
    );
};

export default Home;