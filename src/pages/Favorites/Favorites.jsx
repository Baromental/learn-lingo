import { TeacherCard } from 'pages/Teachers/TeacherCard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoritesThunk } from '../../redux/favorites/operation';
import { selectFavoritesTeachers } from '../../redux/favorites/slice';

export const Favorites = () => {
  const favorites = useSelector(selectFavoritesTeachers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesThunk());
  }, [dispatch]);

  return (
    <div>
      <TeacherCard teachers={favorites} />
    </div>
  );
};
