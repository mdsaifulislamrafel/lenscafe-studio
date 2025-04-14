import { useState } from "react";
import PodcastCard from "./PodcastCard";

const podcasts = [
  {
    title: "The New Approach to Personal Branding",
    imageUrl: "/images/podcast.jpg",
    videoUrl: "/video/podcast_1.mp4",
  },
  {
    title: "Learning English With Podcast",
    imageUrl: "/images/podcast.png",
    videoUrl: "/video/podcast_2.mp4",
  },
  {
    title: "The New Approach to Personal Branding",
    imageUrl: "/images/podcast.jpg",
    videoUrl: "/video/podcast_1.mp4",
  },
  {
    title: "The New Approach to Personal Branding",
    imageUrl: "/images/podcast.png",
    videoUrl: "/video/podcast_2.mp4",
  },
  {
    title: "Learning English With Podcast",
    imageUrl: "/images/podcast.jpg",
    videoUrl: "/video/podcast_1.mp4",
  },
  {
    title: "The New Approach to Personal Branding",
    imageUrl: "/images/podcast.jpg",
    videoUrl: "/video/podcast_2.mp4",
  },
  {
    title: "The New Approach to Personal Branding",
    imageUrl: "/images/podcast.jpg",
    videoUrl: "/video/podcast_1.mp4",
  },
  {
    title: "Learning English With Podcast",
    imageUrl: "/images/podcast.png",
    videoUrl: "/video/podcast_2.mp4",
  },
  {
    title: "The New Approach to Personal Branding",
    imageUrl: "/images/podcast.jpg",
    videoUrl: "/video/podcast_1.mp4",
  },
];

const OurLatestVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold lg:text-4xl py-8">
          Our Latest Video
        </h1>
        {/* gallery card */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {podcasts.map((podcast, index) => (
            <PodcastCard
              key={index}
              setSelectedVideo={setSelectedVideo}
              video={podcast.videoUrl}
              title={podcast.title}
              imageUrl={podcast.imageUrl}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedVideo && (
          <div className="fixed pt-0 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="relative w-full max-w-4xl bg-white rounded-lg">
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
              >
                <span className="text-xl">&times;</span>
              </button>

              {/* Video player */}
              <div className="aspect-video">
                <video controls className="w-full h-full rounded-lg" autoPlay>
                  <source src={selectedVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurLatestVideo;
