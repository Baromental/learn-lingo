import React from 'react';
import { TeacherCard } from './TeacherCard';
import { useSelector } from 'react-redux';
import { selectTeachers } from '../../redux/teachers/slice';

export const Teachers = () => {
  const teachers = useSelector(selectTeachers);

  console.log(teachers);

  return (
    <div>
      <div>
        <ul>
          <li>
            <label htmlFor="languages">Languages</label>
            <select name="languages" id="languages">
              <option value="">testEng</option>
              <option value="">testDeu</option>
              <option value="">testSpa</option>
              <option value="">testFra</option>
            </select>
          </li>
          <li>
            <label htmlFor="level">Level of knowledge</label>
            <select name="level" id="level">
              <option value="">testA</option>
              <option value="">testB</option>
              <option value="">testC</option>
              <option value="">testD</option>
            </select>
          </li>
          <li>
            <label htmlFor="price">Price</label>
            <select name="price" id="price">
              <option value="">test1</option>
              <option value="">test2</option>
              <option value="">test3</option>
              <option value="">test4</option>
            </select>
          </li>
        </ul>
      </div>

      <TeacherCard />
      <button>Load more</button>
    </div>
  );
};
