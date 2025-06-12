import React, { useEffect } from 'react';
import { TeacherCard } from './TeacherCard';
import { useSelector, useDispatch } from 'react-redux';
import { selectTeachers } from '../../redux/teachers/slice';
import { fetchTeachersThunk } from '../../redux/teachers/operations';
import s from './Teacher.module.css';

export const Teachers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachersThunk());
  }, [dispatch]);

  const teachers = useSelector(selectTeachers);

  console.log(teachers);

  return (
    <div className={s.container}>
      <div>
        <ul className={s.listSelect}>
          <li className={s.listItemSelect}>
            <label className={s.labelSelect} htmlFor="languages">
              Languages
            </label>
            <select className={s.select} name="languages" id="languages">
              <option value="">English</option>
              <option value="">French</option>
              <option value="">German</option>
              <option value="">Polish</option>
              <option value="">Ukrainian</option>
            </select>
          </li>
          <li className={s.listItemSelect}>
            <label className={s.labelSelect} htmlFor="level">
              Level of knowledge
            </label>
            <select className={s.select} name="level" id="level">
              <option value="">A1 Beginner</option>
              <option value="">A2 Elementary</option>
              <option value="">B1 Intermediate</option>
              <option value="">B2 Upper-Intermediate</option>
            </select>
          </li>
          <li className={s.listItemSelect}>
            <label className={s.labelSelect} htmlFor="price">
              Price
            </label>
            <select className={s.select} name="price" id="price">
              <option value="">10 $</option>
              <option value="">20 $</option>
              <option value="">30 $</option>
              <option value="">40 $</option>
            </select>
          </li>
        </ul>
      </div>
      <TeacherCard teachers={teachers} />
      <button>Load more</button>
    </div>
  );
};
