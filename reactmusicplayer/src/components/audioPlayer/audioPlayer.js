import "./audioPlayer.css";
import ProgressCircle from "./progressCircle";
const AudioPlayer = ({ currentTrack }) => {
  return (
    <>
      <div className="player-body flex">
        <div className="player-left-body">
          <ProgressCircle
            precentage={75}
            isPlaying={true}
            image={currentTrack?.album?.images[0]?.url}
            size={300}
            color={"#C96850"}
          />
        </div>
        <div className="player-right-body">asfsf</div>
      </div>
    </>
  );
};
export default AudioPlayer;
