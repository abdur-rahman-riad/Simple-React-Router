import React from 'react';
import "./User.css";

const User = (props) => {
    const { name, email, phone, website } = props.user;
    return (
        <div className="single-user">
            <h2>{name}</h2>
            <h3>Phone: {phone}</h3>
            <h3>Email: {email}</h3>
            <h3>Website: {website}</h3>
        </div>
    );
};

export default User;