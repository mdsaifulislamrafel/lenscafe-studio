
import Frequently from "../components/Home/Frequently/Frequently";
import Idea from "../components/Home/Idea/Idea";
import Review_slider from "../components/Home/Review_slider/Review_slider";
import Banner from "../shared/Banner";
import Mission from "./Mission/Mission";
import OurTeam from "./Our-team/Our-team";

const AboutUs = () => {
  return (
    <div>
        <Banner
        title="Focusing How To Grow Your Business 10X Faster"
        description="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
      ></Banner>
      <Idea/>
      <Mission/>
      <OurTeam/>
      <Review_slider/>
      <Frequently/>
    </div>
  );
};

export default AboutUs;
