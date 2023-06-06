import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css'


const Slider = () => {
    return (
        <div>
             <AwesomeSlider className='md:h-[700px]'>
             <div>
                    <video autoPlay loop muted  src="https://cdn.coverr.co/videos/coverr-sunset-in-bali-4090/1080p.mp4"></video>
                </div>
                <div>
                    <video autoPlay loop muted  className='w-full object-cover m-0' src="https://cdn.coverr.co/videos/coverr--07-022-22-girl-with-analog-camera_0007-9901/1080p.mp4"></video>
                </div>
                <div>
                    <video autoPlay loop muted  src="https://cdn.coverr.co/videos/coverr-filmmaker-walking-past-yachts-385/1080p.mp4"></video>
                </div>
                <div> 
                    <video autoPlay loop muted src="https://cdn.coverr.co/videos/coverr-hiking-through-the-mountains-1755/1080p.mp4"></video>
                </div>
                <div> 
                    <video autoPlay loop muted src="https://cdn.coverr.co/videos/coverr-taking-photos-of-cupcakes-235/1080p.mp4"></video>
                    
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Slider;