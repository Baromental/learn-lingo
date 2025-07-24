import React from 'react';
import { TeacherCardItem } from './TeacherCardItem';
import s from './Teacher.module.css';
import { selectFavoritesTeachers } from '../../redux/favorites/slice';
import { useSelector } from 'react-redux';

export const TeacherCard = ({ teachers }) => {
  const favoriteIds = useSelector(selectFavoritesTeachers);
  return (
    <div className={s.containerCard}>
      {teachers.length ? (
        <ul className={s.listCard}>
          {teachers.map(teacher => (
            <TeacherCardItem
              key={teacher.id}
              teacher={teacher}
              isFavorite={favoriteIds.includes(teacher.id)}
            />
          ))}
        </ul>
      ) : (
        <h2 className={s.notFoundTitle}>
          Sorry! No teacher was found according to the selected filter.
        </h2>
      )}
    </div>
  );
};
