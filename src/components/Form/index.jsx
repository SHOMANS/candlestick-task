import React, { useCallback, useEffect, useMemo } from 'react';

// react hook form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import InputWithLabel from '../InputWithLabel';
import LinkButton from '../LinkButton';

// inputs array
import { inputsArray } from './inputsArray';

// utils
import { schema } from '../../utils/schema';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { convertToTimeStamp } from '../../utils/convertToTimeStamp';
import { convertTimeStampToDate } from '../../utils/convertTimeStampToDate';

// api
import { downloadCSV } from '../../api/endpoints';

// style
import './style.css';

export default function Form({ isRenderChart }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [searchParams] = useSearchParams();
  const currentParams = Object.fromEntries([...searchParams]);

  const downloadCSVFileLink = useMemo(() => {
    return downloadCSV(currentParams);
  }, [currentParams]);

  const onSubmit = useCallback(
    ({ interval, type, from, to }) => {
      navigate(`?period1=${convertToTimeStamp(from)}&period2=${convertToTimeStamp(to)}&interval=${interval}${type}`);
    },
    [navigate]
  );

  const setValuesFromQuery = useCallback(
    (params) => {
      setValue('interval', Number(params?.interval?.replace(/\D/g, ''))); // remove all non-digits
      setValue('type', params?.interval?.replace(/[0-9]/g, '')); // remove all digits
      setValue('from', convertTimeStampToDate(params.period1));
      setValue('to', convertTimeStampToDate(params.period2));
    },
    [setValue]
  );

  useEffect(() => {
    if (isRenderChart) setValuesFromQuery(currentParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRenderChart, setValuesFromQuery]);

  return (
    <>
      <h2 className='form_title'>Enter The Data To show the chart</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputsArray.map((input) => (
          <InputWithLabel key={input.name} {...{ ...input, register, errors }} />
        ))}

        <input className='submit_button' type='submit' />
        {isRenderChart && <LinkButton href={downloadCSVFileLink}>Download CSV</LinkButton>}
      </form>
    </>
  );
}
