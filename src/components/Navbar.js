import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        const { isAuthenticated, login, logout } = this.props.auth;
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />

                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            product
                        </Link>
                    </li>
<<<<<<< HEAD
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            login
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            logout
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/register" className="nav-link">
                            register
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            about us
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            contact us
                        </Link>
=======
                    {/* <li className="nav-item ml-5">
                        <Link to="/login" className="nav-link" onClick={this.props.auth.login}>
                            login
                        </Link>
                    </li> */}

                    {/* <li className="nav-item ml-5">
                        <Link to="/login" className="nav-link" >
                            login
                        </Link>
                    </li> */}
                    <li className="nav-item ml-5">
                        <button onClick={isAuthenticated() ? logout : login}>
                            {isAuthenticated() ? 'Log Out' : 'Log In'}
                        </button>
>>>>>>> 2980309aa5359d8af3da7ac4e51888a335f7d670
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>

                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`
