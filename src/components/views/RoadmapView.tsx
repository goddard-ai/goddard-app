export function RoadmapView() {
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      {/* Internal Sidebar for filtering */}
      <div style={{ width: '200px', borderRight: '1px solid var(--surface-border)', padding: '10px' }}>
        <h3>Filters</h3>
        <h4 style={{ marginTop: '20px' }}>Repositories</h4>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
          <li><label><input type="checkbox" checked /> goddard-ai/sdk</label></li>
          <li><label><input type="checkbox" /> goddard-ai/core</label></li>
        </ul>
        <h4 style={{ marginTop: '20px' }}>Priority</h4>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
          <li><label><input type="checkbox" checked /> High</label></li>
          <li><label><input type="checkbox" /> Medium</label></li>
          <li><label><input type="checkbox" /> Low</label></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <h2>Roadmap & Proposals</h2>
        <p>View all current proposals and the broader project roadmap.</p>

        <div style={{ border: '1px solid var(--surface-border)', padding: '15px', borderRadius: '4px', marginTop: '20px', backgroundColor: 'var(--surface-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <strong>Proposal: V2 Architecture</strong>
            <span style={{ color: 'var(--danger-color)' }}>High Priority</span>
          </div>
          <p>Overhaul the core architecture to support real-time streaming.</p>
          <div style={{ marginTop: '15px' }}>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
