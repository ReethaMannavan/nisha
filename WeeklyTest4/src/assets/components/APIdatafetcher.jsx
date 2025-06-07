import { useState, useEffect } from 'react';


function APIFetcher() {
  const [query, setQuery] = useState('reethamannavan');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://api.github.com/search/users?q=${query}`);
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        const data = await res.json();
        setUsers(data.items || []);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchUsers, 500); 
    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="api-container">
      <h2>4. APIData Fetch </h2>
      <h3>Github User Search</h3>
      <input
        className="api-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users..."
      />

      {loading && <p>Loading...</p>}
      {error && <p className="api-error">Error: {error}</p>}

      <ul className="api-list">
        {users.map((user) => (
          <li key={user.id} className="api-card">
            <img src={user.avatar_url} alt={user.login} className="api-avatar" />
            <a href={user.html_url} target="_blank" rel="noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default APIFetcher;
