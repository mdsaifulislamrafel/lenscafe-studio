import React from 'react';

const ServiceCard = ({ product, setSelectedProduct }) => {
  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="bg-white group duration-700 hover:bg-[#1B1A19] rounded-2xl p-6 shadow-sm cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-gray-900 duration-500 mb-3 group-hover:text-white">
        {product?.title}
      </h3>
      <div className="inline-flex items-center justify-center size-10 rounded-full button_gradeint text-white text-sm font-medium mb-4">
        {product?.id}
      </div>
      <div className="h-[200px] lg:h-[290px] xl:h-[350px] overflow-hidden relative rounded-2xl">
        <img
          className="object-cover hover:scale-110 duration-700"
          src={product?.image}
          alt={product?.title}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <p className="text-[#524E4C] group-hover:text-[#D3D0CE] leading-relaxed pt-6">
        {product?.description}
      </p>
    </div>
  );
};

export default ServiceCard;
