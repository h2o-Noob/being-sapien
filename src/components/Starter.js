import React, {useState} from 'react'
import './starter.css'

function Starter() {

    const [img, setImg] = useState("https://frontiersinblog.files.wordpress.com/2020/01/frontiers-psychology-stray-dogs-human-cues-behavior.jpg")

    return (
        <>
            <div className='starter'>
            </div>
            <div className="fact-box">
                <div className="static-txt">
                    More Than
                </div>
                <ul className="dynamic-txt">
                    <li><span></span></li>
                    <li><span>100 cats are runover every year</span></li>
                    <li><span>100 dogs are abandoned every year</span></li>
                    <li><span>70kg plastic consumed by cows</span></li>
                </ul>
            </div>
        </>
    )
}

export default Starter
