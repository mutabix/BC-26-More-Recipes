import React, { Component } from 'react';

import DashboardHeader from './DashboardHeader';
import Footer from './Footer';

class Dashboard extends Component {
  render() {
    return (
      <div className='body'>
        <DashboardHeader />
        <main>
          <div className="push-down">This is the Dashboard</div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;