import React, { useState } from 'react';
import { ReactComponent as StarIcon } from '../../images/star.svg';
import { ReactComponent as HeartIcon } from '../../images/heart.svg';
import { ReactComponent as FilledHeartIcon } from '../../images/filledHeart.svg';
import { ReactComponent as BookIcon } from '../../images/book.svg';
import { BookForm } from 'components/Forms/BookForm';
import { Modal } from 'components/Modal/Modal';
import s from './Teacher.module.css';
import { useDispatch } from 'react-redux';
import {
  addToFavoritesThunk,
  removeFromFavoritesThunk,
} from '../../redux/favorites/operation';

export const TeacherCardItem = ({ teacher, isFavorite }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavoritesThunk(teacher.id));
    } else {
      dispatch(addToFavoritesThunk(teacher.id));
    }
  };

  const handleToggleButton = () => {
    setIsOpen(!isOpen);
    return console.log(isOpen);
  };

  const handleOpenModal = () => {
    setIsOpenModal(prev => true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(prev => false);
  };

  return (
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
                <BookIcon className={s.upperIcon} />
                Lessons online
              </li>
              <li>Lessons done: {teacher.lessons_done} </li>
              <li className={s.itemIcon}>
                <StarIcon className={s.upperIcon} />
                Rating: {teacher.rating}
              </li>
              <li>
                Price / 1 hour:{' '}
                <span className={s.price}>{teacher.price_per_hour}$</span>
              </li>
            </ul>
          </div>
          <div>
            <button onClick={handleToggleFavorite} className={s.heart}>
              {isFavorite ? (
                <FilledHeartIcon className={s.heartIcon} />
              ) : (
                <HeartIcon className={s.heartIcon} />
              )}
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
        {isOpen && (
          <>
            <p className={s.paragraph}>{teacher.experience}</p>
            <ul className={s.listReviews}>
              {teacher.reviews.map(review => (
                <li className={s.listItemReviews}>
                  <div className={s.containerReviewName}>
                    <p className={s.reviewName}>{review.reviewer_name}</p>
                    <p className={s.reviewMark}>
                      <StarIcon />
                      {review.reviewer_rating}
                    </p>
                  </div>
                  <p className={s.reviewText}>{review.comment}</p>
                </li>
              ))}
            </ul>
          </>
        )}
        <button onClick={handleToggleButton} className={s.readMore}>
          {isOpen ? 'Close details' : 'Read more'}
        </button>
        <ul className={s.btnList}>
          {teacher.levels.map((level, index) => (
            <li key={index}>
              <button className={s.btnLevel}>{level}</button>
            </li>
          ))}
        </ul>
        <button onClick={handleOpenModal} className={s.btnBook}>
          Book trial lesson
        </button>
        {isOpenModal && (
          <Modal onClose={handleCloseModal}>
            <BookForm teacher={teacher} />
          </Modal>
        )}
      </div>
    </li>
  );
};
