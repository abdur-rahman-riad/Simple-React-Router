import React from 'react';
import { Link } from 'react-router-dom';
import "./User.css";

const User = (props) => {
    const { id, name, email, phone, website } = props.user;
    return (
        <div className="single-user">
            <h2>{name} {id}</h2>
            <h3>Phone: {phone}</h3>
            <h3>Email: {email}</h3>
            <h3>Website: {website}</h3>
            <Link className="view-btn" to={`/user/${id}`}>View More</Link>
        </div>
    );
};

export default User;