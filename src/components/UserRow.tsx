import { Link } from 'react-router-dom';
import type { User } from '@/types';


export default function UserRow({ user, onDelete }: { user: User; onDelete: (id: number) => void }) {
return (
<tr>
<td data-label="Name">
<Link className="link" to={`/users/${user.id}`}>{user.name}</Link>
</td>
<td data-label="Email">{user.email}</td>
<td data-label="Phone">{user.phone}</td>
<td className="rowActions">
<Link to={`/users/${user.id}`} className="btn small">Edit</Link>
<button className="btn danger small" onClick={() => user.id && onDelete(user.id)}>Delete</button>
</td>
</tr>
);
}
