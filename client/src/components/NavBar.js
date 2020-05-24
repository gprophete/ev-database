import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './style.css'

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/Home">Home</Link>
                <Link to="/Cars">Cars</Link>
                <Link to="/Features">Features</Link>
                <Link to="Benefits">Benefits</Link>
            </nav>
        )
    }
}
