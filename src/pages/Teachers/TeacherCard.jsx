import React from 'react';
import { TeacherCardItem } from './TeacherCardItem';
import s from './Teacher.module.css';

export const TeacherCard = ({ teachers }) => {
  return (
    <div className={s.containerCard}>
      {teachers.length ? (
        <ul className={s.listCard}>
          {teachers.map(teacher => (
            <TeacherCardItem key={teacher.id} teacher={teacher} />
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
