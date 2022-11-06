import React from 'react';
import { useState } from 'react';

const Home = () => {

    const [user, setUser] = useState({ name: '', email: '' })

    const handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('your data collection added')
                    event.target.reset()
                }

            })
    }

    const handleBlur = event => {
        const form = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[form] = value;
        setUser(newUser)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} type="text" name='name' placeholder='enter your name' /> <br />
                    <input onBlur={handleBlur} type="text" name='address' placeholder='enter your address' /> <br />
                    <input onBlur={handleBlur} type="email" name="email" id="" placeholder='enter your email' /> <br />
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
};

export default Home;