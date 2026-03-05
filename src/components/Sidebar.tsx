import { activeSidebarItem, setActiveSidebarItem } from "../state";
import { SidebarItem } from "../types";
import styles from "./Sidebar.module.css";

const ICONS: Record<SidebarItem, string> = {
  sessions: "💬",
  prs: "🔄",
  search: "🔍",
  tasks: "✅",
  roadmap: "🗺️",
  spec: "📄",
  pages: "📑",
  extensions: "🧩",
  settings: "⚙️",
};

export function Sidebar() {
  const active = activeSidebarItem.value;

  const topItems: SidebarItem[] = ["sessions", "prs", "search", "tasks", "roadmap", "spec", "pages", "extensions"];
  const bottomItems: SidebarItem[] = ["settings"];

  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        {topItems.map(item => (
          <button
            key={item}
            className={`${styles.iconButton} ${active === item ? styles.active : ''}`}
            onClick={() => setActiveSidebarItem(item)}
            title={item.charAt(0).toUpperCase() + item.slice(1)}
          >
            {ICONS[item]}
          </button>
        ))}
      </div>
      <div className={styles.bottomSection}>
        {bottomItems.map(item => (
          <button
            key={item}
            className={`${styles.iconButton} ${active === item ? styles.active : ''}`}
            onClick={() => setActiveSidebarItem(item)}
            title={item.charAt(0).toUpperCase() + item.slice(1)}
          >
            {ICONS[item]}
          </button>
        ))}
      </div>
    </div>
  );
}
