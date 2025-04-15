const podcasts = [
  {
    title: "The New Approach to Personal Branding",
    videoUrl: "dQw4w9WgXcQ", // YouTube video ID
  },
  {
    title: "Learning English With Podcast",
    videoUrl: "JGwWNGJdvx8",
  },
  {
    title: "The Secrets of Great Communication",
    videoUrl: "eY52Zsg-KVI",
  },
  {
    title: "Productivity Tips That Work",
    videoUrl: "3JZ_D3ELwOQ",
  },
  {
    title: "How to Stay Motivated Every Day",
    videoUrl: "xvFZjo5PgG0",
  },
  {
    title: "The Science Behind Habit Formation",
    videoUrl: "ktvTqknDobU",
  },
];

const OurLatestVideo = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold lg:text-4xl py-8">
          Our Latest Video
        </h1>

        {/* Grid of YouTube Embeds */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {podcasts.map((podcast, index) => (
            <div key={index} className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${podcast.videoUrl}`}
                title={podcast.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLatestVideo;
