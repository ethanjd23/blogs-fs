import React from 'react'

const Header: React.FC = () => {
    return (
        <header className="masthead">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Full Stack Blog</h1>
                <span className="subheading">By Ethan Delcambre</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
