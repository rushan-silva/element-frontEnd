import React, { Component } from 'react';
import './TopNav.css';

class TopNav extends Component {
    render() { 
        return ( 
            <div>
                <ul>
                    <li className="items dropdown">
                    <a href="javascript:void(0)" className="dropbtn">Dropdown</a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    </li>
                    <li className="items"><a href="#news">News</a></li>
                    <li className="items"><a href="#home">Home</a></li>
                    <div>
                        <span className="title">Element</span>
                    </div>
                </ul>
            </div>
        );  
    }
}
 
export default TopNav;