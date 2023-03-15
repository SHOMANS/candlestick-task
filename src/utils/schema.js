import * as yup from 'yup';
import { atLeastOne, greaterThan, requiredMessage, typeDate, typeNumber, typeString } from './errorMessages';

export const schema = yup.object({
  interval: yup.number().typeError(typeNumber).min(1, atLeastOne).required(requiredMessage),
  type: yup.string(typeString).required(requiredMessage),
  from: yup.date().typeError(typeDate).required(requiredMessage),
  to: yup
    .date(typeDate)
    .typeError(typeDate)
    .when('from', (from, schema) => {
      try {
        return from && schema.min(from, greaterThan);
      } catch (error) {
        return schema;
      }
    })
    .required(requiredMessage),
});
