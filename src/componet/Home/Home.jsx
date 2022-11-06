import React from 'react';
import { useState } from 'react';

const Home = () => {

    const [user, setUser] = useState({ name: '', email: '' })

    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleBlur = event => {
        const form = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[form] = value;
        setUser(newUser)
        console.log(newUser);
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