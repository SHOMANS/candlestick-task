import * as yup from 'yup';

export const schema = yup
  .object({
    interval: yup.number().min(1).required(),
    type: yup.string().required(),
    from: yup.date(),
    to: yup.date(),
  })
  .required();
