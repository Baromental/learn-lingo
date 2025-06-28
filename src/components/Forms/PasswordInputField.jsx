import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const PasswordInputField = ({ register, errors, name, placeholder }) => {
  const [type, setType] = useState('password');
  return (
    <div>
      {/* <input
        id={name}
        placeholder={placeholder}
        {...register(name)}
        type={type}
      /> */}
      <button
        type="button"
        onClick={() => setType(type === 'password' ? 'text' : 'password')}
      >
        {type === 'password' ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};
