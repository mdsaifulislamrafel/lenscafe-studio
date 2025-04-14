
import { useState } from "react";
import Modal from "../../Home/OurServices/Modal";
import ServiceCard from "../../Home/OurServices/Service-card";

const servicesData = [
  {
    id: "01",
    title: "Product Photoshoot",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less English readable.",
    image: "/images/services/photo_shoot.png",
  },
  {
    id: "02",
    title: "Product Videoshoot",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less English readable.",
    image: "/images/services/video_shoot.png",
  },
  {
    id: "03",
    title: "Class Taking With Smart Board",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less English readable.",
    image: "/images/services/class.png",
  },
  {
    id: "04",
    title: "Podcast Recording",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less English readable.",
    image: "/images/services/podcast.png",
  },
  {
    id: "05",
    title: "Graphics Design",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less English readable.",
    image: "/images/services/graphice_design.png",
  },
  {
    id: "06",
    title: "Video Editing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less English readable.",
    image: "/images/services/video_editor.png",
  },
  {
    id: "07",
    title: "Digital Marketing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less English readable.",
    image: "/images/services/digital_marketing.png",
  },
  {
    id: "08",
    title: "Web Design & Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less English readable.",
    image: "/images/services/web_development.png",
  },
  {
    id: "09",
    title: "App Development",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less English readable.",
    image: "/images/services/app_development.png",
  },
];

const ServicesExplore = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Explore services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((product, idx) => {
            return (
              <ServiceCard
                key={idx}
                setSelectedProduct={setSelectedProduct}
                product={product}
              />
            );
          })}
          {selectedProduct && (
            <Modal
              setSelectedProduct={setSelectedProduct}
              selectedProduct={selectedProduct}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesExplore;
