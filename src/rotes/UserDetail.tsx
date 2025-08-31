import { useEffect, useState } from 'react';
import { fetchUser, updateUser } from '@/api/users';
import type { User } from '@/types';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '@/components/Spinner';
import UserForm from '@/components/UserForm';
import { useToast } from '@/components/Toast';


export default function UserDetail() {
const { id } = useParams();
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const { notify } = useToast();
const navigate = useNavigate();


useEffect(() => {
if (!id) return;
const ctrl = new AbortController();
(async () => {
try {
setLoading(true);
const data = await fetchUser(id, ctrl.signal);
setUser(data);
} catch (err: any) {
setError(err?.message || 'Failed to load user');
} finally {
setLoading(false);
}
})();
return () => ctrl.abort();
}, [id]);


async function handleUpdate(values: User) {
if (!id) return;
const updated = await updateUser(Number(id), values);
setUser(updated);
notify('User updated (simulated)', 'success');
navigate('/');
}


if (loading) return <div className="card center"><Spinner /></div>;
if (error) return <div className="card errorCard">⚠️ {error}</div>;
if (!user) return <div className="card">User not found</div>;


return (
<section>
<h1>Edit User</h1>
<UserForm initial={user} onSubmit={handleUpdate} submittingText="Updating…" />
</section>
);
}
