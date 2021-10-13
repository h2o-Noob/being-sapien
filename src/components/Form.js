import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

function Form() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
          id="basic-addon1"
        >
          Full Name
        </span>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
        >
          Email id
        </span>
        <input type="text" className="form-control" aria-label="Username" />
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
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="basic-addon3"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
        >
          number of animals
        </span>
        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div
        className="radios my-4"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <span
          className="input-group-text"
          id="basic-addon3"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
        >
          type of aid
        </span>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="aid"
            id="food"
          />
          <label className="form-check-label text-light" for="aid">
            Food aid
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="aid"
            id="medical"
          />
          <label className="form-check-label text-light" for="aid">
            Medical aid
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="aid"
            id="missing"
            checked
          />
          <label className="form-check-label text-light" for="aid">
            Report missing
          </label>
        </div>
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
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
        >
          Locality
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
      </div>
      <div className="input-group">
        <span
          className="input-group-text"
          style={{ backgroundColor: "rgb(4, 204, 2)", color: "white" }}
        >
          Additional information
        </span>
        <textarea
          className="form-control"
          placeholder="identification on animal if any or any specific item required"
          aria-label="With textarea"
        ></textarea>
      </div>
      <button
        type="button"
        style={{ backgroundColor: "white" }}
        className="btn my-5 search"
      >
        submit
      </button>
    </div>
  );
}

export default Form;
