


import Categories from '../../Components/Categories/Categories';
import PopularClasses from '../../Components/PopularClasses/PopularClasses';
import PopularInstructors from '../../Components/PopularInstructors/PopularInstructors';
import Slider from './HomeComponents/Slider';
import Testimonials from './HomeComponents/Testimonials';
import ContactForm from './HomeComponents/ContactForm';

const Home = () => {
    return (
        <div>

           <Slider/>
           <PopularClasses/>
           <PopularInstructors/>
           <Testimonials/>
           <ContactForm/>
           <Categories/>


        </div>
    );
};

export default Home;