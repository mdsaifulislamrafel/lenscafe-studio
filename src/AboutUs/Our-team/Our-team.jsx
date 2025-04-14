import TeamCard from "./TeamCard";

const teamMembersData = [
  {
    name: "John Smith",
    role: "Account Manager",
    imageUrl: "/images/image_1.png",
  },
  {
    name: "Davis Ekstrom Bothman",
    role: "Account Manager",
    imageUrl: "/images/image_2.png",
  },
  {
    name: "Cristofer Calzoni",
    role: "Managing Director",
    imageUrl: "/images/image_3.png",
  },
  {
    name: "Alfonso Mango",
    role: "Web Developer",
    imageUrl: "/images/image_4.png",
  },
  {
    name: "Leo Korsgaard",
    role: "UI/UX Designer",
    imageUrl: "/images/image_5.png",
  },
  {
    name: "Roger Rosser",
    role: "Marketing Director",
    imageUrl: "/images/image_6.png",
  },
];

const OurTeam = () => {
  return (
    <section className="py-16 px-4 our-team">
      <div className="container mx-auto space-y-10">
        <h1 className="text-center text-white font-bold text-4xl">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembersData.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
