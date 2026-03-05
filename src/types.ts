export type SidebarItem =
  | "sessions"
  | "prs"
  | "search"
  | "tasks"
  | "roadmap"
  | "spec"
  | "pages"
  | "extensions"
  | "settings";

export type TabType = "main" | "session" | "pr" | "changes" | "specFile" | "page";

export interface Tab {
  id: string;
  type: TabType;
  title: string;
  contentId?: string; // e.g., sessionId, prId
  canClose: boolean;
}

export type SessionStatus = "Active" | "Blocked" | "Done";

export interface Session {
  id: string;
  status: SessionStatus;
  repository: string;
  prName?: string;
  lastActivity: string;
  messages: SessionMessage[];
}

export interface SessionMessage {
  id: string;
  sender: "user" | "agent";
  content: string;
  timestamp: string;
}

export interface PullRequest {
  id: string;
  status: "Open" | "Closed";
  repository: string;
  title: string;
  url: string;
}
