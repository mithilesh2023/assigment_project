import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg border rounded mt-2">
                <div className="container-fluid justify-content-between d-flex">
                    <div>
                        <form className="d-flex" role="search">
                        <span> <i className="bi bi-search"></i></span>
                            <input className="form-control p-2 me-2" type="search" placeholder="Search..." aria-label="Search" />
                        </form>
                    </div>
                    <div className="">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header