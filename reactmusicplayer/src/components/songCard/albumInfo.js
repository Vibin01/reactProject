import React from "react";
import "./albumInfo.css";
const AlbumInfo = ({ album }) => {
  console.log(album);

  const artists = [];
  console.log();
  album?.artists.forEach((element) => {
    artists.push(element?.name);
  });
  return (
    <div className="albumInfo-card">
      <div className="albumName-container ">
        <div className="marquee">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>{" "}
        <div className="album-info">
          <p>{`${album?.name} is a ${album?.alubm_type} by ${artists?.join(
            ", "
          )} with ${album?.total_tracks} tracks`}</p>
        </div>
        <div className="album-release">
          <p>Release Date: {album?.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
