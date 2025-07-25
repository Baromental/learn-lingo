import React from 'react';
import { InputField } from './InputField';
import { PasswordInputField } from './PasswordInputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { toast } from 'react-toastify';

import s from './BookForm.module.css';

export const AuthForm = ({ onDataSubmit, formType, schema, closeModal }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const handleLogin = async data => {
    try {
      await dispatch(loginThunk(data)).unwrap();
      closeModal();
    } catch (error) {
      toast.error('Login failed');
    }
  };

  const submit = async data => {
    try {
      await onDataSubmit(data);
      closeModal();
      reset();
    } catch (error) {
      toast.error('Operation failed');
    }
  };

  return (
    <div className={s.modal}>
      <h2 className={s.title}>
        {formType === 'register' ? 'Register' : 'Log In'}
      </h2>
      <p className={s.text}>
        {formType === 'register'
          ? 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information'
          : 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.'}
      </p>
      <form onSubmit={handleSubmit(submit)}>
        <div className={s.containerInputText}>
          {formType === 'register' && (
            <InputField
              className={s.inputText}
              register={register}
              errors={errors}
              placeholder="Name"
              name="name"
            />
          )}
          <InputField
            className={s.inputText}
            register={register}
            errors={errors}
            placeholder="Email"
            name="email"
          />
          <PasswordInputField
            className={s.inputText}
            register={register}
            errors={errors}
            placeholder="Password"
            name="password"
          />
        </div>
        <button className={s.btnConfirm}>
          {formType === 'register' ? 'Sign Up' : 'Log In'}
        </button>
      </form>
    </div>
  );
};
