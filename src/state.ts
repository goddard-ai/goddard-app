import { signal } from "@preact/signals";
import { SidebarItem, Tab, Session, PullRequest } from "./types";

export const activeSidebarItem = signal<SidebarItem>("sessions");

export const tabs = signal<Tab[]>([
  { id: "main", type: "main", title: "Sessions", canClose: false },
]);

export const activeTabId = signal<string>("main");

// Dummy data for now
export const sessions = signal<Session[]>([]);
export const pullRequests = signal<PullRequest[]>([]);

export function setActiveSidebarItem(item: SidebarItem) {
  activeSidebarItem.value = item;

  // Also update the main tab title to reflect the sidebar item
  const newTitle = item.charAt(0).toUpperCase() + item.slice(1);
  const updatedTabs = tabs.value.map(tab =>
    tab.id === "main" ? { ...tab, title: newTitle } : tab
  );
  tabs.value = updatedTabs;
  activeTabId.value = "main";
}

export function openTab(tab: Tab) {
  if (tabs.value.length >= 20) {
    console.warn("Maximum number of tabs reached (20).");
    return;
  }

  const existingTab = tabs.value.find(t => t.id === tab.id);
  if (existingTab) {
    activeTabId.value = existingTab.id;
  } else {
    tabs.value = [...tabs.value, tab];
    activeTabId.value = tab.id;
  }
}

export function closeTab(tabId: string) {
  if (tabId === "main") return; // Main tab cannot be closed

  const currentTabs = tabs.value;
  const index = currentTabs.findIndex(t => t.id === tabId);
  if (index === -1) return;

  const newTabs = currentTabs.filter(t => t.id !== tabId);
  tabs.value = newTabs;

  // If the active tab was closed, switch to the one before it, or main tab
  if (activeTabId.value === tabId) {
    activeTabId.value = newTabs[Math.max(0, index - 1)].id;
  }
}

export function setActiveTab(tabId: string) {
  activeTabId.value = tabId;
}
