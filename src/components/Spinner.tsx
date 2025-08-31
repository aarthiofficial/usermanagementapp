export default function Spinner() {


return (
<form className="card form" onSubmit={handleSubmit}>
<div className="grid">
<label>
<span>Name</span>
<input
required
value={values.name}
onChange={(e) => setValues({ ...values, name: e.target.value })}
placeholder="Jane Doe"
/>
</label>
<label>
<span>Email</span>
<input
required
type="email"
value={values.email}
onChange={(e) => setValues({ ...values, email: e.target.value })}
placeholder="jane@example.com"
/>
</label>
<label>
<span>Phone</span>
<input
required
value={values.phone}
onChange={(e) => setValues({ ...values, phone: e.target.value })}
placeholder="(555) 555-5555"
/>
</label>
<label>
<span>Username</span>
<input
value={values.username ?? ''}
onChange={(e) => setValues({ ...values, username: e.target.value })}
placeholder="janed"
/>
</label>
<label>
<span>Website</span>
<input
value={values.website ?? ''}
onChange={(e) => setValues({ ...values, website: e.target.value })}
placeholder="example.com"
/>
</label>
</div>


<div className="actions">
<button className="btn" disabled={submitting}>
{submitting ? submittingText : 'Submit'}
</button>
</div>
</form>
);
}
