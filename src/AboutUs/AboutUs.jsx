
import Idea from "../components/Home/Idea/Idea";
import Banner from "../sheard/Banner";
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
      
    </div>
  );
};

export default AboutUs;
