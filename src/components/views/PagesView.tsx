import { useState } from "preact/hooks";

export function PagesView() {
  const [repoSelected, setRepoSelected] = useState<string | null>(null);

  if (!repoSelected) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column' }}>
        <h2>Select a Repository for Pages</h2>
        <input
          type="text"
          placeholder="Search repos (e.g., goddard-ai/docs)"
          style={{ width: '400px', padding: '10px', marginTop: '20px', backgroundColor: 'var(--surface-color)', border: '1px solid var(--accent-color)', color: 'white' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setRepoSelected((e.target as HTMLInputElement).value);
          }}
        />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      {/* Internal Sidebar */}
      <div style={{ width: '250px', borderRight: '1px solid var(--surface-border)', padding: '10px' }}>
        <h3>{repoSelected} Pages</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
          <li style={{ padding: '8px', cursor: 'pointer', backgroundColor: 'var(--surface-color)' }}>index.md</li>
          <li style={{ padding: '8px', cursor: 'pointer' }}>getting-started.md</li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <h2>Pages</h2>
        <p>Foxtrot design pattern references for rendering.</p>
      </div>
    </div>
  );
}
