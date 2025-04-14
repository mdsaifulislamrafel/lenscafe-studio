
  
  const Banner = ({ title, description }) => {
    return (
      <section className="our-works pt-20 flex items-center justify-center px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-8 gap-6">
          <h1 className="text-4xl lg:text-[55px] xl:text-[80px] font-bold text-[#fff] lg:leading-[70px] xl:leading-[90px]">
            {title}
          </h1>
          <p className="text-[#D3D0CE]">{description}</p>
        </div>
      </section>
    );
  };
  
  export default Banner;
  