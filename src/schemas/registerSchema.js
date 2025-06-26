import * as yup from 'yup';

export const registerSchema = yup
  .object({
    name: yup
      .string()
      .required('Name is required!')
      .max(15, 'Must be less than 15 chars!')
      .min(3, 'Must be more than 3 chars!'),
    email: yup
      .string()
      .required('Email is required!')
      .email('Email is not valid!'),
    password: yup
      .string()
      .required('Password is required!')
      .max(20, 'Must be less than 20 chars!')
      .min(8, 'Must be more than 8 chars!'),
  })
  .required();
