import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Why Choose Us?</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {/* card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-2 hover:bg-[#1B1A19] duration-500 group">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center justify-center size-10 rounded-full button_gradeint text-white text-sm font-medium mb-4">
                01
              </div>
              <img
                width={70}
                height={70}
                src="/icons/intregrate_team.svg"
                alt="integrate_team"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#D3D0CE] duration-500">
              Integrated Team Collaboration
            </h3>
            <p className="text-[#524E4C] leading-relaxed pt-6 group-hover:text-white duration-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable With US.
            </p>
          </div>
          {/* card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-2 hover:bg-[#1B1A19] duration-500 group">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center justify-center size-10 rounded-full button_gradeint text-white text-sm font-medium mb-4">
                02
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white duration-500">
              No Need For Micromanagement
            </h3>
            <p className="text-[#524E4C] leading-relaxed pt-6 group-hover:text-[#D3D0CE] duration-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable With US.
            </p>
            <img
              width={70}
              height={70}
              src="/icons/microManagement.svg"
              alt="microManagement"
            />
          </div>
          {/* card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-2 hover:bg-[#1B1A19] duration-500 group">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center justify-center size-10 rounded-full button_gradeint text-white text-sm font-medium mb-4">
                03
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white duration-500">
              AI-Driven Innovation
            </h3>
            <p className="text-[#524E4C] leading-relaxed pt-6 group-hover:text-[#D3D0CE] duration-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable With US.
            </p>
            <img
              width={70}
              height={70}
              src="/icons/ai_driven.svg"
              alt="ai_driven"
            />
          </div>
          {/* card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-2 hover:bg-[#1B1A19] duration-500 group">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center justify-center size-10 rounded-full button_gradeint text-white text-sm font-medium mb-4">
                04
              </div>
              <img
                width={70}
                height={70}
                src="/icons/support.svg"
                alt="support"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white duration-500">
              Comprehensive Support
            </h3>
            <p className="text-[#524E4C] leading-relaxed pt-6 group-hover:text-[#D3D0CE] duration-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable With US.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
