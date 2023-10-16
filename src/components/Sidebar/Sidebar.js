import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__recent_posts}>
        <h5 className={styles.sidebar__title}>Recent Post</h5>
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </div>
      <h5 className={styles.sidebar__title}>Recent Events</h5>
      <div className={styles.sidebar__recent_events}>
        <SidebarItem />
        <SidebarItem />
      </div>
    </aside>
  );
};

export default Sidebar;
