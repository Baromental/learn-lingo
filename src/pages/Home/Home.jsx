import React from 'react';
import s from './Home.modules.css';

export const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.parImgContainer}>
        <div className={s.parContainer}>
          <h1 className={s.header}>
            Unlock your potential with the best<span>language</span>tutors
          </h1>
          <p className={s.paragraph}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className={s.button}>Get started</button>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className={s.listContainer}>
        <ul>
          <li>
            <p className={s.digit}>32,000 +</p>
            <p className={s.text}>Experienced tutors</p>
          </li>
          <li>
            <p className={s.digit}>300,000 +</p>
            <p className={s.text}>5-star tutor reviews</p>
          </li>
          <li>
            <p className={s.digit}>120 +</p>
            <p className={s.text}>Subjects taught</p>
          </li>
          <li>
            <p className={s.digit}>200 +</p>
            <p className={s.text}>Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
