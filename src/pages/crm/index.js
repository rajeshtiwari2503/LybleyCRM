import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

const CRM = () => {
    return (
        <div>
            <div id="wrapper">
                <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <h2>Logo</h2>
                    </div>
                    <ul className="sidebar-nav">
                        <li className="active">
                            <a href="#">
                                <i className="fa fa-home" />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-plug" />
                                Plugins
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-user" />
                                Users
                            </a>
                        </li>
                    </ul>
                </aside>
                <div id="navbar-wrapper">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a href="#" className="navbar-brand" id="sidebar-toggle">
                                    <i className="fa fa-bars" />ehhgehg
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <section id="content-wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="content-title">Test</h2>
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default CRM