import React, { Component } from 'react';

import HomeHeader from './HomeHeader';
import Footer from './Footer';

class Home extends Component {
  renderIntro = () => {
    return (
      <div>
        <div>
          <img src="images/egusi.jpg" width="100%" alt="Sample food 1" />
          {/*<h2 className="overlay">It's all about the food... and sometimes the drinks</h2>*/}
        </div>

        <div className="intro">
          <h3 className="full-title">More-Recipes</h3>
          <p> More-Recipes is your social media for connecting with wonderful delicacies! </p>
          <ul>
            <li> ~ Share your recipe ideas and inventions with the world</li>
            <li> ~ Try something new from others recipe ideas </li>
            <li> ~ Share your feedback about the new experience (Upvote, downvote or express how you feel in your own words!)</li>
            <li> ~ Like a recipe? Yes, you can add it to your own favorite recipes list</li>
          </ul>
        </div>

        <div>
          <img src="images/efo.jpg" width="100%" alt="Sample food 2" />
          {/*<h2 className="overlay">So, anyone hungry yet?</h2>*/}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='body'>
        <HomeHeader />
        <main>
          {this.renderIntro()}
          <center><span className="full-title">Featured Recipes</span></center>
          <div className="rounded-line" />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;