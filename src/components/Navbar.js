import React from 'react'
import { Link } from 'react-router-dom'
import Content1 from './Content'
import "./navbar.css"

function Navbar() {

    const gotoAboutus = () => window.scrollTo(0, 700)

    const gotoMain = () => window.scrollTo(0, 2000)

    return (
        <div className="fixed-top" >
           <nav className="nav">
               <div className="nav__left">
                <div className="logo">
                    <img className="logo__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADBdv1qYl0TaZFmDEmwN07wAkg8LTS3JzVqPVx2_aG-xbm5o7lQxGAsavhw-WKReE9As&usqp=CAU" alt="" />
                    <h2 style={{color:"white"}}>Being Sapien</h2>
                </div>
                <div className="nav__items">
                    <div className="nav__list">
                        <li className="nav__list__items"><a href="/">home</a></li>
                        <li className="nav__list__items"><a onClick={gotoMain} href="##">treat a needy</a></li>
                        <li className="nav__list__items"><a onClick={gotoAboutus} href="#">about us</a></li>
                        <li className="nav__list__items"><a href="/">contact author</a></li>
                    </div>
                </div>
               </div>
                <div className="nav__right">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder='Type your query here...' aria-label="Search"/>
                    <button className="btn text-dark bg-light btn-outline-light" type="submit">Search</button>
                </form>
                </div>
            </nav>
            <div className="nav__responsive">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="p-4" style={{backgroundColor:'rgba(3, 138, 3, 0.774)', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                        <span className="responsive__text" style={{color:'white'}}>Being Sapien</span>
                        <img className='responsive__logo'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADBdv1qYl0TaZFmDEmwN07wAkg8LTS3JzVqPVx2_aG-xbm5o7lQxGAsavhw-WKReE9As&usqp=CAU" alt="" />
                        <div className="responsive__nav__list">
                            <li className="responsive__nav__list__items"><a href="/">home</a></li>
                            <li className="responsive__nav__list__items"><a href="/">treat a needy</a></li>
                            <li className="responsive__nav__list__items"><a href="/">contact author</a></li>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder='Type your query here...' aria-label="Search"/>
                            <button className="btn text-dark bg-light btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <nav className="navbar navbar-light bg-success">
                    <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="container text-light">Menu</span>
                    </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
