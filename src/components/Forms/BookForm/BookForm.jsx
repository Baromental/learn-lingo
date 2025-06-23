import React from 'react';

import s from './BookForm.module.css';

export const BookForm = ({ teacher }) => {
  return (
    <div>
      <h2>Book trial lesson</h2>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div>
        <img
          className={s.avatar}
          src={teacher.avatar_url}
          alt={`Avatar of ${teacher.name}`}
        />
        <div>
          <p>Your teacher</p>
          <p className={s.name}>
            {teacher.name} {teacher.surname}
          </p>
        </div>
        <fieldset>
          <legend>What is your main reason for learning English?</legend>
          <div>
            <input type="radio" name="reason" value="career" />
            <label htmlFor="">Career and business</label>
          </div>
          <div>
            <input type="radio" name="reason" value="kids" />
            <label htmlFor="">Lesson for kids</label>
          </div>
          <div>
            <input type="radio" name="reason" value="abroad" />
            <label htmlFor="">Living abroad</label>
          </div>
          <div>
            <input type="radio" name="reason" value="exams" />
            <label htmlFor="">Exams and coursework</label>
          </div>
          <div>
            <input type="radio" name="reason" value="travel" />
            <label htmlFor="">Culture, travel or hobby</label>
          </div>
        </fieldset>
        <div>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone number" />
        </div>
        <button>Book</button>
      </div>
    </div>
  );
};
