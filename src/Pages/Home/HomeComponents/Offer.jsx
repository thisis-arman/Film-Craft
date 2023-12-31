import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Offer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [])
    return (
        <div data-aos="fade-up" data-aos-delay="400" className="md:px-12 px-4">
            <section className="overflow-hidden  md:rounded-lg my-12 rounded-none shadow-2xl md:grid md:grid-cols-3">
  <img
    alt="Trainer"
    src="https://i.ibb.co/sQ31hMb/wepik-export-20230714094700-QLW1.png"
    className="h-32 w-full object-cover md:h-full"
  />

  <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
    <p className="text-sm font-semibold uppercase tracking-widest">
      Run with the pack
    </p>

    <h2 className="mt-6 font-black uppercase">
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
        Get 20% off
      </span>

      <span className="mt-2 block text-sm">On your next order over $50</span>
    </h2>

    <a
      className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
      href=""
    >
      Get Discount
    </a>

    <p className="mt-8 text-xs font-medium uppercase text-gray-400">
      Offer valid until 24th March, 2021 *
    </p>
  </div>
</section>
        </div>
    );
};

export default Offer;