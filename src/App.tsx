import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import UserDetail from './routes/UserDetail';
import CreateUser from './routes/CreateUser';
import { ToastProvider } from './components/Toast';


export default function App() {
return (
<ToastProvider>
<div className="container">
<header className="appHeader">
<Link to="/" className="brand">User Manager</Link>
<nav className="nav">
<NavLink to="/" end className={({isActive})=> isActive? 'active' : ''}>Home</NavLink>
<NavLink to="/create" className={({isActive})=> isActive? 'active' : ''}>Create</NavLink>
</nav>
</header>


<main className="content">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/create" element={<CreateUser />} />
<Route path="/users/:id" element={<UserDetail />} />
<Route path="*" element={<h2>404 - Not Found</h2>} />
</Routes>
</main>


<footer className="footer">Built with React + TypeScript + React Router • JSONPlaceholder API</footer>
</div>
</ToastProvider>
);
}
