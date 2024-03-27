import React from 'react'

const Navbar = () => {
  const navItem=['general','business','entertainment','health','science','sports','technology']

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News state</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapser">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapser">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
          navItem.map((e)=>{
           return <li className='nav-item' key={e}>
                    <a className='text-capitalize nav-link' href={`/${e}`}>{e}</a>
                  </li>
          })
        }
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
