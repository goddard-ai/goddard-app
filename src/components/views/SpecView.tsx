import { useState } from "preact/hooks";

export function SpecView() {
  const [repoSelected, setRepoSelected] = useState<string | null>(null);

  if (!repoSelected) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column' }}>
        <h2>Select a Repository for Spec</h2>
        <input
          type="text"
          placeholder="Search repos (e.g., goddard-ai/core)"
          style={{ width: '400px', padding: '10px', marginTop: '20px', backgroundColor: 'var(--surface-color)', border: '1px solid var(--accent-color)', color: 'white' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setRepoSelected((e.target as HTMLInputElement).value);
          }}
        />
        <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0, textAlign: 'center' }}>
          <li style={{ cursor: 'pointer', padding: '10px', color: 'var(--accent-color)' }} onClick={() => setRepoSelected('goddard-ai/core')}>goddard-ai/core</li>
          <li style={{ cursor: 'pointer', padding: '10px', color: 'var(--accent-color)' }} onClick={() => setRepoSelected('goddard-ai/sdk')}>goddard-ai/sdk</li>
        </ul>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      {/* Internal Sidebar */}
      <div style={{ width: '250px', borderRight: '1px solid var(--surface-border)', padding: '10px' }}>
        <h3>{repoSelected} Specs</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
          <li style={{ padding: '8px', cursor: 'pointer', backgroundColor: 'var(--surface-color)' }}>architecture.md</li>
          <li style={{ padding: '8px', cursor: 'pointer' }}>api-routes.md</li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <h2>architecture.md</h2>
          <pre style={{ backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '4px', overflowX: 'auto' }}>
            {`# Architecture Spec
This document outlines the core architecture of Goddard...`}
          </pre>
        </div>

        {/* Edit Chat Bar */}
        <div style={{ borderTop: '1px solid var(--surface-border)', padding: '15px', backgroundColor: 'var(--bg-color)' }}>
          <input
            type="text"
            placeholder="Edit the spec... (AI will modify all files into account)"
            style={{ width: '100%', padding: '10px', backgroundColor: 'var(--surface-color)', border: '1px solid var(--surface-border)', color: 'white' }}
          />
        </div>
      </div>
    </div>
  );
}
