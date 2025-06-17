import React from 'react';
import { TeacherCardItem } from './TeacherCardItem';
import s from './Teacher.module.css';

export const TeacherCard = ({ teachers }) => {
  return (
    <div className={s.containerCard}>
      <ul className={s.listCard}>
        {teachers.map(teacher => (
          <TeacherCardItem key={teacher.avatar_url} teacher={teacher} />
        ))}
      </ul>
    </div>
  );
};
