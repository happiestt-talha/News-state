import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Collapser">
                        <span className="navbar-toggler-icon"></span>
                    </button>Collapser
                    <div className="collapse navbar-collapse" id="Collapser">

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
