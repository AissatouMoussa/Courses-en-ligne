import React from "react";

export const Navbar = () => {
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
                aria-label="search"/>
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
  const {fruit} = props
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={process.env.PUBLIC_URL + `/assets/${fruit.category}/${fruit.image}`}
          alt={fruit.name} />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>{fruit.name}</h4>
            </div>
            <div className="col-sm-6">
              <p>
                ${fruit.price}/{fruit.unit}
              </p>
              <button className="btn btn-warning btn-sm">view product</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal*/}
    </div>
  );
};

export const List = props => {
  const { data } = props
  const fruits = data[0]

console.log(fruits)

  return (
    <div className="col-sm">
      <div className="row">

        {fruits.map(fruit => <Card fruit={fruit}/>)}
      </div>
    </div>
  );
};

