import React from "react";
import { Star } from "lucide-react";

const ReviewCard = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl p-6 max-w-md shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <img
          width={90}
          height={90}
          src={item?.image}
          alt={item?.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{item?.name}</h3>
          <p className="text-sm text-gray-600">{item?.position}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(item?.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed">{item?.review}</p>
    </div>
  );
};

export default ReviewCard;
