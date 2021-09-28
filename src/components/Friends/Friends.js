import React, { useEffect, useState } from 'react';
import User from '../User/User';
import "./Friends.css";

const Friends = () => {
    // Use State
    const [users, setUsers] = useState([]);

    // Load Data
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div className="user-container">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Friends;