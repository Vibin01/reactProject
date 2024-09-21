import React from "react";
import "./albumImage.css";

const AlbumImage = ({ url }) => {
  return (
    <div className="albumImage flex">
      <img src={url} className="albumImage-art" alt="Album-art" />
      <div className="albumImage-shadow">
        <img src={url} alt="Shadow" className="albumImage-shadow" />
      </div>
    </div>
  );
};

export default AlbumImage;
