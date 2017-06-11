import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './layout/Menu';
import { Header } from './layout/Header';


export const Error404 = () =>  (
    <div className="wrap">

        <Menu />

        <div className="container">

            <Header />

            <div className="content">
                <h1>404: page not found</h1>

                <p>We are sorry but the page you are looking for does not exist.</p>

                <p>
                    <Link to="/" title="Home page of Ilana Boeira">Go back to the home page &rarr;</Link>
                </p>
            </div>
        </div>
    </div>
)
