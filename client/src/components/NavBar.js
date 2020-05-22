import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/Cars">Cars</Link>
                <Link to="/Home">Home</Link>
            </nav>
        )
    }
}
