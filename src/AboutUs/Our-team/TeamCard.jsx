const TeamCard = ({ member }) => {
    return (
      <div className="bg-white group hover:bg-[#1B1A19] duration-500 cursor-pointer rounded-3xl p-4 ">
        <div className="h-[300px] relative overflow-hidden rounded-2xl mb-4">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="object-cover w-full h-full hover:scale-110 duration-500"
          />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-white duration-500">
            {member.name}
          </h3>
          <p className="text-gray-600 text-sm group-hover:text-[#D3D0CE] duration-500">
            {member.role}
          </p>
        </div>
      </div>
    );
  };
  
  export default TeamCard;
  