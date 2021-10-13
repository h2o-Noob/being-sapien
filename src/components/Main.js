import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import './main.css'

function Main() {
    return (
        <div className="main">
            <h1 style={{textAlign: 'center', color: 'white', fontSize: '4rem', fontWeight: '200'}}>Treat a needy</h1>
            <div className="head">
            </div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="120000">
                        <div className="form search__form">
                        <h1 className="search__badge" style={{margin: "0vw 8vw"}}><span className="badge bg-light my-5" style={{color: 'rgb(4, 204, 4)', margin: 'auto'}}>Report animal in need</span></h1>
                            <Form/>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="120000" style={{paddingBottom: '4vh'}}>
                        <span style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <h1><span className="badge bg-light my-5" style={{color: 'rgb(4, 204, 4)', margin: 'auto'}}>Search animals arround you</span></h1>
                        <input type="text" className="form-control search__bar" placeholder="type your location" aria-label="Username" aria-describedby="basic-addon1"/>
                        <button type="button" style={{backgroundColor: 'white'}} className="btn my-5 search"><Link style={{textDecoration: 'none', color: 'rgb(4, 204, 4)',}} to='/srch'>search</Link></button>
                        </span>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Main
