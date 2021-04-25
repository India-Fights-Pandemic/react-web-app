import React from 'react';

import NavBar from './components/navBar';
import FooterBar from './components/footerBar';
import Volunteer from './components/volunteer';
import SearchForm from './components/searchForm';

class App extends React.Component {

  render () {
    return (
      <div className="index-page">

        <NavBar/>
        <Volunteer/>
        <SearchForm/>
        <FooterBar/>

      </div>
    );
  }

}

export default App;
