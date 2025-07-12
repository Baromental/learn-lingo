import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import s from './BookForm.module.css';

export const PasswordInputField = ({ register, errors, name, placeholder }) => {
  const [type, setType] = useState('password');
  return (
    <div className={s.containerPassword}>
      <input
        className={s.inputPassword}
        id={name}
        placeholder={placeholder}
        {...register(name)}
        type={type}
      />
      <button
        className={s.iconBtn}
        type="button"
        onClick={() => setType(type === 'password' ? 'text' : 'password')}
      >
        {type === 'password' ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};
