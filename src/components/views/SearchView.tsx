export function SearchView() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Global Search (sessions, PRs, tasks, specs, etc.)"
          style={{ width: '100%', padding: '15px', fontSize: '1.2em', backgroundColor: 'var(--surface-color)', border: '1px solid var(--accent-color)', color: 'white', borderRadius: '8px' }}
        />
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <h2>Search Results</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>Start typing to search across all Goddard domains.</p>

        {/* Placeholder for results */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
          <div style={{ flex: 1, border: '1px solid var(--surface-border)', padding: '15px', borderRadius: '4px', backgroundColor: 'var(--surface-color)' }}>
            <h3>Sessions</h3>
            <p style={{ color: 'var(--text-secondary)' }}>No results found.</p>
          </div>
          <div style={{ flex: 1, border: '1px solid var(--surface-border)', padding: '15px', borderRadius: '4px', backgroundColor: 'var(--surface-color)' }}>
            <h3>Pull Requests</h3>
            <p style={{ color: 'var(--text-secondary)' }}>No results found.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
