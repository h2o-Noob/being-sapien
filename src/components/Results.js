import React from 'react'
import './result.css'
import { useContext } from 'react'
import reportsContext from '../context/reports/reportsContext'
import { useEffect } from 'react'

function Results(props) {

    return (
            <div className="srch__results">
                <div class="card bg-success" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title text-light">{props.animal} </h5>
                        <ul class="list-group">
                            <li class="list-group-item">
                            <span class="badge bg-success">location</span>
                            <p class="card-text">{props.location}</p>
                            </li>
                            <li class="list-group-item">
                            <span class="badge bg-success">aid needed and info</span>
                            <p class="card-text">{props.info}</p>
                            </li>
                            <li class="list-group-item">
                            <span class="badge bg-success">uploaded by</span>
                            <p class="card-text">{props.name}<br/>{props.email}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Results
