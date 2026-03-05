import { activeSidebarItem, activeTabId, tabs } from "../state";
import { SessionsView } from "./views/SessionsView";
import { PullRequestsView } from "./views/PullRequestsView";
import { SpecView } from "./views/SpecView";
import { PagesView } from "./views/PagesView";
import { TasksView } from "./views/TasksView";
import { RoadmapView } from "./views/RoadmapView";
import { ExtensionsView } from "./views/ExtensionsView";
import { SearchView } from "./views/SearchView";
import { SettingsView } from "./views/SettingsView";

export function MainTabContent() {
  const currentTabId = activeTabId.value;
  const currentTab = tabs.value.find(t => t.id === currentTabId);

  // If we are looking at the Main Tab, render view based on sidebar selection
  if (currentTab?.type === "main") {
    switch (activeSidebarItem.value) {
      case "sessions":
        return <SessionsView />;
      case "prs":
        return <PullRequestsView />;
      case "spec":
        return <SpecView />;
      case "pages":
        return <PagesView />;
      case "search":
        return <SearchView />;
      case "tasks":
        return <TasksView />;
      case "roadmap":
        return <RoadmapView />;
      case "extensions":
        return <ExtensionsView />;
      case "settings":
        return <SettingsView />;
      default:
        return <div style={{ padding: '20px' }}>Select an item from the sidebar</div>;
    }
  }

  // If it's a specific tab (like a specific Session or PR)
  return (
    <div style={{ padding: '20px' }}>
      <h2>{currentTab?.title}</h2>
      <p>Content for {currentTab?.type} with ID {currentTab?.contentId}</p>
    </div>
  );
}
