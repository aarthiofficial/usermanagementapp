export type User = {
email: string;
phone: string;
username?: string;
website?: string;
};


export type ApiError = {
message: string;
};


// File: src/api/users.ts
import type { User } from '@/types';


const BASE_URL = 'https://jsonplaceholder.typicode.com';


async function handle<T>(res: Response): Promise<T> {
if (!res.ok) {
const text = await res.text();
throw new Error(text || `Request failed with ${res.status}`);
}
return res.json();
}


export async function fetchUsers(signal?: AbortSignal): Promise<User[]> {
const res = await fetch(`${BASE_URL}/users`, { signal });
return handle<User[]>(res);
}


export async function fetchUser(id: string, signal?: AbortSignal): Promise<User> {
const res = await fetch(`${BASE_URL}/users/${id}`, { signal });
return handle<User>(res);
}


export async function createUser(user: User): Promise<User> {
const res = await fetch(`${BASE_URL}/users`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(user),
});
return handle<User>(res);
}


export async function updateUser(id: number, user: User): Promise<User> {
const res = await fetch(`${BASE_URL}/users/${id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(user),
});
return handle<User>(res);
}


export async function deleteUser(id: number): Promise<{}> {
const res = await fetch(`${BASE_URL}/users/${id}`, {
method: 'DELETE',
});
if (!res.ok) throw new Error(`Delete failed with ${res.status}`);
return {};
}
