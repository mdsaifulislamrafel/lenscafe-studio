import React from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import ReviewCard from "./Review-card";

const testimonialsData = [
  {
    name: "Albert Rajib",
    position: "CEO at Soft IT",
    rating: 4, // Assuming 5-star rating
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
    image: "/images/review_1.png", // Replace with the actual image path
  },
  {
    name: "Cooper Culhane",
    position: "Digital Marketer",
    rating: 5, // Assuming 5-star rating
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
    image: "/images/review_2.png", // Replace with the actual image path
  },
  {
    name: "Carter Stanton",
    position: "Business Consultant",
    rating: 5, // Assuming 5-star rating
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
    image: "/images/review_3.png", // Replace with the actual image path
  },
  {
    name: "Albert Rajib",
    position: "CEO at Soft IT",
    rating: 2, // Assuming 5-star rating
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
    image: "/images/review_1.png", // Replace with the actual image path
  },
  {
    name: "Cooper Culhane",
    position: "Digital Marketer",
    rating: 5, // Assuming 5-star rating
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
    image: "/images/review_2.png", // Replace with the actual image path
  },
  {
    name: "Carter Stanton",
    position: "Business Consultant",
    rating: 3, // Assuming 5-star rating
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
    image: "/images/review_3.png", // Replace with the actual image path
  },
];

const Review_slider = () => {
  return (
    <section className="py-16 px-4 idea_section_bg">
      <div className="container mx-auto space-y-10">
        <h1 className="font-bold text-3xl md:text-4xl text-center">
          What’s Our Clients Say
        </h1>
        <Swiper
          loop={true}
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          spaceBetween={50}
        >
          {testimonialsData.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <ReviewCard item={item}></ReviewCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Review_slider;
