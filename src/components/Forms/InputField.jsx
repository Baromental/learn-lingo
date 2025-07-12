import React from 'react';

import s from './BookForm.module.css';

export const InputField = ({ register, errors, name, placeholder }) => {
  return (
    <>
      <input
        className={s.inputText}
        id={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </>
  );
};
