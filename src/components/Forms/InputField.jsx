import React from 'react';

export const InputField = ({ register, errors, name, placeholder }) => {
  return (
    <div>
      <input id={name} placeholder={placeholder} {...register(name)} />
      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
};
