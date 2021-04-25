import React from 'react';

class Volunteer extends React.Component {

    render() {
        return (
          <div className="col-md-12 text-right">
            <button  className="btn btn-simple custom-btn-link" data-toggle="modal" data-target="#myModal2">
              🧑‍🤝‍🧑 <span>Volunteer </span>
            </button>
          </div>
        );
      }
}

export default Volunteer;