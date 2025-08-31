import UserForm from '@/components/UserForm';
import { createUser } from '@/api/users';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/Toast';


export default function CreateUser() {
const navigate = useNavigate();
const { notify } = useToast();


async function handleCreate(values: any) {
const created = await createUser(values);
notify(`User created (simulated) with id ${created.id ?? 'N/A'}`, 'success');
navigate('/');
}


return (
<section>
<h1>Create User</h1>
<UserForm onSubmit={handleCreate} submittingText="Creating…" />
</section>
);
}
