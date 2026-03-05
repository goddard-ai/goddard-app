export function ExtensionsView() {
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      {/* Internal Sidebar for filtering */}
      <div style={{ width: '250px', borderRight: '1px solid var(--surface-border)', padding: '10px' }}>
        <h3>Extensions</h3>
        <input
          type="text"
          placeholder="Search extensions..."
          style={{ width: '100%', padding: '10px', marginTop: '10px', backgroundColor: 'var(--surface-color)', border: '1px solid var(--surface-border)', color: 'white' }}
        />
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          <li style={{ padding: '8px', cursor: 'pointer', backgroundColor: 'var(--surface-color)' }}>Installed</li>
          <li style={{ padding: '8px', cursor: 'pointer' }}>Community (Pi)</li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <h2>Goddard Extensions</h2>
        <p>A dedicated side bar specifically for searching and managing Goddard extensions.</p>

        <div style={{ border: '1px solid var(--surface-border)', padding: '15px', borderRadius: '4px', marginTop: '20px', backgroundColor: 'var(--surface-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <strong>Jules GitHub Copilot Bridge</strong>
            <span style={{ color: 'var(--text-secondary)' }}>v1.2.0</span>
          </div>
          <p>Integrate Jules with your local IDE directly.</p>
          <div style={{ marginTop: '15px' }}>
            <button className="primary">Update</button>
            <button style={{ marginLeft: '10px', backgroundColor: 'var(--danger-color)' }}>Uninstall</button>
          </div>
        </div>
      </div>
    </div>
  );
}
