import React from 'react';

const Header = () => {
		return(
			<nav className="navbar navbar-expand-lg navbar-light header">
			<div className="container">
				  <a className="navbar-brand white-color" href="#">Tomato</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
				    {/*<ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Link</a>
				      </li>
				      <li className="nav-item dropdown">
				        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          Dropdown
				        </a>
				        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
				          <a className="dropdown-item" href="#">Action</a>
				          <a className="dropdown-item" href="#">Another action</a>
				          <div className="dropdown-divider"></div>
				          <a className="dropdown-item" href="#">Something else here</a>
				        </div>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link disabled" href="#">Disabled</a>
				      </li>
				    </ul>
				    <form className="form-inline my-2 my-lg-0">
				      <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" />
				      <button className="btn my-2 my-sm-0 search-button" type="submit">Search</button>
				    </form>*/}
				  </div>
				</div>
			</nav>
			);
	}

export default Header;
