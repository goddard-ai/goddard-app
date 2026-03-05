import { tabs, activeTabId, setActiveTab, closeTab } from "../state";
import styles from "./TabBar.module.css";

export function TabBar() {
  return (
    <div className={styles.tabBar}>
      {tabs.value.map(tab => {
        const isActive = tab.id === activeTabId.value;
        return (
          <div
            key={tab.id}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
            title={tab.title}
          >
            <span className={styles.tabTitle}>{tab.title}</span>
            {tab.canClose && (
              <button
                className={styles.closeButton}
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.id);
                }}
                title="Close"
              >
                ×
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
