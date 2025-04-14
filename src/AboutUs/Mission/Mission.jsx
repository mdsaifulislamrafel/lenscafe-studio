const Mission = () => {
    return (
      <section className="px-4 py-16">
        <div className="container mx-auto space-y-8">
          {/* mission */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="relative w-full md:w-1/2 lg:w-[40%] h-[400px] xl:h-[450px] rounded-2xl overflow-hidden">
              <img
                src="/images/mission.png"
                alt="mission"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="md:w-1/2 lg:w-[60%] space-y-4">
              <h1 className="text-[#1B1A19] font-bold text-4xl">Our Mission</h1>
              <p className="text-[#524E4C]">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution.
              </p>
            </div>
          </div>
          {/* vission */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 lg:w-[60%] space-y-4">
              <h1 className="text-[#1B1A19] font-bold text-4xl">Our Vission</h1>
              <p className="text-[#524E4C]">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution.
              </p>
            </div>
            <div className="relative w-full md:w-1/2 lg:w-[40%] h-[400px] xl:h-[450px] rounded-2xl overflow-hidden">
              <img
                src="/images/vission.png"
                alt="vission"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Mission;
  