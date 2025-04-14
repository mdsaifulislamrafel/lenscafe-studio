import OurWorks from "./OurWorks/OurWorks";
import WhyChooseUs from "./Why-choos-us/Why-choos-us";
import Banner from "./Banner/Banner";
import Idea from "./Idea/Idea";
import OurServices from "./OurServices/OurServices";
import Review_slider from "./Review_slider/Review_slider";

const Home = () => {
  return (
    <div>
        <Banner/>
        <Idea/>
        <OurServices/>
        <OurWorks/>
        <WhyChooseUs/>
        <Review_slider/>
    </div>
  );
};

export default Home;
