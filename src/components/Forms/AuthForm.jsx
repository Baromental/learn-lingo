import React from 'react';
import { InputField } from './InputField';
import { PasswordInputField } from './PasswordInputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const AuthForm = ({ onDataSubmit, formType, schema }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = data => {
    onDataSubmit(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        {formType === 'register' && (
          <InputField
            register={register}
            errors={errors}
            placeholder="Name"
            name="name"
          />
        )}
        <InputField
          register={register}
          errors={errors}
          placeholder="Email"
          name="email"
        />
        <PasswordInputField
          register={register}
          errors={errors}
          placeholder="Password"
          name="password"
        />
        <button>{formType === 'register' ? 'Sign Up' : 'Log In'}</button>
      </form>
    </div>
  );
};
