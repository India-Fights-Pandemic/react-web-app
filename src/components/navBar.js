import React from 'react';

class NavBar extends React.Component {

    render() {
        return (
          <nav className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll" color-on-scroll=" " id="sectionsNav">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand brand-logo" href="/">
                    <img src="images/logo.png" alt="logo" className="main-logo" />
                </a>
              </div>
            </div>
          </nav>
        );
      }
}

export default NavBar;