import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users)

    const handleDelete = user => {
        const agree = window.confirm(`Are you sure you want to delete ${user._id}`)
        if (agree) {
            // console.log(user._id);
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('your deleted successfully')
                        const remainingUser = displayUsers.filter(usr => usr._id !== user._id)
                        setDisplayUsers(remainingUser)
                    }
                })
        }
    }
    return (
        <div>
            <h1>Users {displayUsers.length}</h1>
            <div>
                {
                    displayUsers.map(user => <p key={user._id}>{user.name} {user.email} <button onClick={() => handleDelete(user)}>X</button> </p>)
                }
            </div>
        </div>
    );
};

export default Users;