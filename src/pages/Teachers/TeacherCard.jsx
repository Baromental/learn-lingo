import React from 'react';
import star from '../../images/star.svg';
import heart from '../../images/heart.svg';
import book from '../../images/book.svg';
import s from './Teacher.module.css';

export const TeacherCard = ({ teachers }) => {
  return (
    <div className={s.containerCard}>
      <ul className={s.listCard}>
        {teachers.map(teacher => (
          <li key={teacher.avatar_url} className={s.listItemCard}>
            <div className={s.avatarContainer}>
              <img
                className={s.avatar}
                src={teacher.avatar_url}
                alt={`Avatar of ${teacher.name}`}
              />
            </div>
            <div>
              <div className={s.containerUpperCard}>
                <div>
                  <p className={s.languages}>Languages</p>
                  <p className={s.name}>
                    {teacher.name} {teacher.surname}
                  </p>
                </div>
                <div>
                  <ul className={s.containerUpperInfoCard}>
                    <li className={s.itemIcon}>
                      <img className={s.upperIcon} src={book} alt="book"></img>
                      Lessons online
                    </li>
                    <li>Lessons done: {teacher.lessons_done} </li>
                    <li className={s.itemIcon}>
                      <img className={s.upperIcon} src={star} alt="star"></img>
                      Rating: {teacher.rating}
                    </li>
                    <li>
                      Price / 1 hour:{' '}
                      <span className={s.price}>{teacher.price_per_hour}$</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <button className={s.heart}>
                    <img src={heart} alt="heart" />
                  </button>
                </div>
              </div>
              <ul className={s.listInfo}>
                <li>
                  <span className={s.listInfoSpan}>Speaks:</span>{' '}
                  <span className={s.listInfoItemLanguage}>
                    {teacher.languages.join(', ')}
                  </span>
                </li>
                <li>
                  <span className={s.listInfoSpan}>Lesson Info:</span>{' '}
                  {teacher.lesson_info}
                </li>
                <li>
                  <span className={s.listInfoSpan}>Conditions:</span>{' '}
                  {teacher.conditions.join(' ')}
                </li>
              </ul>
              <button className={s.readMore}>Read more</button>
              <p className={s.paragraph}>{teacher.experience}</p>
              <ul className={s.listReviews}>
                {teacher.reviews.map(review => (
                  <li className={s.listItemReviews}>
                    <div className={s.containerReviewName}>
                      <p className={s.reviewName}>{review.reviewer_name}</p>
                      <p className={s.reviewMark}>
                        <img src={star} alt="star"></img>
                        {review.reviewer_rating}
                      </p>
                    </div>
                    <p className={s.reviewText}>{review.comment}</p>
                  </li>
                ))}
              </ul>
              <ul className={s.btnList}>
                {teacher.levels.map(level => (
                  <li>
                    <button className={s.btnLevel}>{level}</button>
                  </li>
                ))}
              </ul>
              <button className={s.btnBook}>Book trial lesson</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
