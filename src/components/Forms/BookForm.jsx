import React from 'react';

import s from './BookForm.module.css';

export const BookForm = ({ teacher }) => {
  return (
    <div className={s.modal}>
      <h2 className={s.title}>Book trial lesson</h2>
      <p className={s.text}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={s.teacherContainer}>
        <img
          className={s.avatar}
          src={teacher.avatar_url}
          alt={`Avatar of ${teacher.name}`}
        />
        <div className={s.teacherNameContainer}>
          <p className={s.label}>Your teacher</p>
          {/* <p className={s.name}> */}
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>
      <form>
        <fieldset className={s.containerRadio}>
          <legend className={s.legend}>
            What is your main reason for learning English?
          </legend>
          <div className={s.radioInputContainer}>
            <input
              className={s.inputRadio}
              type="radio"
              name="reason"
              value="career"
            />
            <label className={s.labelRadio} htmlFor="">
              Career and business
            </label>
          </div>
          <div className={s.radioInputContainer}>
            <input
              className={s.inputRadio}
              type="radio"
              name="reason"
              value="kids"
            />
            <label className={s.labelRadio} htmlFor="">
              Lesson for kids
            </label>
          </div>
          <div className={s.radioInputContainer}>
            <input
              className={s.inputRadio}
              type="radio"
              name="reason"
              value="abroad"
            />
            <label className={s.labelRadio} htmlFor="">
              Living abroad
            </label>
          </div>
          <div className={s.radioInputContainer}>
            <input
              className={s.inputRadio}
              type="radio"
              name="reason"
              value="exams"
            />
            <label className={s.labelRadio} htmlFor="">
              Exams and coursework
            </label>
          </div>
          <div className={s.radioInputContainer}>
            <input
              className={s.inputRadio}
              type="radio"
              name="reason"
              value="travel"
            />
            <label className={s.labelRadio} htmlFor="">
              Culture, travel or hobby
            </label>
          </div>
        </fieldset>
        <div className={s.containerInputText}>
          <input className={s.inputText} type="text" placeholder="Full name" />
          <input className={s.inputText} type="text" placeholder="Email" />
          <input
            className={s.inputText}
            type="text"
            placeholder="Phone number"
          />
        </div>
      </form>
      <button className={s.btnConfirm}>Book</button>
    </div>
  );
};
