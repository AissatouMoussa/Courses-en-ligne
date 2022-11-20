import React from "react";
import { useState } from "react";

export const Navbar = ({filter, setFiltering}) => {
  return (
    <nav className="navbar orange navbar-expend-lg navbar-light bg-light fixed-top">
      <a href=" " className="navbar-brand crimson">
        <i class="fas fa-shopping-cart"></i>Mes Courses en Ligne </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <from className="search form-inline my-2 my-lg-0">
              <input
                className="from-control mr-sm-2"
                type="search"
                placeholder="search"
                aria-label="search"
                onChange={(e) => {
                  setFiltering(e.target.value.length > 0)
                  filter(e.target.value)
                }}
                />
            </from>
          </div>
          <div className="menu-right">
            {/* Cart */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
};

export const Card = props => {
  const {item} = props
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`}
          alt={item.name} />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{item.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                ${item.price}/{item.unit}
              </p>
              <button className="btn btn-warning btn-sm"
              data-toggle="modal"
              data-target={`#${item.ref}`}>view product</button>
            </div>
          </div>
        </div>
      </div>
      <Modal item={item} />
    </div>
  
  );
};


export const Modal = ({ item }) =>{
const [count, setCount]= useState(1);
  return(
    <div 
     class="modal fade"
     id={item.ref}
     data-backdrop="static"
     tabindex="-1"
     role="dialog"
     aria-labelledby="staticBackdropLabel"
     aria-hidden="true">
      <div 
     class="modal-dialog model-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{item.name}</h5>
            <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="160"
                  height="160"
                  src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`}
                  alt="Citron" />
              </div>
              <div className="col-sm">
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Eveniet ullam veniam, rerum itaque maxime hic in iste odit repellendus sit corrupti tenetur.
                </p>
                <h3 className="price">$ {item.price}/{item.unit}</h3> <br />
                <div 
                    className="btn-group"
                    role="group"
                    aria-label="Basic-example">
                      <button
                      onClick={() => {
                        setCount(count > 1 ? count - 1 : 1)
                      }}
                      type="button"
                      className="btn btn-secondary">
                        -
                      </button>
                        <span className="btn btn-light qty">{count}</span>
                      <button
                      onClick={() => {
                        setCount(count + 1)
                      }}
                      type="button"
                      className="btn btn-secondary">
                        +
                      </button>
                    </div>
                    <br />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button 
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal">Fermer</button>
            <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal">Ajouter au Panier</button>
          </div>
        </div>
      </div>
    </div>
);
};

export const List = props => {
  const { data, category } = props
  return (
    <div className="col-sm">
      <div className="row">
        {data.map(item => <Card key={item.ref} item={item}/>)}
      </div>
    </div>
  );
};

