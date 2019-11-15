import React from 'react';
import { useSelector } from 'react-redux'
import Label from './Label';
const Header = () => {
    const counter = useSelector(state => state.counter)
    return (
        <Label count={counter} />
    )
}

export default Header;