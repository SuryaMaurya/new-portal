import React, { Component } from 'react';
import Input from './Component/Input';
import './App.css';

class NavBar extends React.Component {
    render() {

        return (
            <>
                <div class="topnav">
                    <Input text="text" name="complaint_source" header="This is Complaint" /><br />
                </div>
            </>
        )

    }
}
export default NavBar;