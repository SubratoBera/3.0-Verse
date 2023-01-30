import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/animation.gif';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to our blockchain-based learning platform!</h1>
      <p>Our platform allows students to take control of their own learning journey. With our token-based incentives, we are also creating new opportunities for students to earn rewards for their achievements. Join us on our mission to empower the next generation of learners and builders. Sign up now to start your journey!</p>

      <div className="gpt3__header-content__input">
        <button type="button"><a href="#courses">Get Started</a></button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
