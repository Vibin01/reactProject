import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdSpaceDashboard } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import apiClient from "../../spotify";
export default function Sidebar() {
  const [image, setImage] = useState(
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400"
  );

  useEffect(() => {
    apiClient.get("me").then((responce) => setImage(responce.data.images[0]));
  }, []);
  return (
    <>
      <div className="sidebar-container">
        <img src={image} className="profile-img" alt="profile" />
        <div>
          <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
          <SidebarButton
            title="Trending"
            to="/trending"
            icon={<FaGripfire />}
          />
          <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
          <SidebarButton
            title="Favorites"
            to="/favorites"
            icon={<MdFavorite />}
          />
          <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        </div>
        <SidebarButton title="Sign Out" icon={<FaSignOutAlt />} />
      </div>
    </>
  );
}
