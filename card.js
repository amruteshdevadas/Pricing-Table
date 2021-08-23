//this file is a sub file for APP.js in this we create a component called card.
import React from "react";

//this is a function based component
//so in ths function we write JSX  its a combination of html and Javascript we use {//here goes Javascript}
//class will be declared as ClassName (its a naming convention React follows)
export default function card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.data.packageName}
          </h5>
          <h6 className="card-price text-center">
            {props.data.price}
            {props.data.currency}
            <span className="period">/{props.data.period}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.data.features.map((plan) => {
              return (
                <li className={plan.isEnabled ? "" : "text-muted"}>
                  <span class="fa-li">
                    <i
                      className={`fas ${
                        plan.isEnabled ? "fa-check" : "fa-times"
                      }`}
                    ></i>
                  </span>
                  {plan.isBold ? (
                    <strong>{plan.name}</strong>
                  ) : (
                    <span>{plan.name}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
