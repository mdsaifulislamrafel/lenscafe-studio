import { Play } from "lucide-react";

const PodcastCard = ({ title, imageUrl, video, setSelectedVideo }) => {
  return (
    <div
      onClick={() => setSelectedVideo(video)}
      className="group cursor-pointer bg-white shadow-xl p-6 rounded-2xl"
    >
      <div className="relative h-[240px] overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full absolute top-0 left-0 transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="rounded-full bg-white/90 p-3">
            <Play className="h-6 w-6 fill-black" />
          </div>
        </div>
      </div>
      <h3 className="mt-3 text-sm font-bold">{title}</h3>
    </div>
  );
};

export default PodcastCard;
