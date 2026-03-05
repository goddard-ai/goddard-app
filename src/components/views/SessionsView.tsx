export function SessionsView() {
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      {/* Internal Sidebar for filtering */}
      <div style={{ width: '200px', borderRight: '1px solid var(--surface-border)', padding: '10px' }}>
        <h3>Filters</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
          <li><label><input type="checkbox" checked /> Active</label></li>
          <li><label><input type="checkbox" checked /> Blocked</label></li>
          <li><label><input type="checkbox" checked /> Done</label></li>
        </ul>
        <h4 style={{ marginTop: '20px' }}>Repositories</h4>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
          <li><label><input type="checkbox" checked /> goddard-ai/sdk</label></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <h2>Active Sessions</h2>
          <p>List of sessions will appear here in cells.</p>
          {/* Example cell structure */}
          <div style={{ border: '1px solid var(--surface-border)', padding: '15px', borderRadius: '4px', marginBottom: '10px', backgroundColor: 'var(--surface-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <strong>Status: <span style={{ color: 'var(--success-color)' }}>Active</span></strong>
              <span>Repo: goddard-ai/sdk</span>
            </div>
            <p><strong>PR:</strong> Add new endpoint to API</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '10px' }}>Latest: "I have updated the router..."</p>
            <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
              <button>Open PR</button>
              <button>Open Changes</button>
              <button className="primary">View Session</button>
            </div>
          </div>
        </div>

        {/* Chat Bar */}
        <div style={{ borderTop: '1px solid var(--surface-border)', padding: '15px', backgroundColor: 'var(--bg-color)' }}>
          <input
            type="text"
            placeholder="Start a new session... (Type to select repo)"
            style={{ width: '100%', padding: '10px', backgroundColor: 'var(--surface-color)', border: '1px solid var(--surface-border)', color: 'white' }}
          />
        </div>
      </div>
    </div>
  );
}
