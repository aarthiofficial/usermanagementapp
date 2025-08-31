import { useEffect, useMemo, useState } from 'react';
} finally {
setLoading(false);
}
}
load();
return () => ctrl.abort();
}, []);


async function handleDelete(id: number) {
const prev = users;
setUsers(users.filter(u => u.id !== id)); // optimistic UI
try {
await deleteUser(id);
notify('User deleted (simulated)', 'success');
} catch (err: any) {
setUsers(prev);
notify(err?.message || 'Delete failed', 'error');
}
}


const content = useMemo(() => {
if (loading) return <div className="card center"><Spinner /></div>;
if (error) return (
<div className="card errorCard">
<p>⚠️ {error}</p>
<button className="btn" onClick={() => location.reload()}>Retry</button>
</div>
);
if (!users.length) return <div className="card">No users found.</div>;


return (
<div className="tableWrap card">
<table className="table">
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{users.map(u => (
<UserRow key={u.id} user={u} onDelete={handleDelete} />
))}
</tbody>
</table>
</div>
);
}, [loading, error, users]);


return (
<section>
<div className="sectionHeader">
<h1>Users</h1>
<Link to="/create" className="btn">+ Create User</Link>
</div>
{content}
</section>
);
}
