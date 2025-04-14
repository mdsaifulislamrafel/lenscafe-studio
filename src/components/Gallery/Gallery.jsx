import Banner from "../../shared/Banner";
import OurLatestVideo from "./OurLatestVideo/OurLatestVideo";

const Gallery = () => {
  return (
    <div>
      <Banner
        title="Our Daily Podcast Videos Learn New Thing"
        description="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
      ></Banner>
      <OurLatestVideo/>
    </div>
  );
};

export default Gallery;
