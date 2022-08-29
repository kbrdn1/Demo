import React from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

const LogOut = () => {
    cookies.remove('userConnect');
    window.location = "/";
};

export default LogOut;