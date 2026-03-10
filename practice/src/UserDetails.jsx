import React from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
    const {name} = useParams();
    const {email} =useParams();

    return (
        <div style={{ padding: '20px' }}>
            <h1>User Details Page</h1>
            <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
                <p>User Name:{name}</p>
                <p>User email: {email}</p>
            </div>
            <br />
            <Link to="/users">← Back to User List</Link>
        </div>
    );
}

export default UserDetails;