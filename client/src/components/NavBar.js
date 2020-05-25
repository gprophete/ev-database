import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>

                    <Link to="/Home">Home</Link>
                    <Link to="/Cars">Cars</Link>
                    <Link to="/Features">Features</Link>
                    <Link to="Benefits">Benefits</Link>

                </nav>
            </div>
        )
    }
}
