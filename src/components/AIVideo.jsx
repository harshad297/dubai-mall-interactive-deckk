import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';

export function AIVideo() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  function togglePlay() {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  }

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  }

  return (
    <section className="aivideo-section">
      <div className="aivideo-badge">
        <Sparkles size={14} />
        <span>AI-Powered Experience</span>
      </div>

      <div className="aivideo-layout">
        <div className="aivideo-text">
          <p className="aivideo-eyebrow">NEXT-GEN MALL TECHNOLOGY</p>
          <h2 className="aivideo-title">
            Experience the Mall<br />
            <em>Like Never Before</em>
          </h2>
          <p className="aivideo-body">
           Step into a next-generation shopping destination where innovation meets lifestyle. From personalized fashion recommendations to real-time navigation and curated dining experiences, our smart mall platform transforms every visit into a seamless and immersive journey.   </p>
          <ul className="aivideo-features">
            <li>
              <span className="aivideo-dot" />
              Smart store recommendations based on your style
            </li>
            <li>
              <span className="aivideo-dot" />
              Real-time indoor navigation and live updates
            </li>
            <li>
              <span className="aivideo-dot" />
              AI-curated dining and entertainment experiences            </li>
            <li>
              <span className="aivideo-dot" />
              Personalized offers, events, and exclusive rewards
            </li>
          </ul>
          <a href="#" className="aivideo-cta">Explore AI Features</a>
        </div>

        <div className="aivideo-player-wrap">
          <div className="aivideo-player">
            <video
              ref={videoRef}
              className="aivideo-video"
              loop
              muted
              playsInline
              poster="https://images.pexels.com/photos/11395484/pexels-photo-11395484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
               src="mallAi.mp4"
            />
            <div className="aivideo-overlay-ui">
                <div className="aivideo-controls"> 
                <button className="aivideo-ctrl-btn" onClick={togglePlay} aria-label="Play/Pause">
                  {playing ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button className="aivideo-ctrl-btn" onClick={toggleMute} aria-label="Mute/Unmute">
                  {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>
            </div>
            {!playing && (
              <button className="aivideo-play-center" onClick={togglePlay} aria-label="Play">
                <Play size={36} className="aivideo-play-icon" />
              </button>
            )}
          </div>
          <div className="aivideo-glow" />
        </div>
      </div>
    </section>
  );
}
