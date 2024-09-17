import "./sidebar.css";
import SidebarButton from "./sidebarButton";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400"
          className="profile-img"
          alt="profile"
        />
        <div>
          <SidebarButton title="" to="" icon={} />
          <SidebarButton />
          <SidebarButton />
          <SidebarButton />
          <SidebarButton />
        </div>
        <SidebarButton />
      </div>
    </>
  );
}
