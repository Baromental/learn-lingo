import { TeacherCard } from 'pages/Teachers/TeacherCard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoritesThunk } from '../../redux/favorites/operation';
import { selectFavoritesTeachers } from '../../redux/favorites/slice';
import { selectTeachers } from '../../redux/teachers/slice';
import { fetchTeachersThunk } from '../../redux/teachers/operations';

export const Favorites = () => {
  const favoriteIds = useSelector(selectFavoritesTeachers);
  const teachers = useSelector(selectTeachers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesThunk());

    if (!teachers || teachers.length === 0) {
      dispatch(fetchTeachersThunk());
    }
  }, [dispatch, teachers]);
  const favoriteTeachers = teachers.filter(teacher =>
    favoriteIds.includes(teacher.id)
  );

  return (
    <div>
      <TeacherCard teachers={favoriteTeachers} />
    </div>
  );
};
