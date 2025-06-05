import React from 'react';
import s from './Home.module.css';
import face from '../../images/face.png';
import mac from '../../images/mac.png';

export const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.parImgContainer}>
        <div className={s.parContainer}>
          <h1 className={s.header}>
            Unlock your potential with the best{' '}
            <span className={s.span}>language</span> tutors
          </h1>
          <p className={s.paragraph}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className={s.button}>Get started</button>
        </div>
        <div className={s.imgContainer}>
          <img className={s.head} src={face} alt="face" />
          <img className={s.mac} src={mac} alt="mac" />
        </div>
      </div>
      <div className={s.listContainer}>
        <ul className={s.list}>
          <li className={s.listItem}>
            <p className={s.digit}>32,000 +</p>
            <p className={s.text}>Experienced tutors</p>
          </li>
          <li className={s.listItem}>
            <p className={s.digit}>300,000 +</p>
            <p className={s.text}>5-star tutor reviews</p>
          </li>
          <li className={s.listItem}>
            <p className={s.digit}>120 +</p>
            <p className={s.text}>Subjects taught</p>
          </li>
          <li className={s.listItem}>
            <p className={s.digit}>200 +</p>
            <p className={s.text}>Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
