import React from 'react';

class FooterBar extends React.Component {

    render() {
        return (
          <>
            <div className="space-70"></div>
            <div className="row padd-left-footer">

              <div className="col-md-6">
                <div className="row ">
                  <div className="col-xs-1">
                    <h2 className="footer-text">❤️</h2>
                  </div>
                  <div className="col-xs-10">
                    <h5 className="footer-text"><b>About Us</b></h5>
                    <h5 className="footer-text email-text">India Fights Pandemic is an Open Source voluntary project that
                      searches the Internet to surface real-time availability of essential Covid-19 resources in India. See our <a href="humans.txt">humans.txt</a> to know more.</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row ">
                  <div className="col-xs-1">
                    <h2 className="footer-text">✉️</h2>
                  </div>
                  <div className="col-xs-10">
                    <h5 className="footer-text"><b>Reach On</b></h5>
                    <h5 className="footer-text email-text">
                      <a href="mailto:volunteers@indiafightspandemic.com">volunteers@indiafightspandemic.com</a>
                    </h5>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-xs-1">
                    <button className="btn btn-simple btn-twitter">
                      <h2 className="footer-text"><i className="fa fa-twitter"></i></h2>
                    </button>
                  </div>
                  <div className="col-xs-10">
                    <h5 className="footer-text"><b>Twitter</b></h5>
                    <h5 className="footer-text email-text">
                      <a href="https://twitter.com/IndFights_Covid" target="_blank" rel="noreferrer">@IndFights_Covid</a>
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </>
        );
      }
}

export default FooterBar;