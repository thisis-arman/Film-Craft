// import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Slider = () => {
  return (
    <div>
    
      <section className="relative bg-[url(https://img.freepik.com/free-photo/man-filming-with-professional-camera-new-movie_23-2149066384.jpg?w=900&t=st=1692076782~exp=1692077382~hmac=06a45b568fcd7b8f432a31d17b2508d85544b49da5b631f4b105a116edb1b37a)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white bg-opacity-25 bg-gradient-to-r from-white/95 to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              We Help You To Discover 
              <strong className="block font-extrabold text-rose-700">
              Things Differently.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
           Our mission is to inspire you to perceive the world differently, fostering a curious spirit and unveiling hidden wonders. 
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
