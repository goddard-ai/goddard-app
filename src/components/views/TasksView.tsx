export function TasksView() {
  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      {/* Internal Sidebar for filtering */}
      <div style={{ width: '200px', borderRight: '1px solid var(--surface-border)', padding: '10px' }}>
        <h3>Tasks</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
          <li><label><input type="checkbox" checked /> JulesUp Integration</label></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <h2>Task Management</h2>
        <p>Dedicated view for task management, specifically integrating "JulesUp" functionality.</p>

        <div style={{ border: '1px solid var(--surface-border)', padding: '15px', borderRadius: '4px', marginTop: '20px', backgroundColor: 'var(--surface-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <strong>Task: Implement Backend API</strong>
            <span style={{ color: 'var(--success-color)' }}>Assigned to Jules</span>
          </div>
          <p>Create the new /v1/sessions endpoint.</p>
          <div style={{ marginTop: '15px' }}>
            <button className="primary">Delegate to Jules</button>
            <button style={{ marginLeft: '10px' }}>Open in JulesUp</button>
          </div>
        </div>
      </div>
    </div>
  );
}
