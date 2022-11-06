import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../componet/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Main;