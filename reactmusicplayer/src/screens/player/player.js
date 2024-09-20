import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard/songCard";
import Queue from "../../components/Queue/queue";

const Player = () => {
  const location = useLocation();

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTracks] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get(
          "https://api.spotify.com/v1/playlists/" +
            location.state.id +
            "/tracks"
        )
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTracks(res.data.items[0].track);
        });
    }
  }, [location.state]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body"></div>
      <div className="right-player-body">
        <SongCard album={currentTrack.album} />
        <Queue />
      </div>
    </div>
  );
};

export default Player;
