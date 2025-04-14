import React from 'react';

const Modal = ({ selectedProduct, setSelectedProduct }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{selectedProduct?.title}</h2>
            <button
              onClick={() => setSelectedProduct(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <div className="h-[200px] lg:h-[290px] xl:h-[350px] overflow-hidden relative rounded-2xl">
              <img
                className="object-cover hover:scale-110 duration-700"
                src={selectedProduct?.image}
                alt={selectedProduct?.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p className="text-gray-600">{selectedProduct?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
