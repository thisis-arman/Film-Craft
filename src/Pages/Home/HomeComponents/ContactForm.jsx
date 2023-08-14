
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import { useEffect } from 'react';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [doctor, setDoctor] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ContactFormData = new ContactFormData(event.target);
    console.log(ContactFormData);
    

    const url =
      "https://script.google.com/macros/s/AKfycby5nRdDBaCX1qpxDWa6DHQeYKMwBW9Ec2gaJ9dFF8xFmMKmttgYS70rbadJ3QNIx5UM/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: ContactFormData,
      });

      if (response.ok) {
        setName('')
        setMobile('')
        setDoctor('')
        setEmail('')
        setTime('')
        setDate('')
        alert("Data added to Google Sheets successfully!");

        // Do something after successful submission, e.g., clear the ContactForm fields
      } else {
        console.error(
          "Error adding data to Google Sheets:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error adding data to Google Sheets:", error);
    }
  };

  return (
    <div className="container overflow-hidden mx-auto relative top-20 md:mb-28 mb-36 ">
      <div className="hero min-h-screen text-white bg-[#07332F] rounded-md py-16 ">
        <div className="md:px-20 px-6 md:flex items-center gap-12 ">
          <div className="text-center  md:w-2/5  lg:text-left">
            <h1 className="text-5xl font-bold">Contact With Us!</h1>
            <p className="py-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi.
            </p>
            <div className="flex gap-4 py-2">
              <img
                className="w-6 h-6"
                src="../../../../doc-house Assets/phone-alt.png"
                alt=""
              />
              <p>+880182745982</p>
            </div>
            <div className="flex gap-4 py-2">
              <img src="../../../../doc-house Assets/location.png" alt="" />
              <p>Dhanmondi, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="card flex-shrink-0 md:w-3/5 w-full  shadow-2xl ">
            <form  data-aos="fade-left" data-aos-delay="400"  onSubmit={handleSubmit}>
              <div className="card-body grid grid-cols-1 md:grid-cols-2">
                <div className="ContactForm-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered text-black bg-[#18433f]"
                  />
                </div>
                <div className="ContactForm-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered text-black bg-[#18433f]"
                  />
                </div>

                <div className="ContactForm-control">
                  <label className="label">
                    <span className="label-text">Mobile Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Number"
                    name="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="input input-bordered bg-[#18433f] text-black"
                  />
                </div>

                <div className="ContactForm-control">
                  <label className="label">
                    <span className="label-text">Doctor Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doctor name"
                    name="Doctor"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="input input-bordered text-white bg-[#18433f]"
                  />
                </div>
                <div className="ContactForm-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="date"
                    name="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="input input-bordered text-white bg-[#18433f]"
                  />
                </div>

                <div className="ContactForm-control">
                  <label className="label">
                    <span className="label-text">Time</span>
                  </label>
                  <input
                    type="time"
                    placeholder="time"
                    name="Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="input input-bordered text-white bg-[#18433f]"
                  />
                </div>
              </div>
              <div className="ContactForm-control px-4 py-4 ">
                <button
                  type="submit"
                  className="btn btn-outline border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;