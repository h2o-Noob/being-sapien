import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Srch from "./Srch";
import "./form.css";
import reportsContext from "../context/reports/reportsContext";
import ReportsState from '../context/reports/ReportsState';

function Form() {

  const [data, setdata] = useState({name:"", email:"", aid:"", info:"", location:"", animal:""})

  const a = useContext(reportsContext)
  const {addReports} = a

  const onChange =(e)=>{
      setdata({...data, [e.target.name]: e.target.value})
  }

  const handleClick = (e)=>{
      e.preventDefault();
      addReports(data)
      console.log(data)
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
        >
          Full Name
        </span>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={onChange}
          id="name"
          name="name"
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
        >
          Email id
        </span>
        <input 
        type="text" 
        className="form-control" 
        aria-label="Username" 
        onChange={onChange}
        id="email"
        name="email"
          />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="basic-addon2"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
        >
          Type of animal
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="dog/cat/cow etc..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={onChange}
          id="animal"
          name="animal"
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
        >
          Location
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
            name="location"
            id="location"
            onChange={onChange}
        />
      </div>
      <div className="input-group">
        <span
          className="input-group-text"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
        >
          Aid needed and info
        </span>
        <textarea
          className="form-control"
          placeholder="identification on animal if any or any specific item required"
          aria-label="With textarea"
          name="info"
          id="info"
          onChange={onChange}
        ></textarea>
      </div>
      <button
        type="button"
        style={{ backgroundColor: "white" }}
        className="btn my-5 search"
        onClick={(e) =>{
          handleClick(e)
        }}
      >
        submit
      </button>
    </div>
  );
}

export default Form;
