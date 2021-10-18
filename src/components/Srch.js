import { useState , useEffect, useContext } from 'react';
import React from 'react'
import './result.css'
import Results from './Results'
import reportsContext from '../context/reports/reportsContext';
function Srch() {
    
    const a = useContext(reportsContext)
    const {reports} = a
    console.log(reports)
    console.log('ju')
    return (
        <>
            <div className="srch">
                <div className="srch__result">
                    <div class="row">
                        <div class="col mx-5 my-5">
                            {
                                reports.map((x)=>{
                                    return <Results name={x.name} email={x.email} animal={x.animal} location={x.location} aid={x.aid} info={x.info}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>    
        )
}


export default Srch
