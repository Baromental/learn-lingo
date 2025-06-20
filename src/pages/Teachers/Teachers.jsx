import React, { useEffect, useState } from 'react';
import { TeacherCard } from './TeacherCard';
import { useSelector, useDispatch } from 'react-redux';
import { selectTeachers } from '../../redux/teachers/slice';
import { fetchTeachersThunk } from '../../redux/teachers/operations';
import s from './Teacher.module.css';

export const Teachers = () => {
  const [visibleTeachers, setVisibleTeachers] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const [filters, setFilters] = useState({
    language: '',
    level: '',
    price: '',
  });
  const teachers = useSelector(selectTeachers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachersThunk());
  }, [dispatch]);

  useEffect(() => {
    const filteredTeachers = handleFilter(teachers, filters);
    setVisibleTeachers(filteredTeachers.slice(0, displayCount));
  }, [teachers, filters, displayCount]);

  const handleFilter = (teachers, filters) => {
    return teachers.filter(teachers => {
      const matchLang = filters.language
        ? teachers.languages.includes(filters.language)
        : true;
      const matchLevel = filters.level
        ? teachers.levels.includes(filters.level)
        : true;
      const matchPrice = filters.price
        ? teachers.price_per_hour <= Number(filters.price)
        : true;
      return matchLang && matchLevel && matchPrice;
    });
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 4);
  };

  return (
    <div className={s.container}>
      <div>
        <ul className={s.listSelect}>
          <li className={s.listItemSelect}>
            <label className={s.labelSelect} htmlFor="languages">
              Languages
            </label>
            <select
              onChange={e =>
                setFilters(prev => ({ ...prev, language: e.target.value }))
              }
              className={s.select}
              name="languages"
              id="languages"
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Spanish">Spanish</option>
            </select>
          </li>
          <li className={s.listItemSelect}>
            <label className={s.labelSelect} htmlFor="level">
              Level of knowledge
            </label>
            <select
              onChange={e =>
                setFilters(prev => ({ ...prev, level: e.target.value }))
              }
              className={s.select}
              name="level"
              id="level"
            >
              <option value="A1 Beginner">A1 Beginner</option>
              <option value="A2 Elementary">A2 Elementary</option>
              <option value="B1 Intermediate">B1 Intermediate</option>
              <option value="B2 Upper-Intermediate">
                B2 Upper-Intermediate
              </option>
              <option value="C1 Advanced">C1 Advanced</option>
              <option value="C2 Proficient">C2 Proficient</option>
            </select>
          </li>
          <li className={s.listItemSelect}>
            <label className={s.labelSelect} htmlFor="price">
              Price
            </label>
            <select
              onChange={e =>
                setFilters(prev => ({ ...prev, price: e.target.value }))
              }
              className={s.select}
              name="price"
              id="price"
            >
              <option value="25">25 $</option>
              <option value="30">30 $</option>
              <option value="35">35 $</option>
              <option value="40">40 $</option>
            </select>
          </li>
        </ul>
      </div>
      <TeacherCard teachers={visibleTeachers} />
      {visibleTeachers.length < handleFilter(teachers, filters).length && (
        <button onClick={handleLoadMore} className={s.btnLoad}>
          Load more
        </button>
      )}
    </div>
  );
};
