import React from 'react';
import star from '../../images/star.svg';
import heart from '../../images/heart.svg';

export const TeacherCard = ({ teachers }) => {
  return (
    <div>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher.index}>
            <div>
              <img src={teacher.avatar_url} alt="" />
            </div>
            <div>
              <div>
                <div>
                  <p>Languages</p>
                  <p>
                    {teacher.name} {teacher.surname}
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      <i></i>
                      Lessons online
                    </li>
                    <li>Lessons done: {teacher.lessons_done} </li>
                    <li>
                      <img src={star} alt="star"></img>
                      Rating: {teacher.rating}
                    </li>
                    <li>
                      Price / 1 hour: <span>{teacher.price_per_hour}$</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <button>
                    <img src={heart} alt="heart" />
                  </button>
                </div>
              </div>
              <div>
                <ul>
                  <li>Speaks: {teacher.languages.join(', ')}</li>
                  <li>Lesson Info: {teacher.lesson_info}</li>
                  <li>Conditions: {teacher.conditions.join(' ')}</li>
                </ul>
              </div>
              <button>Read more</button>
              <p>{teacher.experience}</p>
              <ul>
                reviews
                {teacher.reviews.map(review => (
                  <li>
                    <div>
                      <div>
                        <p>{review.reviewer_name}</p>
                        <p>
                          <img src={star} alt="star"></img>
                          {review.reviewer_rating}
                        </p>
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {teacher.levels.map(level => (
                  <li>
                    <button>{level}</button>
                  </li>
                ))}
              </ul>
              <button>Book trial lesson</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
