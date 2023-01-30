import React from 'react';
import './Courses.css';
import Article from '../article/Article';
import { blog01, blog02, blog03, blog04, blog05, blog06 } from '../../containers/blog/imports';

const Courses = () => (
  <div className="gpt3__courses section__padding" id="courses">
    <div className="gpt3__courses-heading">
      <h1 className="gradient__text">Courses</h1>
    </div>
    <div className="gpt3__courses-container">
      <div className="gpt3__courses-container_groupB">
        <Article imgUrl={blog01} text="Blockchain Breakthrough: Understanding the Disruptive Technology" />
        <Article imgUrl={blog02} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog06} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Courses;

