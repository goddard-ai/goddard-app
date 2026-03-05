import { useEffect } from "preact/hooks";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { register } from "@tauri-apps/plugin-global-shortcut";
import { Sidebar } from "./components/Sidebar";
import { TabBar } from "./components/TabBar";
import { MainTabContent } from "./components/MainTabContent";

function App() {
  useEffect(() => {
    const initWindowListeners = async () => {
      try {
        const appWindow = getCurrentWindow();
        await appWindow.listen("tauri://blur", () => appWindow.hide());
        await register("CommandOrControl+Shift+J", async () => {
          await appWindow.show();
          await appWindow.setFocus();
        });
      } catch (e) {
        console.error("Failed to initialize window listeners:", e);
      }
    };
    initWindowListeners();
  }, []);

  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-area">
        <TabBar />
        <div className="content-area">
          <MainTabContent />
        </div>
      </div>
    </div>
  );
}

export default App;
