import { useEffect, useRef, useState } from "react";
import CompoundImage from "./CompoundImage";
import Icon from "./Icon";
const DEFAULT_VIDEO = `${import.meta.env.BASE_URL}media/default-organic-compound.webm`;
interface Props {
  src: string | null;
  name: string;
}
export default function CompoundVideo({ src, name }: Props) {
  const player = useRef<HTMLVideoElement>(null);
  const [fallback, setFallback] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [playing, setPlaying] = useState(true);
  const source = !src || fallback ? DEFAULT_VIDEO : src;
  useEffect(() => {
    let active = true;
    const video = player.current;
    video?.play().catch(() => {
      if (active) setPlaying(false);
    });
    return () => {
      active = false;
      video?.pause();
    };
  }, [source]);
  async function toggle() {
    const video = player.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
      } catch {
        setPlaying(false);
      }
    } else video.pause();
  }
  if (unavailable)
    return (
      <div className="video-unavailable">
        <CompoundImage src={null} name={name} />
        <p>Видео недоступно</p>
      </div>
    );
  return (
    <>
      <video
        key={source}
        className="feed-video"
        ref={player}
        src={source}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`Видео ${name}`}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          if (source === DEFAULT_VIDEO) setUnavailable(true);
          else setFallback(true);
        }}
      />
      <button
        type="button"
        className="video-toggle"
        aria-label={playing ? "Приостановить видео" : "Воспроизвести видео"}
        onClick={toggle}
      >
        <Icon name={playing ? "pause" : "play"} />
      </button>
    </>
  );
}
