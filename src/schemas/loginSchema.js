import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Email is required!')
    .email('Email is not valid!'),
  password: yup
    .string()
    .required('Password is required!')
    .max(20, 'Must be less than 20 chars!')
    .min(8, 'Must be more than 8 chars!'),
});
