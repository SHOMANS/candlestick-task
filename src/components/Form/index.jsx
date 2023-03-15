import React, { useCallback } from 'react';

// react hook form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import InputWithLabel from '../InputWithLabel';

// inputs array
import { inputsArray } from './inputsArray';

// utils
import { schema } from '../../utils/schema';
import { useNavigate } from 'react-router-dom';
import { convertToTimeStamp } from '../../utils/convertToTimeStamp';

export default function Form() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    ({ interval, type, from, to }) => {
      navigate(`?period1=${convertToTimeStamp(from)}&period2=${convertToTimeStamp(to)}&interval=${interval}${type}`);
    },
    [navigate]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputsArray.map((input) => (
        <InputWithLabel key={input.name} {...{ ...input, register, errors }} />
      ))}

      <input type='submit' />
    </form>
  );
}
