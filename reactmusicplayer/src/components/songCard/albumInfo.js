import React from "react";
import "./albumInfo.css";
const AlbumInfo = ({ album }) => {
  console.log(album);

  const artists = [];
  album.artists.forEach((element) => {
    artists.push(element.name);
  });
  return (
    <div className="albumName-container flex">
      <p>{album.name + "-" + artists?.join(", ")}</p>

      <div className="album-info">
        <p></p>
      </div>
      <div className="album-release">
        <p></p>
      </div>
    </div>
  );
};

export default AlbumInfo;
