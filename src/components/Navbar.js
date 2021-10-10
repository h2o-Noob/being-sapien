import React from 'react'
import "./navbar.css"

function Navbar() {
    return (
        <div >
           <nav className="nav">
               <div className="nav__left">
                <div className="logo">
                    <img className="logo__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADBdv1qYl0TaZFmDEmwN07wAkg8LTS3JzVqPVx2_aG-xbm5o7lQxGAsavhw-WKReE9As&usqp=CAU" alt="" />
                    <h2 style={{color:"white"}}>Being Sapien</h2>
                </div>
                <div className="nav__items">
                    <div className="nav__list">
                        <li className="nav__list__items"><a href="/">home</a></li>
                        <li className="nav__list__items"><a href="/">treat a needy</a></li>
                        <li className="nav__list__items"><a href="/">about us</a></li>
                        <li className="nav__list__items"><a href="/">contact author</a></li>
                    </div>
                </div>
               </div>
                <div className="nav__right">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder='Type your query here...' aria-label="Search"/>
                    <button class="btn text-dark bg-light btn-outline-light" type="submit">Search</button>
                </form>
                </div>
            </nav>
            <div className="nav__responsive">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="p-4" style={{backgroundColor:'rgb(4, 204, 4)', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <span class="responsive__text" style={{color:'white'}}>Being Sapien</span>
                        <img className='responsive__logo'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADBdv1qYl0TaZFmDEmwN07wAkg8LTS3JzVqPVx2_aG-xbm5o7lQxGAsavhw-WKReE9As&usqp=CAU" alt="" />
                        <div className="responsive__nav__list">
                            <li className="responsive__nav__list__items"><a href="/">home</a></li>
                            <li className="responsive__nav__list__items"><a href="/">treat a needy</a></li>
                            <li className="responsive__nav__list__items"><a href="/">about us</a></li>
                            <li className="responsive__nav__list__items"><a href="/">contact author</a></li>
                        </div>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder='Type your query here...' aria-label="Search"/>
                            <button class="btn text-dark bg-light btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <nav class="navbar navbar-light bg-success">
                    <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span className="container text-light">Menu</span>
                    </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
