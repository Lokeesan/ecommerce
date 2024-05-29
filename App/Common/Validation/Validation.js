import * as yup from 'yup';

const emailValidation = yup.string().email().label('Email').required();
const passwordValidation = yup
  .string()
  .min(6)
  .max(12)
  .label('Password')
  .test(
    'uppercase',
    'Password must contain at least one uppercase letter',
    value => /[A-Z]/.test(value),
  )
  .test(
    'lowercase',
    'Password must contain at least one lowercase letter',
    value => /[a-z]/.test(value),
  )
  .test('digit', 'Password must contain at least one digit', value =>
    /\d/.test(value),
  );

export {emailValidation, passwordValidation};
