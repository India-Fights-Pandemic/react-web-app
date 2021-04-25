import React from 'react';
import * as Constants from '../config/constants';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event, option) {
    console.log(event, option);
  }

  handleSearchButtonClick() {
    console.log('Handle Search Button Clicked');
  }

  render() {

      const inputFields = Constants.RESOURCE_LIST.map((resource) => {
        return (
          <div className="col-md-12" key={resource.key}>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="concentrator" id="concentrator" onChange={(e) => this.handleInputChange(e, resource)} />
                <span>{resource.title}</span>
              </label>
            </div>
          </div>
        );
      })

        return (
          <>

          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="main-header ">Real-Time Search for Verified Covid-19 Resources</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="autocomplete col s12" style={{'position': 'relative'}}>
                    <h3 className="header light">Which city are you looking for help in?</h3>
                    <div className="form-group label-floating">
                      <label className="control-label">Enter City or Region Name</label>
                      <input id="myInput" type="text" name="myCountry" className="form-control"/>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <h3 className="header light">What resources are you looking for?</h3>
                  <h3 className="header2 light"><small className="header">Can select multiple options</small></h3>
                </div>

                {inputFields}

                <div className="col-md-12 text-center">
                  <button className="btn btn-primary btn-block custom-btn"
                    onClick={this.handleSearchButtonClick}>Search</button>
                </div>
              </div>
            </div>
          </div>

          </>
        );
      }
}

export default SearchForm;