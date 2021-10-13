import { useState , useEffect } from 'react';
import React from 'react'
import db from './firebase'
import { collection, onSnapshot } from '@firebase/firestore';
import './srch.css'

function Srch() {

    const [data, setData] = useState([
        {
            name: 'nirmal',
            aid: 'food',
            animal: 'cow'
        }
    ])


    useEffect(() => {
        const unSub = onSnapshot(collection(db, 'reports'), (snapshot)=>{
            setData(snapshot.docs.map((doc) => doc.data()))
        })
        return unSub
    }, [])
    console.log(data)
    return (
        <div className="srch">
            <div className="srch__results">
                {
                    data.map(() => (
                        <>
                            <h1>{data[0].name}</h1>
                            <h1>{data[0].aid}</h1>
                            <h1>{data[0].animal}</h1>
                            <h1>{data[0].email}</h1>
                            <h1>{data[0].info}</h1>
                            <h1>{data[0].count}</h1>
                            <h1>{data[0].locality}</h1>
                            <h1>{data[0].location}</h1>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Srch
