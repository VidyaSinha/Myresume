import { Youtube } from 'lucide-react';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const videoList = [
  {
    id: 1,
    title: "Jetha Jasoos",
    url: "https://www.youtube.com/watch?v=ph1_JYL5YVQ"
  },

];

const YouTubeChannel = () => {
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  return (
    <section className="py-16 bg-ai-black border-t border-ai-red/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Eyes</span>
            <span className="text-ai-red">In</span>
            <span className="text-white">Eyes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dive into the depths of horror and gore through my creative lens. Experience a unique perspective on the darker side of storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-ai-red/20 shadow-2xl relative group">
            <div className="absolute inset-0 z-10" style={{
              backgroundImage: 'url("/eye-thumbnail.svg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3
            }}></div>
            <ReactPlayer
              url={currentVideo.url}
              width="100%"
              height="100%"
              className="relative z-20"
              controls
              playing={false}
              light={false}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ai-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-30"></div>
          </div>
          
          {/* <div className="video-list mt-4 w-full">
            <ul className="space-y-2">
              {videoList.map(video => (
                <li
                  key={video.id}
                  className={`cursor-pointer p-2 rounded ${video.id === currentVideo.id ? 'bg-ai-red/20' : 'hover:bg-ai-red/10'}`}
                  onClick={() => setCurrentVideo(video)}
                >
                  {video.title}
                </li>
              ))}
            </ul>
          </div> */}

          <div className="text-center md:text-left space-y-6">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <Youtube size={32} className="text-ai-red animate-pulse" />
              <h3 className="text-2xl font-bold text-white">@eyesineyes</h3>
            </div>
            
            <p className="text-gray-400">
              Welcome to my YouTube channel where I explore the fascinating world of horror and gore. Each video is crafted to deliver a unique and immersive experience that pushes the boundaries of conventional storytelling.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.youtube.com/@eyesineyes6673"
                target="_blank"
                rel="noopener noreferrer"
                className="ai-button group flex items-center space-x-2"
              >
                <Youtube className="w-5 h-5" />
                <span>Visit Channel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeChannel;